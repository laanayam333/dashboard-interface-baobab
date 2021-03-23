import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "App";
import store from "redux/store";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/globalStyles";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  root
);
