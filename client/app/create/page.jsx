"use client"
import { Message_data } from '@/app/context/context';
import React, { useContext, useState } from 'react';
import TimePicker from './components/TimePicker';
import DatePicker from './components/DatePicker';
import { BlockchainConfig } from '../context/blockchainContext';

const Page = () => {
  const { title, setTitle } = useContext(Message_data);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const {AddProposal}=useContext(BlockchainConfig);

  const handleSubmit = async() => {
    console.log('Title:', title);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    await AddProposal(title,1702197000,1702197000);
  };

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl font-sans mb-4 flex gap-3 justify-center'>
          Create a <span className='text-[#12ff80]'>Proposal</span>
        </div>
        <div className='w-[334px]'>
          <div className='bg-[#1c1c1c] flex flex-col items-center justify-center p-4 rounded-md'>
            <div className='sign-up-container flex flex-col p-10'>
              {/* Title Input */}
              <label className='text-white mb-2'>Title:</label>
              <input
                type='text'
                placeholder='Enter the title...'
                className='p-2 border w-full h-10 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Date Picker */}
              <div className='mt-4'>
                <label className='text-white mb-2'>Select Date:</label>
                <DatePicker onChange={handleDateChange} />
              </div>

              {/* Time Picker */}
              <div className='mt-4'>
                <label className='text-white mb-2'>Select Registration Time:</label>
                <TimePicker onChange={handleTimeChange} />
              </div>

              {/* Form Submission Button */}
              <button
                className='bg-[#12ff80] mt-6 p-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue text-white'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
