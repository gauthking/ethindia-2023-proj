"use client"
import React, { useContext, useState } from 'react';
import SignUpInfo from './SignUpInfo';
import Questions from './Questions';
import ProposalQuestions from './ProposalQuestions';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Message_data } from '@/app/context/context';

const Form = () => {
  const [page, setPage] = useState(0);
const {handleUserSubmit,formSubmitting}=useContext(Message_data);
  const FormTitles = ["", "", "", ""];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <Questions  setPage={setPage} />;
    } else {
      return <ProposalQuestions />;
    }
  };

  return (
    <div className='form'>
      <div className='progressBar'></div>
      <div className='form-container pt-2'>
        <div className="header text-black text-[30px] font-bold">
          <h1 className='text-white'>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          <PageDisplay />
        </div>
        <div className="footer flex gap-8 pt-4 pb-14 justify-center">
          <button
            disabled={page === 0}
            className='w-[89px] h-8 px-4 rounded border-2 border-[#12ff80] justify-center items-center inline-flex'
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <span className="text-[#12ff80] text-base font-normal font-['Inter'] flex justify-center items-center gap-2">
              <FaArrowLeft />Back
            </span>
          </button>
    {page === FormTitles.length - 2 ?  <button  className='w-[89px] h-8 px-4 rounded border-2 border-[#12ff80] bg-[#12ff80] justify-center items-center gap-2.5 inline-flex'
            disabled={formSubmitting}
            
            onClick={() => {
              // setPage((currPage) => currPage + 1);
              handleUserSubmit();
            }}>{formSubmitting?"Submitting ...":"SUBMIT"}</button> :     <button
          
            disabled={page === FormTitles.length - 1}
            className='w-[89px] h-8 px-4 rounded border-2 border-[#12ff80] bg-[#12ff80] justify-center items-center gap-2.5 inline-flex'
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            <span className="text-white text-base font-normal font-['Inter'] flex justify-center items-center gap-2">
              Next <FaArrowRight />
            </span>
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Form;
