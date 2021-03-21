import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TextInput from "../TextInput";

describe("Page Title View", () => {
  afterEach(cleanup);

  it("should render without error", () => {
    const value = "#";
    const onChange = jest.fn();
    render(<TextInput value={value} onChange={onChange} />);
    const input = screen.getByPlaceholderText("Search name");
    expect(input).toBeTruthy();
  });
  it("should change set value", () => {
    let state = "";
    const newState = "new state";
    const SetValue = jest.fn((value) => (state = value));
    const onChange = jest.fn((ev) => SetValue(ev.target.value));
    onChange({ target: { value: "new state" } });
    render(<TextInput value={state} onChange={onChange} />);
    const input = screen.getByPlaceholderText("Search name");
    fireEvent.change(input, { target: { value: newState } });
    expect(state).toBe(newState);
  });
});
