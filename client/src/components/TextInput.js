import React from "react";
import styled from "styled-components";

const TextInput = ({ value, SetValue }) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder="Search name"
      onChange={(ev) => {
        SetValue(ev.target.value);
      }}
    />
  );
};

const Input = styled.input`
  border: 2px solid #eaeaea;
  color: var(--text);
  background-color: var(--background);
  width: 300px;
  border-radius: 5px;
  border-color: var(--accent);
  padding-left: 10px;
  height: var(--min-input-height);

  &::placeholder {
    color: var(--text);
  }

  &:active {
    outline: none;
    outline-width: 0px;
  }

  &:focus {
    outline: none;
    outline-width: 0px;
  }
`;

export default TextInput;
