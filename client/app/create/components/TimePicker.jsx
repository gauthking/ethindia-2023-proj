"use client"
import React, { useState } from 'react';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState('12');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <div className="flex items-center space-x-2">
      {/* Hour Dropdown */}
      <select
        className="bg-gray-800 text-white px-2 py-1 rounded"
        value={selectedHour}
        onChange={(e) => setSelectedHour(e.target.value)}
      >
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>

      <span className="text-white">:</span>

      {/* Minute Dropdown */}
      <select
        className="bg-gray-800 text-white px-2 py-1 rounded"
        value={selectedMinute}
        onChange={(e) => setSelectedMinute(e.target.value)}
      >
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
