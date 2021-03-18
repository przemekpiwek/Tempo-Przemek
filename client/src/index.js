import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages/index";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>,
  document.getElementById("root")
);
