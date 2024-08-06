import React from 'react';

const RecipeInstructions = ({ instructions }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Instructions</h3>
      <ol className="list-decimal list-inside space-y-2">
        {instructions.map((instruction, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;