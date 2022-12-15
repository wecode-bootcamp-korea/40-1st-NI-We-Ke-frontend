import React, { useState } from 'react';
import Snkrsdrop from '../Dropdown/Snkrsdrop';

const Snkrs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEnter = () => {
    setIsVisible(true);
  };
  const onMouseExit = () => {
    setIsVisible(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <li>SNKRS</li>
      {isVisible && <Snkrsdrop />}
    </div>
  );
};

export default Snkrs;
