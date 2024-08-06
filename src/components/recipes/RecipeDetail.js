import React from 'react';
import RecipeInstructions from './RecipeInstructions';
import RecipeComments from './RecipeComments';
import RecipeRating from './RecipeRating';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <img className="w-full h-64 object-cover rounded-t-lg" src={recipe.imageUrl} alt={recipe.name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2">{recipe.name}</h2>
        <p className="text-gray-700 mb-4">{recipe.description}</p>
        <div className="mb-4">
          <h3 className="font-semibold text-xl">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        <RecipeInstructions instructions={recipe.instructions} />
        <RecipeRating rating={recipe.rating} />
        <RecipeComments comments={recipe.comments} onAddComment={recipe.onAddComment} />
      </div>
    </div>
  );
};

export default RecipeDetail;