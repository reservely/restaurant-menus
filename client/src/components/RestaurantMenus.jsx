import React from 'react';
import axios from 'axios';
import MenuButtons from './MenuButtons';
import CurrentMenu from './CurrentMenu';

class RestaurantMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      currentMenu: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus() {
    axios.get('http://localhost:3000/1/menus') // hardcoded :restaurant_id for now
      .then((res) => {
        this.setState({ restaurantData: res.data[0] });
        if (res.data[0].menus[0]) {
          this.setState({ currentMenu: res.data[0].menus[0].sections });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(e) {
    const { restaurantData } = this.state;
    this.setState({ currentMenu: restaurantData.menus[e.target.id].sections });
  }

  render() {
    const { restaurantData, currentMenu } = this.state;
    const menus = restaurantData.menus ? restaurantData.menus : [];
    return (
      <div>
        <MenuButtons
          menus={menus}
          restaurantData={restaurantData}
          onClick={() => (this.handleClick)}
        />
        <CurrentMenu currentMenu={currentMenu} />
      </div>
    );
  }
}

export default RestaurantMenus;
