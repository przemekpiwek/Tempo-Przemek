import React from "react";
import styled from "styled-components";
import { NavigationWrapper } from "../containers/UserDetailsContainer";

const Button = ({ content, onClick }) => {
  return (
    <StyledButton data-testid="button" onClick={onClick}>
      {content}
    </StyledButton>
  );
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

  &:focus {
    outline: none;
  }

  ${NavigationWrapper} & {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
  }
`;

export default Button;
