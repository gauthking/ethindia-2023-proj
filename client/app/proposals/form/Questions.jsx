import React from 'react'

const Questions = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl font-sans mb-4 flex gap-3 justify-center'>
          <span className="text-[#12ff80] mr-1 flex">10 Questions</span> to Train and Elevate Your AI Model
        </div>
        <div className='w-[600px]'>
          <div className='bg-[#1c1c1c] flex items-center justify-center p-4 rounded-md'>
            <div className='sign-up-container flex flex-col p-10'>
              <div className='pb-2 text-gray-400 text-sm'>
                1. What motivates you to participate in a DAO?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                2. How would you describe your preferred level of involvement in DAO decision-making?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                3. Describe your approach to assessing the potential impact of a DAO proposal on the community
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                4. In your view, what role should community sentiment play in DAO decision-making?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                5. How do you prioritize between short-term gains and long-term sustainability when evaluating DAO proposals?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                6. Describe the type of proposals you believe should require a higher quorum for approval.
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                7. How would you contribute to resolving conflicts within the DAO community?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                8. Explain your criteria for supporting a proposal aimed at modifying the DAO's governance structure.
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                9. What role do you see technology playing in enhancing DAO governance?
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
              <div className='pb-2 pt-4 text-gray-400 text-sm'>
                10. Describe your strategy for balancing individual interests with the collective goals of the DAO.
              </div>
              <input
                type="text"
                placeholder='Enter Here'
                className='p-2 border w-80 h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions