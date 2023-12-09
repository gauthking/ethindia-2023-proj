import React, { useState, useEffect } from 'react';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    console.log('Initial Selected Option:', selectedOption);
  }, []); // Log initial value only once

  useEffect(() => {
    if (selectedOption !== null) {
      console.log('Selected Option:', selectedOption);
      // You can perform additional actions based on the selected option here
    }
  }, [selectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    const selectedValue = option === 'Yes' ? 1 : 0;
    console.log(props.name,selectedValue)
    props.setProposalData((prevData) => ({
      ...prevData,
      [props.name]: selectedValue,
    }));
    setSelectedOption(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        onClick={toggleDropdown}
        className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {selectedOption !== null ? (selectedOption === 1 ? 'Yes' : 'No') : 'Choose'}
        <svg
          className={`hs-dropdown-open:rotate-180 w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 min-w-[15rem] bg-gray-800 shadow-md rounded-lg p-2">
          {/* Dropdown content */}
          <div
            className="py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            onClick={() => handleOptionSelect('Yes')}
          >
            Yes
          </div>
          <div
            className="py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            onClick={() => handleOptionSelect('No')}
          >
            No
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
