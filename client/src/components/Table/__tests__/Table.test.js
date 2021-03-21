import React from "react";
import Table from "../Table";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { mockState } from "../../../utils/test.utils";
import {
  TEAMS_TABLE_HEADERS,
  USERS_TABLE_HEADERS,
} from "../../../utils/helpers";

describe("Table View", () => {
  afterEach(cleanup);
  const teamsHeaders = TEAMS_TABLE_HEADERS;
  const usersHeaders = USERS_TABLE_HEADERS;
  const history = createBrowserHistory();
  const teamsRows = [...mockState.teamInfo];
  const usersRows = [...mockState.userInfo];

  it("should render correctly", () => {
    render(<Table headers={teamsHeaders} rows={teamsRows} />);
    render(<Table headers={usersHeaders} rows={usersRows} />);
  });
  it("should route to specific team's page when team row clicked", () => {
    render(
      <Router history={history}>
        <Table headers={teamsHeaders} rows={teamsRows} isTeamsTable={true} />
      </Router>
    );
    const rowSelected = screen.getByTestId("tr-2");
    fireEvent.click(rowSelected);
    expect(history.location.pathname).toBe(
      `/users/${mockState.teamInfo[2].id}`
    );
  });
  it("should not do anything when a user's table row is clicked", () => {
    const selectedTeam = mockState.userInfo[2].teamId[0];
    const currentPath = `/users/${selectedTeam}`;
    history.push(currentPath);

    render(
      <Router history={history}>
        <Table headers={usersHeaders} rows={usersRows} isTeamsTable={false} />
      </Router>
    );
    const rowSelected = screen.getByTestId("tr-2");
    fireEvent.click(rowSelected);
    expect(history.location.pathname).toBe(currentPath);
  });
});
