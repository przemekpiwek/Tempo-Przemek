import React from "react";
import { render } from "@testing-library/react";
import UserDetailsContainer from "../UserDetailsContainer";
import { TeamsUsersDataContextProvider } from "../../context";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

describe("User Overview Container", () => {
  it("should render correctly", () => {
    const history = createBrowserHistory();
    render(
      <Router history={history}>
        <TeamsUsersDataContextProvider>
          <UserDetailsContainer />
        </TeamsUsersDataContextProvider>
      </Router>
    );
  });
});
