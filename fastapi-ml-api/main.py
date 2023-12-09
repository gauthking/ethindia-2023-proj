from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
import pandas as pd
import nltk


app = FastAPI()
analyzer = SentimentIntensityAnalyzer()
nltk.download('vader_lexicon')

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class TextProposal(BaseModel):
    question:str
    res:str

class CorrelationProposal(BaseModel):
    proposal:str
    vote:int

class DataParamsTypes(BaseModel):
    user_id:str
    textproposal:[TextProposal]
    correlation_proposal:[CorrelationProposal]

def get_sentiment_scores(text):
    return analyzer.polarity_scores(text)

def extract_sentiment_features(sentiment_dict):
    return list(sentiment_dict.values())

@app.post("/postSentiment")
async def post_sentiment_data(dataParams:DataParamsTypes):
    print(dataParams)
    questions = [textproposal.question for textproposal in dataParams.textproposal]
    text_responses = [textproposal.res for textproposal in dataParams.textproposal]
    df1 = pd.DataFrame(questions, columns=['Questions'])
    df1['User_Responses'] = text_responses
    df1.columns = ['questions', 'User_1']
    # Apply VADER sentiment analysis to each column (user responses and questions) in the DataFrame
    for column in ['questions','User_1']:
        df1[f'{column}_sentiment'] = df1[column].apply(get_sentiment_scores)

    result_df=df1
    column_types = result_df.dtypes
    vader_df = result_df.filter(like='_sentiment').copy()

    proposals = [belproposals.proposal for belproposals in dataParams.correlation_proposal]
    proposal_votes = [belproposals.vote for belproposals in dataParams.correlation_proposal]

    df2 = pd.DataFrame(proposals, columns=['proposals'])
    df2['vote'] = proposal_votes

    df_final = pd.concat([df2, vader_df.reset_index(drop=True)], axis=1)


    # Return the payload as JSON response
    # return JSONResponse(content=payload)


@app.post("/getPredictedValues")
async def get_predicted_sentiment():
    # get the user_char_array from the db : res, use requests module
    result_list = res.data.user_characteristics_beh_df
    parsed_values = []

    for item in result_list:
        try: 
            parsed_values.append(json.loads(item))
        except json.JSONDecodeError as e:
            # Handle the case where the string cannot be decoded as JSON
            print(f"Error decoding JSON: {e}")


