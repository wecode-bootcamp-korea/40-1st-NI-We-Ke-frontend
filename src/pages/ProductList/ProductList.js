import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
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
      <AsideMenu />
      <div className="listAlign">
        {productList.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
