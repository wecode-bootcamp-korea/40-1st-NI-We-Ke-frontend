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
    <div className="productList">
      <h3 className="subTitle">ProductList ( 000 )</h3>
      <section className="listBox">
        <AsideMenu />
        <div className="listAlign">
          {productList.map(product => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
