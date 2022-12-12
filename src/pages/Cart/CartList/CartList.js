import React, { useEffect, useState } from 'react';
import Cart from '../CartListData/CartListData';
import './CartList.scss';

const CartList = () => {
  const [CartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('./data/Cartdata.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <section className="cartList">
      {CartList.map(data => {
        return <Cart key={data.id} {...data} />;
      })}
    </section>
  );
};

export default CartList;
