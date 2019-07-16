import React from 'react';
import axios from 'axios';
import { GlobalStyle, Wrapper } from '../styles/MenusStyle';
import { SectionHeader } from '../styles/ContainerStyle';
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
    axios.get(`/${restaurantID}/menus`) // temporary
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
      <Wrapper>
        <GlobalStyle />
        {isLoading
          ? <SectionHeader>Menu</SectionHeader>
          : <Container restaurantData={restaurantData} />}
      </Wrapper>
    );
  }
}

export default Menus;
