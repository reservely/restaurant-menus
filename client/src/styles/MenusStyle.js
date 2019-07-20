/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BrandonText;
    src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff) format('woff')
  }

  @font-face {
    font-family: BrandonText;
    font-weight: 500;
    src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_med-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_med-webfont.woff) format('woff')
  }

  @font-face {
    font-family: BrandonText;
    font-weight: 700;
    src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_bld-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_bld-webfont.woff) format('woff')
  }
  
`;

export const Wrapper = styled.div`
    font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;
    color: black;
    display: block;
    font-size: 100%;
    margin: 8px;
    width: 608px;
    padding: 0 1rem;
    margin-left: auto;
    margin-right: auto;
`;

export const FlexWrapper = styled.div`
    display: flex;
`;
