import React from 'react'
import Image from 'next/image'

const White1 = () => {
  return (
    <div className="Rectangle4 w-[1030px] h-[261px] z-[-2] bg-zinc-100 rounded-xl" >
        <div className='flex flex-col justify-center items-center text-black p-10'>
            <div className='font-bold text-2xl'>How to use?</div>
            <div className='p-4'>
                <Image src="/grid1.svg" alt="404"  width={850} height={200} className=''/>
            </div>
        </div>
    </div>
  )
}

export default White1