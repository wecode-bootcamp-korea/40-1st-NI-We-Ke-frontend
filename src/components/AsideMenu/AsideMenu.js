import React, { useState } from 'react';
import { ASIDE_MENU_DATA } from './ASIDE_MENU_DATA';
import AsideMenuItem from './AsideMenuItem';
import './AsideMenu.scss';

const SideMenu = () => {
  return (
    <aside className="sideMenu">
      <div className="menuContainer">
        {ASIDE_MENU_DATA.map(info => (
          <AsideMenuItem key={info.id} info={info} />
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
