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

  const detailClick = () => {
    console.log(info.Detail[0]);
  };
  return (
    <>
      <div className="borderBottom" onClick={onClick}>
        {info.Text}
      </div>
      <div
        className={'menu ' + (isOpen ? 'openMenu' : 'closeMenu')}
        onClick={detailClick}
      >
        {detailList}
      </div>
    </>
  );
};

export default AsideMenuItem;
