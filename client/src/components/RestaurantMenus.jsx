import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';

class RestaurantMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      currentMenu: [],
      currentButton: 0,
      restaurantID: Math.floor(Math.random() * 100) + 1, // temporary
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus() {
    const { restaurantID } = this.state;
    axios.get(`http://localhost:3000/${restaurantID}/menus`) // temporary
      .then((res) => {
        this.setState({ restaurantData: res.data[0] });
        if (res.data[0].menus[0]) {
          this.setState({ currentMenu: res.data[0].menus[0].sections, currentButton: 0 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(e) {
    const { restaurantData } = this.state;
    const { id } = e.target;
    this.setState({ currentMenu: restaurantData.menus[id].sections, currentButton: id });
  }

  render() {
    const { restaurantData, currentMenu, currentButton } = this.state;
    return (
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
    );
  }
}

export default RestaurantMenus;
