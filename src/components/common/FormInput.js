import React from 'react';
import '../../assets/styles/FormInput.css';

const FormInput = ({ label, type = 'text', value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-input mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
      />
    </div>
  );
};

export default FormInput;