import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const Redirect = () => {
  return (
    <Link href="/proposals">
      <button className="px-2 py-2 text-base rounded-lg text-emerald-500 border border-emerald-500 transition-transform transform hover:scale-105 bg-[#1c1c1c]">
        <div className='flex items-center gap-2 text-sm'>Explore <MdArrowOutward/></div>
      </button>
    </Link>
  );
}

export default Redirect;
