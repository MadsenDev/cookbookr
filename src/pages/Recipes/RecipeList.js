import React, { useState } from 'react';
import { RecipeCard, Header, RecipeSearch } from '../../components';

const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      cuisine: 'Italian',
      dietary: 'Non-Vegetarian'
    },
    {
      id: 2,
      name: 'Vegetable Stir Fry',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A quick and easy stir fry made with fresh vegetables and a savory sauce.',
      cuisine: 'Chinese',
      dietary: 'Vegetarian'
    },
    {
      id: 3,
      name: 'Chicken Fajitas',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A Tex-Mex favorite made with marinated chicken, bell peppers, and onions.',
      cuisine: 'Mexican',
      dietary: 'Non-Vegetarian'
    },
    {
      id: 4,
      name: 'Greek Salad',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A light and refreshing salad made with tomatoes, cucumbers, olives, and feta cheese.',
      cuisine: 'Greek',
      dietary: 'Vegetarian'
    },
    {
      id: 5,
      name: 'Chocolate Chip Cookies',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A classic cookie made with butter, sugar, chocolate chips, and flour.',
      cuisine: 'American',
      dietary: 'Vegetarian'
    }
    // Add more sample recipes as needed
  ];

const RecipeList = () => {
  return (
    <>
    <Header title="Recipes" />
    <RecipeSearch />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </>
  );
}

export default RecipeList;