/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';


const BaseButton = styled.input`
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: buttonface;
  box-sizing: border-box;
  margin: 0em;
  padding: 1px 7px 2px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-image: initial;
  overflow: visible;
  font: inherit;
`;

const Button = styled(BaseButton)`
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
  padding: calc(8px - 1px) calc(16px - 1px);
`;

const ButtonMargin = styled.div`
  margin-right: 16px;
  background-color: #fff;
  margin-top: 16px;
  font-size: 14px;
  color: #2d333f;
  display: inline-block;
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
