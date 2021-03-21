import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button View", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(<Button />);
  });
  it("should execute onClick function", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = document.querySelector("[data-testid=button]");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
