import { Message_data } from '@/app/context/context';
import React, { useContext, useState } from 'react';

const SignUpInfo = () => {
  const { password, setPassword } = useContext(Message_data);

  return (
    <div className='flex items-center justify-center mt-20'>
      {/* Centered container */}
      <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl font-sans mb-4 flex gap-3 justify-center'>
          Enter <span className="text-[#12ff80]">Password</span>
        </div>
        <div className='w-[334px]'>
          <div className='bg-[#1c1c1c] flex items-center justify-center p-4 rounded-md'>
            <div className='sign-up-container flex flex-col p-10'>
              <input
              value={password}
                type="password"
                placeholder='Enter Password'
                className='p-2 border w-[187px] h-8 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpInfo;
