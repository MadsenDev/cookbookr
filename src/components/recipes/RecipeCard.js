import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={recipe.imageUrl} alt={recipe.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.name}</div>
        <p className="text-gray-700 text-base">
          {recipe.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {recipe.cuisine}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {recipe.dietary}
        </span>
      </div>
      <div className="px-6 py-4">
        <Link to={`/recipe/${recipe.id}`} className="text-primary hover:underline">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;