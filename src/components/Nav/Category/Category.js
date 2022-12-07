import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Category = props => {
  const [isVisible, setisVisible] = useState(false);
  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <li key={props.id}>{props.name}</li>
      {isVisible && <Dropdown carousel={props.carousel} />}
    </div>
  );
};

export default Category;
