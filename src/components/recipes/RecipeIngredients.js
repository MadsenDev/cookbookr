import React from 'react';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center space-x-4">
            {ingredient.category_icon_url && (
              <img
                src={ingredient.category_icon_url}
                alt={ingredient.category_name}
                className="w-6 h-6"
              />
            )}
            <div className="flex-1">
              <p className="text-gray-900 font-medium">
                {ingredient.name} ({ingredient.quantity})
              </p>
              <p className="text-gray-600 text-sm">
                {ingredient.category_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;