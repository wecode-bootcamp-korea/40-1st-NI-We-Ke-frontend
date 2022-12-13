import React, { useEffect, useState } from 'react';
import './MiniWishList.scss';
import Wish from '../WishListData/WishListData';

const MiniWishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch('./data/Cartdata.json')
      .then(res => res.json())
      .then(data => {
        setWishList(data);
      });
  }, []);

  return (
    <section className="miniWishListDetail">
      {wishList.map(data => {
        return (
          <Wish
            key={data.id}
            name={data.name}
            price={data.price}
            type={data.type}
            size={data.size}
          />
        );
      })}
    </section>
  );
};

export default MiniWishList;
