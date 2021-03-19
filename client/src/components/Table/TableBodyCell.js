import React from "react";
import styled from "styled-components";

const TableBodyCell = ({ content, children }) => {
  const renderedContents = content ? content : children;
  return <StyledTD>{renderedContents}</StyledTD>;
};

const StyledTD = styled.td`
  text-align: left;
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 15px;
  padding: 14px;
  flex: ${(props) => (props.index === 0 ? "1 1 0%" : "2 1 0%")};
`;

export default TableBodyCell;
