from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from sklearn.model_selection import train_test_split
import json
import pandas as pd
import nltk
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np
import requests


app = FastAPI()
analyzer = SentimentIntensityAnalyzer()
# nltk.download('vader_lexicon')

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

# class TextProposal(BaseModel):
#     question: str
#     res: str

#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, value):
#         if not isinstance(value, dict):
#             raise ValueError("Must be a dictionary")
#         # Your validation logic here
#         return cls(**value)

# class CorrelationProposal(BaseModel):
#     proposal: str
#     vote: int

class DataParamsTypes(BaseModel):
    user_id: str
    characteristics_questions: str

    class Config:
        arbitrary_types_allowed = True

class PredictionParams(BaseModel):
    # beh_model :str
    proposal:str
    user_address:str

main_api_service_url = "http://zxdao-env.eba-qwpcnavq.us-east-1.elasticbeanstalk.com/"

def get_sentiment_scores(text):
    return analyzer.polarity_scores(text)

def extract_sentiment_features(sentiment_dict):
    return list(sentiment_dict.values())

@app.post("/postSentiment")
async def post_sentiment_data(dataParams:DataParamsTypes):
    print(dataParams)
    # Parse the stringified JSON array
    characteristics_dataArray = json.loads(dataParams.characteristics_questions)
    
    # Take only the first 10 entries
    characteristics_data = characteristics_dataArray[:10]
    print(characteristics_data)
    questions = [textproposal['question'] for textproposal in characteristics_data]
    text_responses = [textproposal['res'] for textproposal in characteristics_data]
    df1 = pd.DataFrame(questions, columns=['Questions'])
    df1['User_Responses'] = text_responses
    df1.columns = ['questions', 'User_1']
    # Apply VADER sentiment analysis to each column (user responses and questions) in the DataFrame
    for column in ['questions','User_1']:
        df1[f'{column}_sentiment'] = df1[column].apply(get_sentiment_scores)

    result_df=df1
    vader_df = result_df.filter(like='_sentiment').copy()

    characteristics_data1 = characteristics_dataArray[10:20]
    proposals = [belproposals['proposal'] for belproposals in characteristics_data1]
    proposal_votes = [belproposals['vote'] for belproposals in characteristics_data1]
    print("proposals - ", proposals)
    df2 = pd.DataFrame(proposals, columns=['proposals'])
    print(df2)
    df2['vote'] = proposal_votes

    df_final = pd.concat([df2, vader_df.reset_index(drop=True)], axis=1)

    # Apply the function to create sentiment features columns
    df_final[['questions_neg', 'questions_neu', 'questions_pos', 'questions_compound']] = pd.DataFrame(
        df_final['questions_sentiment'].apply(extract_sentiment_features).tolist(), index=df_final.index)

    df_final[['User_1_neg', 'User_1_neu', 'User_1_pos', 'User_1_compound']] = pd.DataFrame(
        df_final['User_1_sentiment'].apply(extract_sentiment_features).tolist(), index=df_final.index)
    
    json_result = df_final.to_json(orient="records", default_handler=str)

    return JSONResponse(content=json_result)



    #convert the dataframe into json type and send back to the client... give the code for it 
    # Return the payload as JSON response
    # return JSONResponse(content=payload)


@app.post("/getPredictedValues")
async def get_predicted_sentiment(sentimentParams:PredictionParams):
    # get the user_char_array from the db : res, use requests module
    api_url = main_api_service_url + "/api/users/get"
    req_body = {"user_address":sentimentParams.user_address}

    response = requests.post(api_url, req_body)

    json_result = json.loads(response.user.user_characteristics_beh_df)
    df_restored = pd.read_json(json_result, orient='records', convert_dates=False)

    df_final = df_restored

    features = [
    'questions_neg', 'questions_neu', 'questions_pos', 'questions_compound',
    'User_1_neg', 'User_1_neu', 'User_1_pos', 'User_1_compound'
        ]
    target = 'vote'

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(df_final[features], df_final[target], test_size=0.2,    random_state=42)
    # Initialize the Random Forest classifier with the best hyperparameters
    best_rf_model = RandomForestClassifier(
    max_depth=None, min_samples_leaf=2, min_samples_split=5, n_estimators=50, random_state=42)
    best_rf_model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = best_rf_model.predict(X_test)

    # Evaluate the model accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print(f'Model Accuracy: {accuracy:.2%}')

    # Display feature importances
    feature_importances = best_rf_model.feature_importances_
    for feature, importance in zip(features, feature_importances):
        print(f'{feature}: {importance}')

    # Sentiment analysis for a new proposal
    new_proposal_text = sentimentParams.proposal
    analyzer = SentimentIntensityAnalyzer()
    new_proposal_sentiment = get_sentiment_scores(new_proposal_text)

    # Extract sentiment features for the new proposal
    new_proposal_features = extract_sentiment_features(new_proposal_sentiment) + \
                        extract_sentiment_features(new_proposal_sentiment)    

    new_proposal_features_2d = np.array(new_proposal_features).reshape(1, -1)
    
    # Use the trained model for prediction
    predicted_vote = best_rf_model.predict(new_proposal_features_2d)

    predicted_vote_list = predicted_vote.tolist()


    return JSONResponse(content=predicted_vote_list)


