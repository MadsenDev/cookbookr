import React, { useState } from 'react';
import { RecipeIngredients, RecipeInstructions, RecipeRating, RecipeComments, Header } from '../../components';

const sampleRecipe = {
  id: 1,
  name: 'Spaghetti Carbonara',
  imageUrl: 'https://via.placeholder.com/400',
  description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
  ingredients: [
    {
      name: 'Spaghetti',
      quantity: '200g',
      category_name: 'Pasta',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Pancetta',
      quantity: '100g',
      category_name: 'Meat',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Eggs',
      quantity: '2 large',
      category_name: 'Dairy',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Pecorino cheese',
      quantity: '50g',
      category_name: 'Cheese',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Parmesan',
      quantity: '50g',
      category_name: 'Cheese',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Black pepper',
      quantity: 'To taste',
      category_name: 'Spice',
      category_icon_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Salt',
      quantity: 'To taste',
      category_name: 'Spice',
      category_icon_url: 'https://via.placeholder.com/50',
    },
  ],
  instructions: [
    'Put a large saucepan of water on to boil.',
    'Finely chop the pancetta.',
    'Beat the eggs in a medium bowl.',
    'Add the pancetta to a large frying pan and cook until crispy.',
    'Add the pasta to the boiling water and cook according to the package instructions.',
    'Reserve some of the cooking water, then drain the pasta.',
    'Mix the pasta with the pancetta and remove from heat.',
    'Add the eggs and cheese mixture and toss quickly.',
    'Serve immediately with extra grated cheese and black pepper.',
  ],
  rating: 4,
  comments: [
    {
      id: 1,
      userId: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'Female',
      profilePicture: '',
      text: 'This looks delicious!',
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      userId: 2,
      firstName: 'John',
      lastName: 'Smith',
      gender: 'Male',
      profilePicture: '',
      text: 'Can’t wait to try this.',
      created_at: new Date().toISOString(),
    },
  ],
  onAddComment: (comment) => console.log('Add comment:', comment),
};

const RecipeDetail = () => {
  const [comments, setComments] = useState(sampleRecipe.comments);

  const handleAddComment = (commentText) => {
    const newComment = {
      id: comments.length + 1,
      userId: 3, // example user ID
      firstName: 'New',
      lastName: 'User',
      profilePicture: 'https://via.placeholder.com/50',
      text: commentText,
      created_at: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="container mx-auto p-6">
      <img className="w-full h-64 object-cover rounded-lg mb-6" src={sampleRecipe.imageUrl} alt={sampleRecipe.name} />
      <Header title={sampleRecipe.name} />
      <p className="text-center text-gray-700 mb-8">{sampleRecipe.description}</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <RecipeIngredients ingredients={sampleRecipe.ingredients} />
        </div>
        <div className="flex-1">
          <RecipeInstructions instructions={sampleRecipe.instructions} />
        </div>
      </div>
      <RecipeRating rating={sampleRecipe.rating} />
      <RecipeComments comments={comments} onAddComment={handleAddComment} />
    </div>
  );  
};

export default RecipeDetail;