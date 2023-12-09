import React from 'react'
import DropDown from '../elements/DropDown'

const ProposalQuestions = () => {

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
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                2. Implement a decentralized grants program to fund community-driven initiatives
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                3. Integrate NFTs to enhance DAO membership and governance token representation
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                4. Collaborate with external projects for cross-platform incentives.
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                5. Implement policies for diverse representation in governance roles
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                6. Introduce governance badges or NFTs as recognition for active participants
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                7. Create educational initiatives to promote inclusivity within the community
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                8. Implement a clear and accessible dispute resolution process
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                9. Facilitate open and constructive dialogue between conflicting parties.
              </div>
              <DropDown />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                10. Upgrade DAO infrastructure for better scalability and adaptability.
              </div>
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProposalQuestions