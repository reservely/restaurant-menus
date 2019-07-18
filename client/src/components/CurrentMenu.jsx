/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuSection, MenuSectionHeader, MenuSectionTitle, MenuItems, MenuItem, MenuPrice, MenuDescription,
} from '../styles/CurrentMenuStyle';

const CurrentMenu = (props) => {
  const { currentMenu } = props;
  const renderedMenu = currentMenu.map(menu => (
    <MenuSection key={menu._id}>
      <MenuSectionHeader>
        <MenuSectionTitle>
          { menu.section_name }
        </MenuSectionTitle>
        {/* <MenuSectionDescription>
          { menu.section_description }
        </MenuSectionDescription> */}
      </MenuSectionHeader>
      <MenuItems>
        { menu.items.map(item => (
          <MenuItem key={item._id}>
            <MenuPrice>
              {item.item_price}
            </MenuPrice>
            <div>
              {item.item_name}
            </div>
            <MenuDescription>
              {item.item_description}
            </MenuDescription>
            {/* <MenuVariation>
              {item.item_option}
            </MenuVariation> */}
          </MenuItem>
        ))}
      </MenuItems>
    </MenuSection>
  ));

  return (
    <div>
      {renderedMenu}
    </div>
  );
};

CurrentMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentMenu: PropTypes.any,
};
CurrentMenu.defaultProps = { currentMenu: [] };
export default CurrentMenu;
