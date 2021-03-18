import React from "react";
import styled from "styled-components";

const TableBodyCell = ({ content }) => {
  return <StyledTD>{content}</StyledTD>;
};

const StyledTD = styled.td`
  text-align: left;
  font-weight: 500;
  color: var(--accent);
  font-size: 15px;
  padding: 14px;

  &:hover {
    background-color: var(--secondary-background);
  }
`;

export default TableBodyCell;
