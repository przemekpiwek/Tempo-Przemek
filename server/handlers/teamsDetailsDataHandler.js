const fetch = require("node-fetch");
const { HOSTNAME } = require("../utils/utils");

const TEAMS_REST_ENDPOINT = `${HOSTNAME}/teams/`;

const teamsDetailsDataHandler = async (req, res) => {
  try {
    const options = {
      method: "GET",
      "content-type": "application/json",
    };
    const response = await fetch(TEAMS_REST_ENDPOINT, options);
    // const jsonTeamsData = await response.json();
    const jsonTeamsData = "hello";
    res.json({ status: 200, payload: jsonTeamsData });
  } catch (error) {
    res.json({ status: 500, payload: error });
  }
};

module.exports = { teamsDetailsDataHandler };
