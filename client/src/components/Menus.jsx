/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';
import { GlobalStyle, Wrapper, FlexWrapper } from '../styles/MenusStyle';
import { SectionHeader } from '../styles/ContainerStyle';
import Container from './Container';


class Menus extends React.Component {
  constructor(props) {
    super(props);
    let id = location.pathname.slice(1);
    id = (id !== '') ? parseInt(id) : Math.floor(Math.random() * 100);
    this.state = {
      restaurantData: {},
      isLoading: true,
      restaurantID: id,
    };
  }

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus() {
    const { restaurantID } = this.state;
    axios.get(`/${restaurantID}/menus`)
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
      <FlexWrapper>
        <Wrapper>
          <GlobalStyle />
          {isLoading
            ? <SectionHeader>Menu</SectionHeader>
            : <Container restaurantData={restaurantData} />}
        </Wrapper>
      </FlexWrapper>

    );
  }
}

export default Menus;
