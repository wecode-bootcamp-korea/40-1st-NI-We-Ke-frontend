import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
