import React from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import Container from './Container';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BrandonText';
    src: url('./fonts/Brandon_txt_reg-webfont.woff2') format('woff2'),
        url('./fonts/Brandon_txt_reg-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
  }
  @font-face {
    font-family: 'BrandonText';
    src: url('./fonts/Brandon_txt_med-webfont.woff2') format('woff2'),
        url('./fonts/Brandon_txt_med-webfont.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'BrandonText';
    src: url('./fonts/Brandon_txt_bld-webfont.woff2') format('woff2'),
        url('./fonts/Brandon_txt_bld-webfont.woff') format('woff');
    font-weight: 700;
  }
  body {
    font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;
    color: black;
    display: block;
    font-size: 100%;
    margin: 8px;
    width: 640px;
    padding: 0 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  div {
    display: block;
  }

`;

class App extends React.Component {
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

export default App;
