import React from 'react';
import { shallow } from 'enzyme';
import RestaurantMenus from '../client/src/components/RestaurantMenus.jsx';

describe('RestaurantMenus Enzyme Test Suite', () => {
  it('component renders without crashing', () => {
    shallow(<RestaurantMenus />);
  });
});