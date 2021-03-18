import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages/index";
import { GlobalStyles } from "./styles/GlobalStyles";
import { TeamsUsersDataContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <TeamsUsersDataContextProvider>
      <GlobalStyles />
      <Pages />
    </TeamsUsersDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
