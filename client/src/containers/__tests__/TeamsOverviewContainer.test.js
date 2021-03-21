import React from "react";
import { render } from "@testing-library/react";
import TeamsOverviewContainer from "../TeamsOverviewContainer";
import { TeamsUsersDataContextProvider } from "../../context";

describe("teams Overview Container", () => {
  it("should render correctly", () => {
    render(
      <TeamsUsersDataContextProvider>
        <TeamsOverviewContainer />
      </TeamsUsersDataContextProvider>
    );
  });
});
