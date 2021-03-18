import React from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import TableContainer from "../containers/TableContainer";
import { TEAMS_TABLE_HEADERS } from "../utils/helpers";

const TeamsOverview = () => {
  return (
    <TeamsOverviewWrapper>
      <PageTitle content={"Teams Overview"} />
      <TableContainer headers={TEAMS_TABLE_HEADERS} rows={""} />
    </TeamsOverviewWrapper>
  );
};

const TeamsOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

export default TeamsOverview;
