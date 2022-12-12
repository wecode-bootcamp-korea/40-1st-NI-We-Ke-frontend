import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart/Cart';
import WishList from './pages/WishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
