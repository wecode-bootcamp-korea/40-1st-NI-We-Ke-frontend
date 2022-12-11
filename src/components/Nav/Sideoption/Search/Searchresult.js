import React from 'react';

const Searchresult = props => {
  const { img, value, price } = props;

  return (
    <div className="searchResult">
      <img className="searchImg" src={img} alt="제품썸네일이미지" />
      <p>{value}</p>
      <p>{price}</p>
    </div>
  );
};

export default Searchresult;
