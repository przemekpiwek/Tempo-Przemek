import React, { useState, useContext, useMemo } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import { TEAMS_TABLE_HEADERS } from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";
import Button from "../components/Button";
import Loader from "../components/Loader";
import TextInput from "../components/TextInput";
import { filterTableRowName } from "../utils/helpers";

const TeamsOverviewContainer = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const [textInputValue, SetTextInputValue] = useState("");
  const { teamInfo, loading } = state;
  const tableRows = useMemo(
    () => filterTableRowName(teamInfo, textInputValue),
    [textInputValue, teamInfo]
  );

  const buttonOnClick = () => {
    SetTextInputValue("");
  };
  const inputOnChange = (ev) => {
    SetTextInputValue(ev.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <TeamsOverviewWrapper data-testid="teams-wrapper">
        <HeaderWrapper>
          <PageTitle content={"Teams Overview"} />
          <TextInputWrapper>
            <TextInput value={textInputValue} onChange={inputOnChange} />
            <Button content={"Clear"} onClick={buttonOnClick} />
          </TextInputWrapper>
        </HeaderWrapper>
        <DescriptionText>A list of teams available.</DescriptionText>
        <Table
          data-testid="table"
          headers={TEAMS_TABLE_HEADERS}
          rows={tableRows}
          isTeamsTable={true}
        />
      </TeamsOverviewWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamsOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

const DescriptionText = styled.h6`
  margin: 0;
  color: var(--text-secondary);
`;

const TextInputWrapper = styled.div`
  display: flex;
`;

export default TeamsOverviewContainer;
