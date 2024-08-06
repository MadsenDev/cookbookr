import React, { useState } from 'react';
import { Header } from '../../components';

const Home = () => {

  return (
    <div>
      <Header title="Welcome to Cookbookr" />
      <p className="text-center mt-4 text-muted">The best place to find and share recipes</p>
    </div>
  );
};

export default Home;