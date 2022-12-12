import React from 'react';
import '../CartListData/CartListData.scss';

const WishListData = props => {
  const { name, price, type, size } = props;

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
          <p className="size"> 사이즈 {size} </p>
          <button className="cartBtn">장바구니에 추가</button>
        </div>
      </div>
      <div className="underLine" />
    </div>
  );
};

export default WishListData;
