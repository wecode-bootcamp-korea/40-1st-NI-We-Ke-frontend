import React from 'react';
import '../Product/Product.scss';

const Product = props => {
  const product = props.product;

  return (
    <section className="product">
      <div className="imgBox">
        <img className="img" src="" alt="productImg" />
      </div>
      <p className="name">{product.name}</p>
      <p className="optionColor">{product.color}</p>
      <p className="price">{product.price}</p>
    </section>
  );
};

export default Product;
