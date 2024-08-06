import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipeList from './pages/Recipes/RecipeList';
import CreateRecipe from './pages/Recipes/CreateRecipe';
import RecipeDetail from './pages/Recipes/RecipeDetail';
import Profile from './pages/User/Profile';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import { Topbar, Container } from './components';

function App() {
  return (
    <Router>
      <Topbar>
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/create" element={<CreateRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
        </Container>
      </Topbar>
    </Router>
  );
}

export default App;