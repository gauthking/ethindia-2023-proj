import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Button = (props) => {
  return (
    <div className='flex items-center justify-center'>
      <button
        onClick={props.onClick}
        className='w-[120px] h-[40px] flex items-center justify-center px-2 rounded-md bg-[#12ff80] hover:bg-[#0cb259] text-black font-semibold font-poppins focus:outline-none'
      >
        <div className='flex items-center justify-center px-2'>
          <FaPlus className='mr-2' />
          <a href='/create' className='text-sm text-center'>
            {props.text}
          </a>
        </div>
      </button>
    </div>
  );
};

export default Button;
