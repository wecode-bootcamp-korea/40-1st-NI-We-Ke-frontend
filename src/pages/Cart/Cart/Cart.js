import React from 'react';
import { Link } from 'react-router-dom';
import OrderHistroy from '../OrderHistory/OrderHistory';
import CartList from '../CartList/CartList';
import MiniWishList from '../MiniWishList/MiniWishList';
import MoreProduct from '../MoreProductList/MoreProductList';
import '../Cart/Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartAndWish">
        <div className="main">
          <div className="cartItemContainer">
            <p className="cartTitle mainTitle">장바구니</p>
            <CartList />
          </div>
          <div>
            <OrderHistroy />
          </div>
        </div>
        <div className="wishList">
          <p className="mainTitle">위시리스트</p>
          <MiniWishList />
          <div className="wishListLink">
            <Link to="/WishList">위시리스트 상품 더 보기</Link>
          </div>
        </div>
        <div className="moreList">
          <p className="mainTitle">추천 상품</p>
          <MoreProduct />
        </div>
      </div>
    </div>
  );
};

export default Cart;
