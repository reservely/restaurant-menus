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

const ButtonMargin = styled.div`
  margin-right: 16px;
  background-color: #fff;
  margin-top: 16px;
  font-size: 14px;
  color: #2d333f;
  display: inline
`;


const MenuButtons = props => (
  props.menus.map((menu, index) => (
    // eslint-disable-next-line no-underscore-dangle
    <ButtonMargin><Button type="submit" key={menu._id} onClick={props.onClick()} id={index} value={menu.menu_name} /></ButtonMargin>
  ))
);

MenuButtons.defaultProps = { menus: [] };
export default MenuButtons;
