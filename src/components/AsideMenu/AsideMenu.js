import React, { useState } from 'react';
import { AsideMenuData } from './AsideMenuData';
import '../AsideMenu/AsideMenu.scss';

const SideMenu = () => {
  // const [listNum, setListNum] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const detailList = AsideMenuData[0].Detail.map(data => (
    <div key={data.id}>{data.Text}</div>
  ));

  const menuList = AsideMenuData.map(info => (
    <div key={info.id} onClick={onClick}>
      {info.Text}
      <div className="detailMenu">{isOpen && detailList}</div>
    </div>
  ));

  return (
    <aside className="asideMenu">
      <div className="menuContainer">{menuList}</div>
    </aside>
  );
};

export default SideMenu;
