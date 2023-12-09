import { Message_data } from '@/app/context/context';
import React, { useContext, useState } from 'react'
import DropDown from '../elements/DropDown'

const ProposalQuestions = () => {
  const {proposalArr, setProposalArr} = useContext(Message_data)
  const {handleUserSubmit}=useContext(Message_data);
const [loading, setLoading] = useState(false);
  const [proposalData, setProposalData] = useState({
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

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   console.log(name,value)
  //   setProposalData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // }

  const changeHandle=async()=> {
    setLoading(true);
    setProposalArr((prevArr) => [...prevArr, proposalData]);
    // console.log('Updated inputArr:', inputArr);
    setProposalData({
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
    setLoading(false);

  }

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl font-sans mb-4 flex gap-3 justify-center'>
          <span className="text-[#12ff80] mr-1 flex">Proposals</span>
        </div>
        <div className='w-[600px]'>
          <div className='bg-[#1c1c1c] flex items-center justify-center p-4 rounded-md'>
            <div className='sign-up-container flex flex-col p-10'>
              <div className='pb-2 text-gray-400 text-sm'>
                1. Enhance community engagement through monthly town hall meetings
              </div>
              <DropDown name="question1" setProposalData={setProposalData}  />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                2. Implement a decentralized grants program to fund community-driven initiatives
              </div>
                            <DropDown name="question2" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                3. Integrate NFTs to enhance DAO membership and governance token representation
              </div>
                            <DropDown name="question3" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                4. Collaborate with external projects for cross-platform incentives.
              </div>
                            <DropDown name="question4" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                5. Implement policies for diverse representation in governance roles
              </div>
                            <DropDown name="question5" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                6. Introduce governance badges or NFTs as recognition for active participants
              </div>
                            <DropDown name="question6" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                7. Create educational initiatives to promote inclusivity within the community
              </div>
                            <DropDown name="question7" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                8. Implement a clear and accessible dispute resolution process
              </div>
                            <DropDown name="question8" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                9. Facilitate open and constructive dialogue between conflicting parties.
              </div>
                            <DropDown name="question9" setProposalData={setProposalData}  />

              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                10. Upgrade DAO infrastructure for better scalability and adaptability.
              </div>
                            <DropDown name="question10" setProposalData={setProposalData}  />
                            <div className='flex justify-center items-center'>
              <button onClick={changeHandle} className='mt-4 p-2 bg-[#12ff80] hover:bg-[#099e4e] hover:text-white text-black rounded-md w-20'>Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProposalQuestions