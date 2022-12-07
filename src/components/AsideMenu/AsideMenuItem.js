import React, { useState } from 'react';

const AsideMenuItem = props => {
  const { info } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const detailList = info.Detail.map(data => (
    <div key={data.id}>{data.Text}</div>
  ));

  return (
    <div className="borderBottom" onClick={onClick}>
      {info.Text}
      <div className="detailMenu">{isOpen && detailList}</div>
    </div>
  );
};

export default AsideMenuItem;
