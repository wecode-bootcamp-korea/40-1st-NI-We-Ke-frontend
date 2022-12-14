import React from 'react';
import './CartListData.scss';

const CartProduct = props => {
  const { name, type, color, size, amount, price } = props;

  return (
    <div>
      <div className="cartDetailInfo">
        <div className="cartImgBox">
          <img className="cartProductImg" src="" alt="상품" />
        </div>
        <div className="noImg">
          <div className="cartRowInfo">
            <p className="cartName">{name}</p>
            <p className="cartPrice">
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <p className="cartType">{type}</p>
          <p className="cartColor">{color}</p>
          <div className="cartForm">
            <p className="cartSize"> 사이즈 {size} </p>
            <p className="cartAmount">수량 {amount}</p>
          </div>
          <input className="likeBtn" type="button" />
          <input className="deleteBtn" type="button" />
        </div>
      </div>
      <div className="underLine" />
    </div>
  );
};

export default CartProduct;
