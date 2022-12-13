import React from 'react';
import '../WishListData/WishListData.scss';

const WishListData = props => {
  const { name, price, type, size } = props;

  return (
    <div>
      <div className="miniWishDetailInfo">
        <div className="miniWishImgBox">
          <img className="miniWishImg" src="" alt="상품" />
        </div>
        <div className="miniWishNoImg">
          <div className="miniWishRowInfo">
            <p className="miniWishName">{name}</p>
            <p className="miniWishPrice">{price}</p>
          </div>
          <p className="miniWishType">{type}</p>
          <p className="miniWishSize"> 사이즈 {size} </p>
          <button className="miniWishBtn">장바구니에 추가</button>
        </div>
      </div>
      <div className="miniWishUnderLine" />
    </div>
  );
};

export default WishListData;
