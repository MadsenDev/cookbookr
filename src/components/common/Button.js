import React from 'react';

const Button = ({ children, onClick, type = 'button', size = 'md', color = 'primary', className = '' }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const colorClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-gray-900 hover:bg-secondary-light',
    accent: 'bg-accent text-white hover:bg-accent-light',
    light: 'bg-light text-gray-900 hover:bg-gray-200',
    muted: 'bg-muted text-white hover:bg-muted-light',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${sizeClasses[size]} ${colorClasses[color]} font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;