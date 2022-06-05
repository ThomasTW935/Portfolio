import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./core-ui/reset";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "./core-ui/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
