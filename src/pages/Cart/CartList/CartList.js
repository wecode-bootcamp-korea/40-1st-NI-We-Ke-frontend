import React, { useEffect, useState } from 'react';
import Cart from '../CartListData/CartListData';

const CartList = props => {
  const { cartList } = props;

  return (
    <section className="cartList">
      {cartList.map(data => {
        return <Cart key={data.id} {...data} />;
      })}
    </section>
  );
};

export default CartList;
