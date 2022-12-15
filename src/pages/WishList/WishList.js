import React, { useEffect, useState } from 'react';
import Wish from '../../components/Wish/Wish';
import './WishList.scss';

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch('/data/WishList.json')
      .then(res => res.json())
      .then(data => {
        setWishList(data);
      });
  }, []);

  return (
    <>
      <h1 className="title">위시리스트</h1>
      <div className="wishList">
        {wishList.map(list => {
          return <Wish key={list.id} {...list} />;
        })}
      </div>
    </>
  );
};

export default WishList;
