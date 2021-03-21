import React from "react";
import TableHeaderCell from "../TableHeaderCell";
import { render, cleanup } from "@testing-library/react";

describe("TableHeaderCell View", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    const content = "with content";
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell content={content} />
          </tr>
        </thead>
      </table>
    );
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell />
          </tr>
        </thead>
      </table>
    );
  });
});
