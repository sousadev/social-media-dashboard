import { createGlobalStyle } from 'styled-components';
import { ThemeGlobalData } from '../contexts/Theme.context';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Inter";
  }
  button {
    cursor: pointer;
  }
  body {
    width: 100%;
    background: ${(props: ThemeGlobalData) => props.theme.colors.bg};
  }
  h1 {
    width: 100%;
    margin: 50px 0;
    text-align: center;
    color: ${(props: ThemeGlobalData) => props.theme.colors.white};
  }
`;
