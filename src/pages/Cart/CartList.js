import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart/CartList.scss';

const CartList = () => {
  return (
    <div className="CartList">
      <div className="productData">
        <div className="cartImg">
          <div className="img"> </div>
          <div className="productWish">
            <div className="productInfo">
              <div className="product"> </div>
              <div className="price"> </div>
            </div>
            <div className="icons"></div>
          </div>
        </div>
      </div>
      <div className="shippingDate">
        {/* <p>무료 배송</p>
        <p>도착 예정일 ?</p> */}
      </div>
      <div className="underLine"></div>
    </div>
  );
};
export default CartList;
