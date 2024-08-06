import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../../assets/images/logo_full.png';
import { RecipeSearch } from '../';

const Topbar = ({ children }) => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-primary to-secondary shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <img src={logoFull} alt="Cookbookr" className="h-12" />
          <div className="flex items-center">
            <Link to="/" className="bg-white text-primary px-4 py-2 rounded mx-2 hover:bg-primary hover:text-white transition duration-300">Home</Link>
            <Link to="/recipes" className="bg-white text-primary px-4 py-2 rounded mx-2 hover:bg-primary hover:text-white transition duration-300">Recipes</Link>
            <Link to="/user/profile" className="bg-white text-primary px-4 py-2 rounded mx-2 hover:bg-primary hover:text-white transition duration-300">Profile</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default Topbar;