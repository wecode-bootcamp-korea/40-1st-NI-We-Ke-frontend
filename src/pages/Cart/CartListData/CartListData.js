import React from 'react';
import './CartListData.scss';

const CartProduct = props => {
  const { name, type, color, size, amount, price } = props;

  return (
    <div>
      <div className="detailInfo">
        <div className="imgBox">
          <img className="img" src="" alt="상품" />
        </div>
        <div className="noImg">
          <div className="priceAndName">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
          </div>
          <p className="type">{type}</p>
          <p className="color">{color}</p>
          <div className="form">
            <p className="size"> 사이즈 {size} </p>
            <p className="amount">수량 {amount}</p>
          </div>
        </div>
      </div>
      <div className="underLine" />
    </div>
  );
};

export default CartProduct;
