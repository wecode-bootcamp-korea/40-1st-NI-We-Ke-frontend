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
            <h1 className="cartTitle">장바구니</h1>
            <CartList />
          </div>
          <div>
            <OrderHistroy />
          </div>
        </div>
        <div className="wishList">
          <h1>위시리스트</h1>
          <MiniWishList />
          <div className="wishListLink">
            <Link to="/WishList">위시리스트 상품 더 보기</Link>
          </div>
        </div>
        <div className="moreList">
          <h1>추천 상품</h1>
          <MoreProduct />
        </div>
      </div>
    </div>
  );
};

export default Cart;
