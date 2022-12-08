import React, { useState } from 'react';
import { AsideMenuData } from './ASIDE_MENU_DATA';
import AsideMenuItem from './AsideMenuItem';
import './AsideMenu.scss';

const SideMenu = () => {
  return (
    <aside className="sideMenu">
      <div className="menuContainer">
        {AsideMenuData.map(info => (
          <AsideMenuItem key={info.id} info={info} />
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
