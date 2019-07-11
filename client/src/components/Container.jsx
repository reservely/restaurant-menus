import React from 'react';
import PropTypes from 'prop-types';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';

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
    if (restaurantData.menus.length !== 0) {
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
        {restaurantData.menus.length === 0
          ? <div><a href={restaurantData.website}>View menu on restaurant website</a></div>
          : (
            <div>
              <h2>Menu</h2>
              <div>
                <MenuButtons
                  menus={restaurantData.menus}
                  currentButton={currentButton}
                  onClick={() => (this.handleClick)}
                />
                <CurrentMenu currentMenu={currentMenu} />
              </div>
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
