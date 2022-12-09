import React from 'react';
import FreeShipping from './FreeShipping';
import OrderHistroy from './OrderHistory';
import CartList from './CartList';
import WishList from './WishList';
import '../Cart/Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartAndWish">
        <div className="main">
          <div className="cartItemContainer">
            <FreeShipping />
            <h1 className="cartTitle">장바구니</h1>
            <CartList />
          </div>
          <div>
            <OrderHistroy />
          </div>
        </div>
        <div className="wishList">
          <h1>위시리스트</h1>
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default Cart;
