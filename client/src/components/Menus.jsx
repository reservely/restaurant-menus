import React from 'react';
import axios from 'axios';
import { GlobalStyle } from '../styles/MenusStyle';
import Container from './Container';


class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      isLoading: true,
      restaurantID: Math.floor(Math.random() * 100) + 1, // temporary
    };
  }

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus() {
    const { restaurantID } = this.state;
    axios.get(`http://localhost:3000/${restaurantID}/menus`) // temporary
      .then((res) => {
        this.setState({ restaurantData: res.data[0] });
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const { isLoading, restaurantData } = this.state;
    return (
      <div>
        <GlobalStyle />
        {isLoading
          ? <div>Loading...</div>
          : <Container restaurantData={restaurantData} />}
      </div>
    );
  }
}

export default Menus;