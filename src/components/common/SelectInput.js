import React from 'react';
import '../../assets/styles/SelectInput.css';

const SelectInput = ({ label, value, onChange, options, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="custom-select mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;