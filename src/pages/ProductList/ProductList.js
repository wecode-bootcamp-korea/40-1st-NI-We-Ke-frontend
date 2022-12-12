import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import '../ProductList/ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('바닥');
    }
  };

  // useEffect(() => {}, [onScroll]);

  useEffect(() => {
    fetch(`./data/productList.json`)
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <section className="productList">
      {onScroll()}
      {productList.map(product => {
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
};

export default ProductList;
