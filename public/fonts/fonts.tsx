import createTheme from "@mui/material/styles/createTheme";
import { createGlobalStyle } from "styled-components";
import OpenSans from "./OpenSans.woff2";

const themeFont = createTheme({
  typography: {
    fontFamily: ["OpenSans"].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'OpenSans';
          font-style: light;
          font-weight: 300;
          src: local('OpenSans'), local('OpenSans'), url(${OpenSans}) format('woff2');
        }
      `,
    },
  },
});

