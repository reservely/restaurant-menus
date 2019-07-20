/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';
import {
  RestaurantProfileMenu, SectionHeader, DivFilterNone,
  MenuNav, MenusContainerCollapsed, MenuContainerGradient, ButtonCenter, ButtonStatic,
  MenuFooter, ButtonFloat,
} from '../styles/ContainerStyle';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: [],
      currentButton: 0,
      menuCollapse: true,
      anchorCollapse: true,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { restaurantData } = this.props;
    this.setState({ currentMenu: restaurantData.menus[0].sections });
  }


  handleClick(e) {
    const { id } = e.target;
    const { restaurantData } = this.props;
    if (id === 'collapse') {
      this.setState(prevState => ({
        menuCollapse: !prevState.menuCollapse,
      }));
    } else {
      this.setState({ currentMenu: restaurantData.menus[id].sections, currentButton: id });
    }
  }

  render() {
    const { restaurantData } = this.props;
    const {
      currentMenu, currentButton, menuCollapse, anchorCollapse,
    } = this.state;
    return (
      <div>
        <RestaurantProfileMenu>
          <SectionHeader>Menu</SectionHeader>
          <div>
            <DivFilterNone>
              <MenuNav>
                <MenuButtons
                  menus={restaurantData.menus}
                  currentButton={currentButton}
                  onClick={() => (this.handleClick)}
                />
              </MenuNav>
              <div>
                <MenusContainerCollapsed menuCollapse={menuCollapse}>
                  <CurrentMenu currentMenu={currentMenu} />
                  <MenuContainerGradient menuCollapse={menuCollapse} />
                </MenusContainerCollapsed>
                <ButtonCenter>
                  {menuCollapse ? (
                    <ButtonStatic type="submit" onClick={this.handleClick} id="collapse">View full menu</ButtonStatic>
                  )
                    : (
                      anchorCollapse ? (
                        <ButtonStatic type="submit" onClick={this.handleClick} id="collapse">Collapse menu</ButtonStatic>
                      ) : (
                        <ButtonFloat menuCollapse={menuCollapse} type="submit" onClick={this.handleClick} id="collapse">Collapse menu</ButtonFloat>
                      )
                    )}
                </ButtonCenter>
              </div>
              <MenuFooter>
                <div>
                  Last updated: July 04, 2019
                </div>
                <div>
                  <img src="https://a.singleplatform.com/OpenTable/marlowe/provided_by.png?sp_dt=20190425" alt="singleplatform" />
                </div>
              </MenuFooter>
            </DivFilterNone>
          </div>
        </RestaurantProfileMenu>
      </div>
    );
  }
}
Container.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  restaurantData: PropTypes.any,
};
Container.defaultProps = { restaurantData: {} };
export default Container;
