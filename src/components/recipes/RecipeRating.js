import React from 'react';

const RecipeRating = ({ rating, onRate }) => {
  return (
    <div className="flex items-center mt-4">
      <span className="mr-2 text-gray-700">Rating:</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRate(star)}
          className={`text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default RecipeRating;