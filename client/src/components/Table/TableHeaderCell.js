import React from "react";
import styled from "styled-components";

const TableHeaderCell = ({ content }) => {
  return <StyledTH>{content}</StyledTH>;
};

const StyledTH = styled.th`
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  color: var(--accent);
  padding: 6px 14px;
  border-bottom: 3px solid var(--secondary-background);

  flex: ${(props) => (props.index === 0 ? "1 1 0%" : "2 1 0%")};
`;

export default TableHeaderCell;
