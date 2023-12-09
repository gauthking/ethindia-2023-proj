import React from 'react';
import Image from 'next/image';

const Name = () => {
  return (
    <div className='flex relative'>
      <Image src="/name.svg" width={250} height={250} responsive />
    </div>
  );
};

export default Name;
