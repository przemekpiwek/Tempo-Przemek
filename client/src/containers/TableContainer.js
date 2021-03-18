import React, { useContext } from "react";
import styled from "styled-components";
import { TeamsUsersDataContext } from "../context";
import TableHeaderCell from "../components/Table/TableHeaderCell";

const TableContainer = ({ headers, rows }) => {
  const [state] = useContext(TeamsUsersDataContext);

  return (
    <TableWrapper>
      <THead>
        <TableRow>
          {headers.map((header, idx) => (
            <TableHeaderCell index={idx} content={header} />
          ))}
        </TableRow>
      </THead>
    </TableWrapper>
  );
};

export default TableContainer;

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

const TableRow = styled.tr`
  display: flex;
  position: relative;
`;
