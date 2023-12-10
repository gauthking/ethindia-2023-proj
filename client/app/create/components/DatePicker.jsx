import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState('01');
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2023'); // You can set the default year as per your requirement

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const years = Array.from({ length: 10 }, (_, i) => (2022 + i).toString()); // You can customize the range of years

  return (
    <div className="flex items-center space-x-2">
      {/* Day Dropdown */}
      <select
        className="bg-gray-800 text-white px-2 py-1 rounded"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <span className="text-white mx-1">/</span>

      {/* Month Dropdown */}
      <select
        className="bg-gray-800 text-white px-2 py-1 rounded"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <span className="text-white mx-1">/</span>

      {/* Year Dropdown */}
      <select
        className="bg-gray-800 text-white px-2 py-1 rounded"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;
