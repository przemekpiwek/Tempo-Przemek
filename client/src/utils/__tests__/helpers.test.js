import { findTeamName } from "../helpers";

describe("findTeamName works correctly", () => {
  it("should correctly find the team name", () => {
    const teamId = "8799af3f-164e-4a68-a5f0-ebc74dd5539a";
    const state = {
      teamInfo: [
        {
          id: "bdad9afe-63c3-4ff2-ae6b-f1143d92ca15",
          name: "Lyrical Trout",
        },
        {
          id: "ea5f68ff-607a-4cc8-a75f-e16acaa3aba5",
          name: "Gigantic Sawfish",
        },
        {
          id: "8799af3f-164e-4a68-a5f0-ebc74dd5539a",
          name: "Illustrious Spaniel",
        },
        {
          id: "c6385c7d-e01a-4561-afa0-7157411c4831",
          name: "Vigorous Salmon",
        },
      ],
    };
    expect(findTeamName(teamId, state)).toBe("Illustrious Spaniel");
  });

  it("should return empty string when undefined input", () => {
    const teamId = null;
    const state = null;
    expect(findTeamName(teamId, state)).toBe("");
  });
});
