import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';

const SectionHeader = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 16px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const MenuNav = styled.div`
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

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: [],
      currentButton: 0,
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
    this.setState({ currentMenu: restaurantData.menus[id].sections, currentButton: id });
  }

  render() {
    const { restaurantData } = this.props;
    const { currentMenu, currentButton } = this.state;
    return (
      <div>
        <SectionHeader>Menu</SectionHeader>
        {undefined !== restaurantData.menus.length && restaurantData.menus.length === 0
          ? <WebsiteMenu><a href={restaurantData.website}>View menu on restaurant website</a></WebsiteMenu>
          : (
            <div>
              <MenuNav>
                <MenuButtons
                  menus={restaurantData.menus}
                  currentButton={currentButton}
                  onClick={() => (this.handleClick)}
                />
              </MenuNav>
              <CurrentMenu currentMenu={currentMenu} />
            </div>
          )
        }
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
