import React, { useContext, useState, useMemo } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Table from "../components/Table/Table";
import Button from "../components/Button";
import {
  USERS_TABLE_HEADERS,
  findTeamNameFromId,
  filterTableRowName,
  findUsersFromTeamId,
} from "../utils/helpers";
import { TeamsUsersDataContext } from "../context";
import { useHistory } from "react-router-dom";
import TextInput from "../components/TextInput";
import Loader from "../components/Loader";

const UserDetailsContainer = () => {
  const [state] = useContext(TeamsUsersDataContext);
  const [textInputValue, SetTextInputValue] = useState("");
  const history = useHistory();
  const pathname = history.location.pathname;
  const teamId = pathname.split("/users/")[1] || null;
  const teamName = findTeamNameFromId(teamId, state);
  const { userInfo, loading } = state;

  const usersInCurrentTeam = findUsersFromTeamId(userInfo, teamId);

  const tableRows = useMemo(
    () => filterTableRowName(usersInCurrentTeam, textInputValue),
    [textInputValue, usersInCurrentTeam]
  );

  const buttonOnClick = () => {
    SetTextInputValue("");
  };
  const inputOnChange = (ev) => {
    SetTextInputValue(ev.target.value);
  };

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
            <TextInputWrapper data-testid="text-input">
              <TextInput value={textInputValue} onChange={inputOnChange} />
              <Button content={"Clear"} onClick={buttonOnClick} />
            </TextInputWrapper>
          </HeaderWrapper>
        </>
      )}
      <DescriptionText>
        A list of all members that belong to this team.
      </DescriptionText>
      <Table
        headers={USERS_TABLE_HEADERS}
        rows={tableRows}
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

const TextInputWrapper = styled.div`
  display: flex;
`;

export default UserDetailsContainer;
