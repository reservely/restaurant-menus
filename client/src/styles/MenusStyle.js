/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
