/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ButtonMargin, ActiveButton, MenuButton } from '../styles/MenuButtonsStyle';

const MenuButtons = props => (
  props.menus.map((menu, index) => (
    <ButtonMargin key={menu._id}>
      {parseInt(props.currentButton, 0) === index
        ? <ActiveButton onClick={props.onClick()} id={index}>{menu.menu_name}</ActiveButton>
        : <MenuButton onClick={props.onClick()} id={index}>{menu.menu_name}</MenuButton>}
    </ButtonMargin>
  ))
);

MenuButtons.defaultProps = { menus: [] };
export default MenuButtons;
