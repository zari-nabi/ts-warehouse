import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  MuiThemeProvider,
  jssPreset,
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import GlobalStyles from "./Theme/GlobalStyles";
import { lightTheme } from "./Theme/light";
import { darkTheme } from "./Theme/dark";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";

const Index = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const theme =
    localStorage.getItem("themeType") === "light" ? lightTheme : darkTheme;
  // Custom Material-UI class name g  enerator.
  const generateClassName = createGenerateClassName();

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </MuiThemeProvider>
      </Provider>
    </StylesProvider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
