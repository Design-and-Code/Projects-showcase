import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
};

export const darkTheme = {
  body: "#333551",
  fontColor: "#fff",
  borderColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

    body{
        background: ${(props) => props.theme.body};
        transition: background 1s;
    }

    svg.MuiSvgIcon-root{
        transition: 0.6s ease;
        color: ${(props) => props.theme.fontColor}
    }

    i#open{
        color: ${(props) => props.theme.fontColor}
    }

    button.toggler{
      border-color: ${(props) => props.theme.borderColor}
    }

`;
