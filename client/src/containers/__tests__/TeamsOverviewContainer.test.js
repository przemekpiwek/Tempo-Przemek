import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import TeamsOverviewContainer from "../TeamsOverviewContainer";
import {
  TeamsUsersDataContextProvider,
  TeamsUsersDataContext,
} from "../../context";
import { mockState } from "../../utils/test.utils";

describe("teams Overview Container", () => {
  afterEach(cleanup);
  it("should render correctly", () => {
    render(
      <TeamsUsersDataContextProvider>
        <TeamsOverviewContainer />
      </TeamsUsersDataContextProvider>
    );
  });
  it("should filter the correct user rows", async () => {
    render(
      <TeamsUsersDataContext.Provider value={[mockState, jest.fn()]}>
        <TeamsOverviewContainer />
      </TeamsUsersDataContext.Provider>
    );

    const textInput = screen.getByTestId("text-input");
    act(() => {
      fireEvent.change(textInput, { target: { value: "sa" } });
    });
    const rows = screen.getAllByTestId(/tr-[0-9]/);
    //Gigantic sawfish, vig salmon
    expect(rows).toHaveLength(2);
  });
});
it("should show all rows when clear button is hit", () => {
  render(
    <TeamsUsersDataContext.Provider value={[mockState, jest.fn()]}>
      <TeamsOverviewContainer />
    </TeamsUsersDataContext.Provider>
  );

  const button = screen.getByTestId("button");
  const textInput = screen.getByTestId("text-input");
  act(() => {
    fireEvent.change(textInput, { target: { value: "ly" } });
  });
  let rows = screen.getAllByTestId(/tr-[0-9]/);
  expect(rows).toHaveLength(1);
  // Clearing and filter
  act(() => {
    fireEvent.click(button);
  });
  rows = screen.getAllByTestId(/tr-[0-9]/);
  expect(rows).toHaveLength(4);
});
