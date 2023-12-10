import React from 'react'
import Image from 'next/image'
import { list } from 'postcss'
import White from './White'
import White1 from './White1'

const SubSection = () => {
  return (
    <div>
      <Image src="/arrow.svg" alt="404" height={200} width={250}  className='absolute z-[-2] ml-10 mt-4'/>
    <div className='z-[-4] flex flex-col justify-center items-center w-[1280px] h-[832px] relative'>
      <Image src="/arc.svg" alt="404" width={700} height={700} className='m-4'/>
      <div className='flex flex-col gap-3'>
        
      </div>
    </div>
    </div>
  )
}

export default SubSection

