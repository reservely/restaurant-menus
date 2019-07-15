/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ButtonMargin, ActiveButton, Button } from '../styles/MenuButtonsStyle';

const MenuButtons = props => (
  props.menus.map((menu, index) => (
    <ButtonMargin key={menu._id}>
      {parseInt(props.currentButton, 0) === index
        ? <ActiveButton onClick={props.onClick()} id={index}>{menu.menu_name}</ActiveButton>
        : <Button onClick={props.onClick()} id={index}>{menu.menu_name}</Button>}
    </ButtonMargin>
  ))
);

MenuButtons.defaultProps = { menus: [] };
export default MenuButtons;
