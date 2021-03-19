import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import TableHeaderCell from "./TableHeaderCell";
import TableBodyCell from "./TableBodyCell";

const Table = ({ headers, rows, isTeamsTable = false }) => {
  const history = useHistory();
  const rowClickHandler = (itemObject) => {
    if (isTeamsTable) {
      history.push(`/users/${itemObject.id}`);
    }
  };

  return (
    <TableWrapper>
      <THead>
        <TableRow>
          {headers.map((header, idx) => (
            <TableHeaderCell key={idx} content={header} index={idx} />
          ))}
        </TableRow>
      </THead>
      <TBody>
        {rows.map((rowObject, rowIndex) => (
          <TableRow
            key={`body-row-${rowIndex}`}
            isTeamsTable={isTeamsTable}
            onClick={() => rowClickHandler(rowObject)}
          >
            <TableBodyCell content={rowIndex + 1} />
            <TableBodyCell
              key={rowIndex}
              index={rowIndex}
              content={rowObject.name}
            />
          </TableRow>
        ))}
      </TBody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
  display: block;
  margin-top: 48px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
`;

const THead = styled.thead`
  display: block;
`;

const TBody = styled.tbody`
  display: block;
`;

const TableRow = styled.tr`
  display: flex;
  position: relative;

  &:hover {
    cursor: ${(props) => (props.isTeamsTable ? "pointer" : "default")};
    background-color: ${(props) =>
      props.isTeamsTable ? "var(--secondary-background)" : "transparent"};
  }
`;
