import React from 'react';
import PropTypes from 'prop-types';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';
import {
  RestaurantProfileMenu, SectionHeader, IconText, Icon, WebsiteMenu, DivFilterNone,
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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { restaurantData } = this.props;
    if (undefined !== restaurantData.menus.length && restaurantData.menus.length !== 0) {
      this.setState({ currentMenu: restaurantData.menus[0].sections });
    }
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
    const { currentMenu, currentButton, menuCollapse } = this.state;
    return (
      <div>
        <RestaurantProfileMenu>
          <SectionHeader>Menu</SectionHeader>
          {restaurantData.menus.length === 0
            ? (
              <IconText>
                <Icon>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M19.5,4 C19.7761424,4 20,4.22385763 20,4.5 L20,9.5 C20,9.77614237
                        19.7761424,10 19.5,10 L18.5,10 C18.2238576,10 18,9.77614237 18,9.5 L18,7.41
                        L12.18,13.25 C12.0861167,13.3446563 11.9583188,13.3978992 11.825,13.3978992
                        C11.6916812,13.3978992 11.5638833,13.3446563 11.47,13.25 L10.76,12.54
                        C10.6653437,12.4461167 10.6121008,12.3183188 10.6121008,12.185 C10.6121008,12.0516812
                        10.6653437,11.9238833 10.76,11.83 L16.59,6 L14.5,6 C14.2238576,6 14,5.77614237
                        14,5.5 L14,4.5 C14,4.22385763 14.2238576,4 14.5,4 L19.5,4 Z M19.5,14 C19.7761424,14
                        20,14.2238576 20,14.5 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20
                        4,19.1045695 4,18 L4,6 C4,4.8954305 4.8954305,4 6,4 L9.5,4 C9.77614237,4 10,4.22385763
                        10,4.5 L10,5.5 C10,5.77614237 9.77614237,6 9.5,6 L6,6 L6,18 L18,18 L18,14.5 C18,14.2238576
                        18.2238576,14 18.5,14 L19.5,14 Z"
                      />
                    </g>
                  </svg>
                </Icon>
                <WebsiteMenu>
                  <a href={restaurantData.website}>View menu on restaurant website</a>
                </WebsiteMenu>
              </IconText>
            )
            : (
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
                          <ButtonFloat type="submit" onClick={this.handleClick} id="collapse">Collapse menu</ButtonFloat>
                        )}
                    </ButtonCenter>
                  </div>
                  <MenuFooter>
                    <div>
                      Last updated: July 04, 1776
                    </div>
                    <div>
                      <img src="./img/provided_by_poedorjandrew.png" alt="poedorjandrew" />
                    </div>
                  </MenuFooter>
                </DivFilterNone>
              </div>
            )
          }
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
