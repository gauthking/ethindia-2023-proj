"use client"
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import SubSection from './SubSection';
import Name from './Name';

const Landing = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row m-2 p-4'>
      <div className='flex-1 bg-gray-300 ml-4 mb-8 mr-4 h-[590px] px-1/2 pt-32 pb-[468px] pl-10 bg-gradient-to-r from-[#5adef8] to-emerald-400 rounded-[10px] flex-col justify-center items-center inline-flex'>
        <div className='text-white font-semibold text-left w-full'>
          {/* Content for the first div */}
          <h1 className='text-4xl text-[#121312] pt-64'>Empowering Decentralized Future with Privacy and Participation.</h1>
          <div className='text-[#121312] font-normal pt-6'></div>
        </div>
      </div>
      <div className='flex-1 bg-[#1c1c1c] ml-4 mb-8 mr-4 h-[590px] px-1/2 pt-32 pb-[468px] pl-10 rounded-[10px] flex-col justify-center items-center inline-flex'>
        <div className='text-white font-semibold text-left w-full'>
          {/* Content for the second div */}
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center p-4 m-4'>
      <Name />
    </div>
    <div className='flex justify-center items-center'>
      <SubSection />
    </div>
    </div>
  );
}

export default Landing;
