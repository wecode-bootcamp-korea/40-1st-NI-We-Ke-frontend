import React from 'react';
import './WishList.scss';

const WishList = () => {
  return (
    <div className="WishList">
      <div className="cartImg">
        <div className="img"> </div>
        <div className="productWish">
          <div className="productInfo">
            <div className="product"> </div>
            <div className="price"> </div>
          </div>
          <div className="wishButton">
            <button className="order">주문 결제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
