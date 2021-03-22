export const TEAMS_TABLE_HEADERS = ["Number", "Team Name"];
export const USERS_TABLE_HEADERS = ["Number", "Member Name"];

export const findTeamNameFromId = (teamId, state) => {
  if (!state || !teamId) return "";
  const { teamInfo } = state;
  const team = teamInfo.find((teamObj) => teamObj.id === teamId);
  return team?.name || "";
};

export const filterTableRowName = (tableRows, filterQuery) => {
  if (!tableRows) return [];
  return tableRows.filter((tableRow) =>
    tableRow.name?.toLowerCase().includes(filterQuery.toLowerCase())
  );
};

export const findUsersFromTeamId = (userArray, teamId) => {
  if (!userArray) return [];
  return userArray.filter((user) => user.teamId[0] === teamId);
};
