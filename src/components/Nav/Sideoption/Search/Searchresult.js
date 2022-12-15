import React from 'react';

const Searchresult = props => {
  const { image, name, price } = props;

  return (
    <div className="searchResult">
      <img className="searchImg" src={image} alt="제품썸네일이미지" />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Searchresult;
