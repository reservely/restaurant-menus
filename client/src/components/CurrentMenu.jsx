/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuSection, MenuSectionHeader, MenuSectionTitle, MenuItems, MenuItem, MenuPrice, MenuDescription,
} from '../styles/CurrentMenuStyle';


class CurrentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { handleCurrentMenu } = this.props;
    handleCurrentMenu();
  }

  render() {
    const { currentMenu } = this.props;
    const renderedMenu = currentMenu.map(menu => (
      <MenuSection key={menu._id}>
        <MenuSectionHeader>
          <MenuSectionTitle>
            { menu.section_name }
          </MenuSectionTitle>
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
  }
}

CurrentMenu.propTypes = {
  currentMenu: PropTypes.any,
  handleCurrentMenu: PropTypes.any,
};
CurrentMenu.defaultProps = { currentMenu: [] };
CurrentMenu.defaultProps = { handleCurrentMenu: null };
export default CurrentMenu;
