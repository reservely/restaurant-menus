/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #2d333f;
  border: 1px solid #d8d9db;
  border-radius: 2px;
  padding: 8px 16px;
  display: inline-block;
  box-sizing: border-box;
`;

const ActiveButton = styled(Button)`
  border: 2px solid #da3743;
`;

const ButtonMargin = styled.div`
  margin-right: 16px;
  background-color: #fff;
  margin-top: 16px;
  font-size: 14px;
  color: #2d333f;
  display: inline
  *:focus {
    outline: none;
  }
`;

const MenuButtons = props => (
  props.menus.map((menu, index) => (
    <ButtonMargin key={menu._id}>
      {parseInt(props.currentButton, 0) === index
        ? <ActiveButton type="submit" onClick={props.onClick()} id={index} value={menu.menu_name} />
        : <Button type="submit" onClick={props.onClick()} id={index} value={menu.menu_name} />}
    </ButtonMargin>
  ))
);

MenuButtons.defaultProps = { menus: [] };
export default MenuButtons;
