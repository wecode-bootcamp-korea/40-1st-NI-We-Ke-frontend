import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import '../ProductList/ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('./data/productList.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <section className="productList">
      {productList.map(product => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ProductList;
