import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import { USERS_TABLE_HEADERS, findTeamName } from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";
import { useHistory } from "react-router-dom";

const UserDetails = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const history = useHistory();
  const pathname = history.location.pathname;
  const teamId = pathname.split("/users/")[1] || null;
  const teamName = findTeamName(teamId, state);

  const { userInfo } = state;

  return (
    <UserDetailsWrapper>
      {!!teamName && <PageTitle content={`${teamName}'s Users`} />}
      <DescriptionText>
        A list of all members that belong to this team.
      </DescriptionText>
      <Table
        headers={USERS_TABLE_HEADERS}
        rows={userInfo}
        isTeamsTable={false}
      />
    </UserDetailsWrapper>
  );
};

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

const DescriptionText = styled.h6`
  margin: 0;
  color: var(--text-secondary);
`;

export default UserDetails;
