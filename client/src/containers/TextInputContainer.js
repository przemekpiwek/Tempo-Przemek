import React, { useState } from "react";
import TextInput from "../components/TextInput";
import styled from "styled-components";
import Button from "../components/Button";

const TextInputContainer = ({ tableRows, setTableRows }) => {
  const [value, SetValue] = useState("");

  const buttonOnClick = () => {
    SetValue("");
  };

  React.useEffect(() => {
    const filteredRows = tableRows.filter((row) => {
      return row?.name?.toLowerCase().includes(value);
    });
    setTableRows([...filteredRows]);
  }, [value, tableRows, setTableRows]);

  return (
    <TextInputWrapper>
      <TextInput value={value} SetValue={SetValue} />
      <Button content={"Clear"} onClick={buttonOnClick} />
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  display: flex;
`;

export default TextInputContainer;
