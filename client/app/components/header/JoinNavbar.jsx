import React, { useContext, useState } from 'react';
import JoinButton from '../buttons/JoinButton';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BlockchainConfig } from '@/app/context/blockchainContext';

const JoinNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
const {currentAccount,connectWallet}=useContext(BlockchainConfig)
  return (
    <div className='h-[52px] m-8 p-4 mt-2 mb-0 flex justify-between items-center'>
      <div className='flex items-center'>
        <Image src="../logo.svg" width={36} height={36} alt="Logo" className='p-1'/>
        <span className='ml-2 text-lg text-white'>zXDAO</span>
      </div>

      {/* Mobile Menu Button */}
      <div className='lg:hidden'>
        <button
          onClick={toggleMobileMenu}
          className='text-white transition-transform transform hover:scale-110 duration-300'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </button>
      </div>

      {/* Regular JoinNavbar for Desktop */}
      <div className='hidden lg:flex gap-20'>
        <div className='items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-70 flex'>
          <a href="/forum">Forum</a> <IoIosArrowDown />
        </div>
        <div className='flex items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-70'>
          <a href="/form">Learn</a> <IoIosArrowDown />
        </div>
        {currentAccount ?  <JoinButton text='Join' />:  <JoinButton onClick={connectWallet} text='Create' />}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className='lg:hidden absolute top-16 right-4 bg-[#1c1c1c] p-4 shadow-md rounded-md transition-opacity duration-300'
        >
          <div>
            <a href="/forum" className='mb-2 flex gap-2 items-center transition-opacity duration-300 ease-in-out hover:opacity-70'>Forum <MdOutlineArrowOutward /></a>
            <a href="/form" className='mb-2 flex gap-2 items-center transition-opacity duration-300 ease-in-out hover:opacity-70'>Learn <MdOutlineArrowOutward /></a>
          </div>
          <JoinButton text='Create' />
        </div>
      )}
    </div>
  );
}

export default JoinNavbar;
