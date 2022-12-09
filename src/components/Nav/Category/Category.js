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
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <li>{name}</li>
      {isVisible && <Dropdown carousel={carousel} />}
    </div>
  );
};

export default Category;
