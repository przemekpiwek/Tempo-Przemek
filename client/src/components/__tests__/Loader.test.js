import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loader from "../Loader";

describe("Page Title View", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(<Loader />);
  });
});
