import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      {children}
    </div>
  );
};

export default Container;