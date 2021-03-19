import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import { TEAMS_TABLE_HEADERS } from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";

const TeamsOverview = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const { teamInfo } = state;

  return (
    <TeamsOverviewWrapper>
      <PageTitle content={"Teams Overview"} />
      <DescriptionText>A list of teams available.</DescriptionText>
      <Table
        headers={TEAMS_TABLE_HEADERS}
        rows={teamInfo}
        isTeamsTable={true}
      />
    </TeamsOverviewWrapper>
  );
};

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
