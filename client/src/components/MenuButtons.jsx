import React from 'react';

const MenuButtons = props => (
  props.menus.map((menu, index) => (
    // eslint-disable-next-line no-underscore-dangle
    <input type="submit" key={menu._id} onClick={props.onClick()} id={index} value={menu.menu_name} />
  ))
);

export default MenuButtons;
