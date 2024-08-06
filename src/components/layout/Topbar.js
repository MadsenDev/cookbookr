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
            <Link to="/" className="text-white px-4 py-2 hover:bg-primary rounded">Home</Link>
            <Link to="/recipes" className="text-white px-4 py-2 hover:bg-primary rounded">Recipes</Link>
            <Link to="/user/profile" className="text-white px-4 py-2 hover:bg-primary rounded">Profile</Link>
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