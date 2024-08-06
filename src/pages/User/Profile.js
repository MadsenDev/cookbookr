// src/pages/User/Profile.js

import React, { useState, useEffect } from 'react';
import { Button, Header } from '../../components';
import { getProfilePictureUrl } from '../../utils/helpers';

const Profile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    address: '',
    profilePictureUrl: '',
  });
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUserDataFromAPI();
      setUser(userData);
    };

    const fetchFavoriteRecipes = async () => {
      const recipes = await fetchFavoriteRecipesFromAPI();
      setFavoriteRecipes(recipes);
    };

    fetchUserData();
    fetchFavoriteRecipes();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Header title="My Profile" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src={getProfilePictureUrl(user.profilePictureUrl, user.gender)}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
            <p className="text-gray-600">{user.username}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600 mb-2"><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
            <p className="text-gray-600 mb-2"><strong>Gender:</strong> {user.gender}</p>
            <p className="text-gray-600 mb-2"><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p className="text-gray-600 mb-2"><strong>Address:</strong> {user.address}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-2xl font-semibold mb-4">Favorite Recipes</h3>
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id} className="mb-4">
              <div className="flex items-center">
                <img src={recipe.imageUrl} alt={recipe.name} className="w-12 h-12 rounded-lg mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">{recipe.name}</h4>
                  <p className="text-gray-600">{recipe.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Mock function to simulate fetching user data from API
const fetchUserDataFromAPI = async () => {
  return {
    username: 'johndoe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    phoneNumber: '1234567890',
    address: '123 Main St, Anytown, USA',
    profilePictureUrl: '',
  };
};

// Mock function to simulate fetching favorite recipes from API
const fetchFavoriteRecipesFromAPI = async () => {
  return [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Vegetable Stir Fry',
      description: 'A quick and easy stir fry with fresh vegetables and soy sauce.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
};

export default Profile;