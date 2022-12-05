import React from 'react';
import '../Product/Product.scss';

const Product = () => {
  return (
    <section className="product">
      <div className="imgBox">
        <img className="img" src="" alt="productImg" />
      </div>
      <p className="name">Product Name</p>
      <p className="optionGender">Men</p>
      <p className="optionColor">Color Option</p>
      <p className="price">Price</p>
    </section>
  );
};

export default Product;
