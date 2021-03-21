import React from "react";
import TableBodyCell from "../TableBodyCell";
import { render, cleanup } from "@testing-library/react";

describe("TableBodyCell View", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    const content = "with content";
    render(
      <table>
        <thead>
          <tr>
            <TableBodyCell content={content} />
          </tr>
        </thead>
      </table>
    );
    render(
      <table>
        <tbody>
          <tr>
            <TableBodyCell />
          </tr>
        </tbody>
      </table>
    );
  });
});
