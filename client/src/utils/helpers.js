export const TEAMS_TABLE_HEADERS = ["Number", "Team Name"];
export const USERS_TABLE_HEADERS = ["Number", "Member Name"];

export const findTeamName = (teamId, state) => {
  if (!teamId) return;
  const { teamInfo } = state;
  const team = teamInfo.find((teamObj) => teamObj.id === teamId);
  return team?.name || "";
};
