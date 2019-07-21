/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ButtonMargin, ActiveButton, MenuButton } from '../styles/MenuButtonsStyle';

function MenuButtons(props) {
  const { restaurantData, currentButton } = props;
  if (!restaurantData) {
    return <div />;
  }
  const MenuButtonsMapped = restaurantData.menus.map((menu, index) => (
    <ButtonMargin key={menu._id}>
      {parseInt(currentButton, 0) === index
        ? <ActiveButton onClick={props.onClick()} id={index}>{menu.menu_name}</ActiveButton>
        : <MenuButton onClick={props.onClick()} id={index}>{menu.menu_name}</MenuButton>}
    </ButtonMargin>
  ));
  return (
    <div>
      {MenuButtonsMapped}
    </div>
  );
}

export default MenuButtons;
