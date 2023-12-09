"use client"
import React from 'react';
import Navbar from '../components/header/Navbar';
import Card from './card/Card';

const Page = () => {
  return (
    <div className="bg-cover bg-center">
      <Navbar />
      <div className='text-[65px] font-bold text-center mt-20 mb-6 leading-none'>
        Step into 
        <span className='relative inline-block pl-2 pr-2'>
          <span className='text-green-400 drop-shadow-xl shadow-emerald-400 pl-2 pr-2'>zXDAO's</span>
        </span>
        Forum.
      </div>
      <div className='flex justify-center items-center text-[#a1a1aa]'>
        The place where the latest news and proposals are discussed!
      </div>
      <div className='flex gap-5 justify-center pt-10'>
        <Card text={"General"} description={"Discover and discuss a variety of topics"}/>
        <Card text={"Proposals"} description={"Explore and contribute to innovative project ideas and suggestions"}/>
      </div>
    </div>
  );
};

export default Page;
