import React from 'react';
import '../Product/Product.scss';

const Product = props => {
  const { name, url, color, price } = props;

  return (
    <section className="product">
      <div className="imgBox">
        <img className="img" src={url} alt="상품" />
      </div>
      <p className="name">{name}</p>
      <p className="option">{color}</p>
      <p className="price">{price}</p>
    </section>
  );
};

export default Product;
