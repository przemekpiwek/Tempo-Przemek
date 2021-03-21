import React, { useState } from "react";
import TextInput from "../components/TextInput";
import styled from "styled-components";
import Button from "../components/Button";

const TextInputContainer = ({ tableRows, setTableRows }) => {
  const [value, SetValue] = useState("");

  const buttonOnClick = () => {
    SetValue("");
  };
  const inputOnChange = (ev) => {
    SetValue(ev.target.value);
  };

  React.useEffect(() => {
    const filteredRows = tableRows?.filter((row) => {
      return row?.name?.toLowerCase().includes(value);
    });
    setTableRows([...filteredRows]);
  }, [value, tableRows, setTableRows]);

  return (
    <TextInputWrapper>
      <TextInput value={value} onChange={inputOnChange} />
      <Button content={"Clear"} onClick={buttonOnClick} />
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  display: flex;
`;

export default TextInputContainer;
