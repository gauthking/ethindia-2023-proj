import React from 'react'
import Image from 'next/image'
import { list } from 'postcss'

const SubSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[1280px] h-[832px] relative bg-gradient-to-r from-purple-500 via-purple-500 to-cyan-400'>
      <Image src="/logo.svg" alt="404" width={50} height={50} className='m-4'/>
      <div className='w-[1030px] h-[500px] bg-zinc-900 rounded-3xl'>
        <div className='text-center text-white text-[42px] font-extrabold pt-20'>Simplify transactions with Iris</div>
        <div>
          <ul>
            <li>
              Abstract the unimportant details
            </li>
            <li>
              Detect Phishy Sites
            </li>
            <li>
              Talk to your money
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubSection

