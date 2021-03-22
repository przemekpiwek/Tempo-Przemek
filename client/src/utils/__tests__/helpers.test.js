import {
  findTeamNameFromId,
  filterTableRowName,
  findUsersFromTeamId,
} from "../helpers";
import { mockState } from "../test.utils";

describe("findTeamNameFromId", () => {
  it("should correctly find the team name", () => {
    const teamId = "8799af3f-164e-4a68-a5f0-ebc74dd5539a";
    expect(findTeamNameFromId(teamId, mockState)).toBe("Illustrious Spaniel");
  });

  it("should return empty string when undefined input", () => {
    const teamId = null;
    const state = null;
    expect(findTeamNameFromId(teamId, state)).toBe("");
  });
});
describe("filterTableRowName", () => {
  it("should filter for the correct team names", () => {
    let res = filterTableRowName(mockState.teamInfo, "Lyrical Trout");
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe("Lyrical Trout");
  });
  it("should filter for the user correct names", () => {
    let res = filterTableRowName(mockState.userInfo, "vEn");
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe("Steven");
  });
  it("should return empty array on undefined input", () => {
    let res = filterTableRowName(undefined, undefined);
    expect(res).toHaveLength(0);
    expect(res).toMatchObject([]);
  });
});
describe("findUsersFromTeamId", () => {
  it("should filter for the team members for a given team id", () => {
    let teamId = "bdad9afe-63c3-4ff2-ae6b-f1143d92ca15";
    let res = findUsersFromTeamId(mockState.userInfo, teamId);
    expect(res).toHaveLength(5);
  });
  it("should return empty array on undefined input", () => {
    let res = findUsersFromTeamId(undefined, undefined);
    expect(res).toHaveLength(0);
    expect(res).toMatchObject([]);
  });
});
