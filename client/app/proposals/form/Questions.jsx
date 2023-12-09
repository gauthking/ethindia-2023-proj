import { Message_data } from '@/app/context/context';
import React, { useContext, useState } from 'react';

const Questions = (props) => {
  const {inputArr, setInputArr} = useContext(Message_data)
  const [inputData, setInputData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name,value)
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function changeHandle() {
    setInputArr((prevArr) => [...prevArr, inputData]);
    console.log('Updated inputArr:', inputArr);
    setInputData({
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
    });
    props.setPage((currPage) => currPage + 1);

  }

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl font-sans mb-4 pb-4 flex gap-3 justify-center'>
          <span className="text-[#12ff80] mr-1 flex">10 Questions</span> to Train and Elevate Your AI Model
        </div>
        <div className='w-[600px]'>
          <div className='bg-[#1c1c1c] flex items-center justify-center p-4 rounded-md'>
            <div className='sign-up-container flex flex-col p-10'>
              {/* ... */}
              {/* Input fields for questions 1 to 10 */}
              {/* ... */}
              {/* Example for question 1: */}
              <div className='pt-2 pb-2 text-gray-400 text-sm'>
                1. What motivates you to participate in a DAO?
              </div>
              <input
                type="text"
                name="question1"
                value={inputData.question1}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                2. How would you describe your preferred level of involvement in DAO decision-making?
              </div>
              <input
                type="text"
                name="question2"
                value={inputData.question2}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                3. Describe your approach to assessing the potential impact of a DAO proposal on the community
              </div>
              <input
                type="text"
                name="question3"
                value={inputData.question3}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                4. In your view, what role should community sentiment play in DAO decision-making?
              </div>
              <input
                type="text"
                name="question4"
                value={inputData.question4}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                5. How do you prioritize between short-term gains and long-term sustainability when evaluating DAO proposals?
              </div>
              <input
                type="text"
                name="question5"
                value={inputData.question5}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                6. Describe the type of proposals you believe should require a higher quorum for approval.
              </div>
              <input
                type="text"
                name="question6"
                value={inputData.question6}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                7. How would you contribute to resolving conflicts within the DAO community?
              </div>
              <input
                type="text"
                name="question7"
                value={inputData.question7}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                8. Explain your criteria for supporting a proposal aimed at modifying the DAO`&#39;`s governance structure.
              </div>
              <input
                type="text"
                name="question8"
                value={inputData.question8}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                9. What role do you see technology playing in enhancing DAO governance?
              </div>
              <input
                type="text"
                name="question9"
                value={inputData.question9}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pt-4 pb-2 text-gray-400 text-sm'>
                10. Describe your strategy for balancing individual interests with the collective goals of the DAO.
              </div>
              <input
                type="text"
                name="question10"
                value={inputData.question10}
                placeholder='Enter Here'
                onChange={handleChange}
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              {/* ... Repeat similar blocks for questions 2 to 10 */}
              {/* ... */}
              {/* Button to submit */}
              <div className='flex justify-center items-center'>
              <button onClick={changeHandle} className='mt-4 p-2 bg-[#12ff80] hover:bg-[#099e4e] hover:text-white text-black rounded-md w-20'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
