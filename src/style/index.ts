import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *, h1{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    body html #root {
    height: 100%;
  }
  }
`;

export default Global;