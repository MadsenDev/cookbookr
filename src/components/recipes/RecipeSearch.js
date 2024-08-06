import React, { useState } from 'react';

const RecipeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default RecipeSearch;