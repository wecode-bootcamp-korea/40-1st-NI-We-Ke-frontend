import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import AsideMenu from './components/AsideMenu/AsideMenu';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/asidemenu" element={<AsideMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
