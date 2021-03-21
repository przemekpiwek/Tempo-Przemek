import React, { useContext, useState } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import Button from "../components/Button";
import { USERS_TABLE_HEADERS, findTeamName } from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";
import { useHistory } from "react-router-dom";
import TextInputContainer from "../containers/TextInputContainer";
import Loader from "../components/Loader";

const UserDetailsContainer = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const history = useHistory();
  const pathname = history.location.pathname;
  const teamId = pathname.split("/users/")[1] || null;
  const teamName = findTeamName(teamId, state);
  const { userInfo, loading } = state;

  const [suggestedUserRows, SetSuggestedUserRows] = useState([]);

  const returnOnClick = () => {
    history.push("/teams");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <UserDetailsWrapper>
      {!!teamName && (
        <>
          <NavigationWrapper>
            <Button content="&larr;" onClick={returnOnClick} />
          </NavigationWrapper>
          <HeaderWrapper>
            <PageTitle content={`${teamName}'s Users`} />
            <TextInputContainer
              tableRows={userInfo}
              setTableRows={SetSuggestedUserRows}
            />
          </HeaderWrapper>
        </>
      )}
      <DescriptionText>
        A list of all members that belong to this team.
      </DescriptionText>
      <Table
        headers={USERS_TABLE_HEADERS}
        rows={suggestedUserRows}
        isTeamsTable={false}
      />
    </UserDetailsWrapper>
  );
};

export const NavigationWrapper = styled.div`
  display: block;
  padding: 20px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

const DescriptionText = styled.h6`
  margin: 0;
  color: var(--text-secondary);
`;

export default UserDetailsContainer;
