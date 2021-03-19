import React from "react";
import styled from "styled-components";

const Button = ({ content, onClick }) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: var(--text);
  color: var(--background);
  border-radius: 5px;
  margin-left: 10px;
  border: 0px;
  padding: 10px 20px;
  height: var(--min-button-height);

  &:hover {
    cursor: pointer;
    background-color: var(--text-secondary);
    color: var(--accent);
  }
`;

export default Button;
