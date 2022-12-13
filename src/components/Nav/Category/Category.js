import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Category = props => {
  const { name, carousel } = props;
  const [isVisible, setisVisible] = useState(false);

  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  return (
    <div
      className="categoryText"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseExit}
    >
      <li>{name}</li>
      {isVisible ? (
        <Dropdown className="dropDown" carousel={carousel} />
      ) : (
        <Dropdown className="dropDownHidden" carousel={carousel} />
      )}
    </div>
  );
};

export default Category;
