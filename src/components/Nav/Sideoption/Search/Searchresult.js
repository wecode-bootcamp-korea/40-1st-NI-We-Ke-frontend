import React from 'react';

const Searchresult = props => {
  const { img, value, price } = props;

  return (
    <div className="searchResult">
      <img className="searchImg" src={img} alt="제품썸네일이미지" />
      <p className="name">{value}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Searchresult;
