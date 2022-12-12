import React from 'react';
import '../Product/Product.scss';

const MoreProduct = props => {
  const { name, type, price } = props;

  return (
    <section className="product">
      <div className="imgBox">
        <img className="img" src="" alt="상품" />
      </div>
      <p className="name">{name}</p>
      <p className="option">{type}</p>
      <p className="price">{price}</p>
    </section>
  );
};

export default MoreProduct;
