import React from 'react'
import {CiWallet} from 'react-icons/ci'

const Button = () => {
  return (
    <div>
        <button className='relative w-[100px] h-[34px] rounded-md justify-center items-center gap-2.5 inline-flex bg-[#12ff80] hover:bg-[#0cb259] text-black font-semibold overflow-hidden font-poppins'>
            <CiWallet />
            <span className='text-sm'>Connect</span>
        </button>
    </div>
  )
}

export default Button