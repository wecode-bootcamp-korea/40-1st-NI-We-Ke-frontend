import React from 'react';
import './MoreProduct.scss';

const MoreProduct = props => {
  const { name, type, price } = props;

  return (
    <section className="moreProduct">
      <div className="moreImgBox">
        <img className="moreProductImg" src="" alt="상품" />
      </div>
      <div className="moreInfo">
        <p className="moreName">{name}</p>
        <p className="moreOption">{type}</p>
        <p className="morePrice">{price}</p>
      </div>
    </section>
  );
};

export default MoreProduct;
