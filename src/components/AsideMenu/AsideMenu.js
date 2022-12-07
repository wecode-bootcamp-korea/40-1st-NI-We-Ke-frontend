import React, { useState } from 'react';
import { AsideMenuData } from './AsideMenuData';
import '../AsideMenu/AsideMenu.scss';
import AsideMenuItem from './AsideMenuItem';

const SideMenu = () => {
  return (
    <aside className="asideMenu">
      <div className="menuContainer">
        {AsideMenuData.map(info => (
          <AsideMenuItem key={info.id} info={info} />
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
