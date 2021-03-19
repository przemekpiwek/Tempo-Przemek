import React, { useState, useContext, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import { TEAMS_TABLE_HEADERS } from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";
import TextInputContainer from "../containers/TextInputContainer";

const TeamsOverview = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const { teamInfo } = state;
  const [suggestedTeamRows, SetSuggestedTeamRows] = useState([]);

  useEffect(() => {
    SetSuggestedTeamRows([...teamInfo]);
  }, [teamInfo]);

  return (
    <TeamsOverviewWrapper>
      <HeaderWrapper>
        <PageTitle content={"Teams Overview"} />
        <TextInputContainer
          tableRows={teamInfo}
          setTableRows={SetSuggestedTeamRows}
        />
      </HeaderWrapper>
      <DescriptionText>A list of teams available.</DescriptionText>
      <Table
        headers={TEAMS_TABLE_HEADERS}
        rows={suggestedTeamRows}
        isTeamsTable={true}
      />
    </TeamsOverviewWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeamsOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

const DescriptionText = styled.h6`
  margin: 0;
  color: var(--text-secondary);
`;

export default TeamsOverview;
