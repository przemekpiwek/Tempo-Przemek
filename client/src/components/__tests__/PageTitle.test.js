import React from "react";
import { render, cleanup } from "@testing-library/react";
import PageTitle from "../PageTitle";

describe("Page Title View", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(<PageTitle content="test" />);
  });

  it("should not render if no content is provided", () => {
    render(<PageTitle />);
    const title = document.querySelector("[data-testid=pagetitle]");
    expect(title).toBeFalsy();
  });
});
