import React from 'react';
import Redirect from '../buttons/Redirect';

const Card = (props) => {

  return (
    <div className="block w-[18rem] rounded-lg text-left border-2 border-[#41c16f] bg-[#1c1c1c]">
      <div className="p-2">
        <h5 className="mb-1 text-2xl leading-tight dark:text-white">
            {props.text}
        </h5>
        <p className="mb-4 text-sm leading-normal text-gray-600 dark:text-gray-400">
            {props.description}
        </p>
        <div className='flex justify-end p-4'>
            <Redirect />
        </div>
      </div>
    </div>
  );
};

export default Card;
