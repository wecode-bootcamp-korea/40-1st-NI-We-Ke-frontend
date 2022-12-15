import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderHistroy from '../OrderHistory/OrderHistory';
import CartList from '../CartList/CartList';
import MiniWishList from '../MiniWishList/MiniWishList';
import MoreProduct from '../MoreProductList/MoreProductList';
import '../Cart/Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('./data/Cartdata.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);
  return (
    <div className="cart">
      <div className="mainContainer">
        <div className="main">
          <div className="cartItemContainer">
            <p className="cartTitle">장바구니</p>
            <CartList cartList={cartList} />
          </div>
          <div className="sideSection">
            <OrderHistroy cartList={cartList} />
          </div>
        </div>
        <p className="cartTitle">위시리스트</p>
        <div className="cartWishList">
          <MiniWishList />
        </div>
        <div className="moreList">
          <p className="cartTitle">추천 상품</p>
          <MoreProduct />
        </div>
      </div>
    </div>
  );
};

export default Cart;
