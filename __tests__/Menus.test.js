import React from 'react';
import { shallow } from 'enzyme';
import Menus from '../client/src/components/Menus.jsx';
import Container from '../client/src/components/Container.jsx';
import CurrentMenu from '../client/src/components/CurrentMenu.jsx';
import MenuButtons from '../client/src/components/MenuButtons.jsx';
import axios from 'axios';
jest.mock('axios');

describe('Menus entry component', () => {
  it('component renders without crashing', () => {
    shallow(<Menus />);
  });
});

describe('Menus entry component', () => {
  it('component renders without crashing', () => {
    shallow(<Container />);
  });
});

describe('Menus entry component', () => {
  it('component renders without crashing', () => {
    shallow(<CurrentMenu />);
  });
});

describe('Menus entry component', () => {
  it('component renders without crashing', () => {
    shallow(<MenuButtons />);
  });
});
