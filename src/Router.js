import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../src/pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
