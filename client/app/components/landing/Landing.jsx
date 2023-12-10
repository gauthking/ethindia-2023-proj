"use client"
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import SubSection from './SubSection';
import Name from './Name';
import Button from '../buttons/Button';

const Landing = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row m-2 p-4'>
      <div className='flex-1 bg-gray-300 ml-4 mb-8 mr-4 h-[590px] px-1/2 pt-32 pb-[468px] pl-10 bg-gradient-to-r from-[#5adef8] to-emerald-400 rounded-[10px] flex-col justify-center items-center inline-flex'>
        <div className='text-white font-semibold text-left w-full'>
          {/* Content for the first div */}
          <h1 className='text-4xl text-[#121312] pt-64'>Empowering Decentralized Future with Privacy and Participation.</h1>
          <div className='text-[#121312] font-normal pt-6'>Revolutionize DAO voting with AI precision and ZK proofs for a fraud-proof, transparent future.</div>
          <div className='flex flex-col gap-4 pt-14'>
            <div className='flex text-black items-center gap-2'>
              <FaCheckCircle/>
              <span className='text-[#121312] font-semibold'>Solves Anonymity Gap</span>
            </div>
            <div className='flex text-black items-center gap-2'>
              <FaCheckCircle/>
              <span className='text-[#121312] font-semibold'>AI-Driven Participation</span>
            </div>
            <div className='flex text-black items-center gap-2'>
              <FaCheckCircle/>
              <span className='text-[#121312] font-semibold'>zK Anonymity with Semaphore Protocol</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-[#1c1c1c] ml-4 mr-4 h-[590px] px-1/2 pt-32 pb-20 pl-10 rounded-[10px] flex-col justify-center items-center inline-flex'>
        <div className='text-white font-semibold text-left w-full'>
          {/* Content for the second div */}
          <div className='flex flex-col items-center gap-3 text-center'>
          <div className='flex items-center gap-3'>
            <Image src='../logo.svg' width={20} height={20} /> 
            <span className='font-semibold text-xl'>ArcticSync</span>
          </div>
          <div className='pt-20 text-2xl font-semibold'>
            Create Account
          </div>
          <div className='text-sm'>
            Choose how you would like to <br/>create your account
          </div>
          <div className='pt-6'>
            <Button text="Connect" />
          </div>
          <div className="flex items-center my-2">
            <div className="flex-1 h-1 bg-gray-300"></div>
            <div className="mx-4 text-gray-500 font-bold">OR</div>
            <div className="flex-1 h-1 bg-gray-300"></div>
          </div>
          <div className='pt-8 flex flex-col gap-2'>
            <div className='text-md'>
              Already have an account?
            </div>
            <div className='text-sm underline text-[#12ff80]'>
              Add existing one
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <SubSection />
    </div>
    <div className='flex justify-center items-center p-4 m-4'>
      <Name />
    </div>
    </div>
  );
}

export default Landing;
