import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Category = props => {
  const [isVisible, setisVisible] = useState(false);
  const { id, name, carousel } = props;
  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <li key={id}>{name}</li>
      {isVisible && <Dropdown carousel={carousel} />}
    </div>
  );
};

export default Category;
