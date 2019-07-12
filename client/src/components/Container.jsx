import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';

const RestaurantProfileMenu = styled.section`
  position: relative;
  display: block;
  -webkit-locale: "en";
`;

const DivFilterNone = styled.div`
  filter: none;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 16px;
  margin: 0 0 16px 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const MenuNav = styled.div`
  margin-top: calc(-1 * 16px);
  padding-bottom: 16px;
  border-bottom: 1px solid #d8d9db;
`;
const WebsiteMenu = styled.div`
  margin-top: 16px;
  display: flex;
  text-overflow: ellipsis;
  text-decoration: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  a {
    color: #da3743;
  }
  a:hover {
    text-decoration: none;
  }
`;
const MenusContainerCollapsed = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
`;
const MenuContainerGradient = styled.div`
  content: " ";
  z-index: 10;
  display: block;
  position: absolute;
  height: 200px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: -webkit-gradient(linear,left bottom,left top,from(#fff),to(rgba(255,255,255,0)));
  background-image: linear-gradient(to top,#fff,rgba(255,255,255,0));
  background-color: rgba(255,255,255,.2);
`;
const ButtonCenter = styled.div`
  text-align: center;
`;
const ButtonStatic = styled.button`
  color: inherit;
  font: inherit;
  cursor: pointer;
  margin: 0 auto 32px auto;
  padding: 16px;
  font-size: 16px;
  line-height: 1rem;
  font-weight: 500;
  width: 18rem;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  background: 0 0;
  box-sizing: border-box;
  text-align: center;
  :hover {
    border: 2px solid #da3743;
    padding: calc(1rem - 1px);
  }
  :focus {
  outline: 0;
  }
`;
const MenuFooter = styled.div`
  font-size: 10px;
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #2d333f;
  border-top: 1px solid #d8d9db;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

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
    const { currentMenu, currentButton } = this.state;
    return (
      <div>
        <RestaurantProfileMenu>
          <SectionHeader>Menu</SectionHeader>
          {undefined !== restaurantData.menus.length && restaurantData.menus.length === 0
            ? (
              <WebsiteMenu>
                <a href={restaurantData.website}>View menu on restaurant website</a>
              </WebsiteMenu>
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
                  <MenusContainerCollapsed>
                    <CurrentMenu currentMenu={currentMenu} />
                    <MenuContainerGradient />
                  </MenusContainerCollapsed>
                  <ButtonCenter>
                    <ButtonStatic type="submit" onClick={this.handleClick} id="collapse">View full Menu</ButtonStatic>
                  </ButtonCenter>
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
