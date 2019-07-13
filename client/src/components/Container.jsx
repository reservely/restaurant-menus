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

const IconText = styled.div`
  display: flex;
  text-overflow: ellipsis;
  text-decoration: inherit;
  margin: 0;
  padding: 0;
`;

const Icon = styled.div`
  box-sizing: border-box;
  height: 1.5rem;
  width: 1.5rem;
`;

const WebsiteMenu = styled.div`
  align-self: center;
  margin: 0 0 0 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 0;
  display: block;
  color: #da3743;
  cursor: pointer;
  a {
    color: #da3743;
  }
  a:hover {
    text-decoration: none;
  }
`;

const Tester = styled.div`

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
    const { currentMenu, currentButton, menuCollapse } = this.state;
    return (
      <div>
        <RestaurantProfileMenu>
          <SectionHeader>Menu</SectionHeader>
          {undefined !== restaurantData.menus.length && restaurantData.menus.length === 0
            ? (
              <IconText>
                <Icon>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon/ic_new_window" fill="none">
                      <path d="M19.5,4 C19.7761424,4 20,4.22385763 20,4.5 L20,9.5 C20,9.77614237 19.7761424,10 19.5,10 L18.5,10 C18.2238576,10 18,9.77614237 18,9.5 L18,7.41 L12.18,13.25 C12.0861167,13.3446563 11.9583188,13.3978992 11.825,13.3978992 C11.6916812,13.3978992 11.5638833,13.3446563 11.47,13.25 L10.76,12.54 C10.6653437,12.4461167 10.6121008,12.3183188 10.6121008,12.185 C10.6121008,12.0516812 10.6653437,11.9238833 10.76,11.83 L16.59,6 L14.5,6 C14.2238576,6 14,5.77614237 14,5.5 L14,4.5 C14,4.22385763 14.2238576,4 14.5,4 L19.5,4 Z M19.5,14 C19.7761424,14 20,14.2238576 20,14.5 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,6 C4,4.8954305 4.8954305,4 6,4 L9.5,4 C9.77614237,4 10,4.22385763 10,4.5 L10,5.5 C10,5.77614237 9.77614237,6 9.5,6 L6,6 L6,18 L18,18 L18,14.5 C18,14.2238576 18.2238576,14 18.5,14 L19.5,14 Z" id="ic_new_window" fill="#2D333F" />
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
                  {menuCollapse
                    ? (
                      <div>
                        <MenusContainerCollapsed>
                          <CurrentMenu currentMenu={currentMenu} />
                          <MenuContainerGradient />
                        </MenusContainerCollapsed>
                        <ButtonCenter>
                          <ButtonStatic type="submit" onClick={this.handleClick} id="collapse">View full Menu</ButtonStatic>
                        </ButtonCenter>
                      </div>
                    )
                    : (
                      <div>
                        <div>
                          <CurrentMenu currentMenu={currentMenu} />
                        </div>
                        <ButtonCenter>
                          <ButtonStatic type="submit" onClick={this.handleClick} id="collapse">Collapse Menu</ButtonStatic>
                        </ButtonCenter>
                      </div>
                    )
                  }
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
