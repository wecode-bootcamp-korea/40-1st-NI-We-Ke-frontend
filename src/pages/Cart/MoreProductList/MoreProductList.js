import React, { useEffect, useState } from 'react';
import Product from '../../../components/MoreProduct/MoreProduct';
import '../MoreProductList/MoreProductList.scss';

const MoreProduct = () => {
  const [moreProductList, setmoreProductList] = useState([]);

  useEffect(() => {
    fetch('/data/WishList.json')
      .then(res => res.json())
      .then(data => {
        setmoreProductList(data);
      });
  }, []);

  return (
    <div className="moreProductList">
      {moreProductList.map(product => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default MoreProduct;
