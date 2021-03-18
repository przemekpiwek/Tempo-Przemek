const fetch = require("node-fetch");
const { HOSTNAME } = require("../utils/utils");

const USERS_REST_ENDPOINT = `${HOSTNAME}/users/`;

const userDetailsDataHandler = async (req, res) => {
  try {
    const options = {
      method: "GET",
      "content-type": "application/json",
    };
    const response = await fetch(USERS_REST_ENDPOINT, options);
    const jsonUsersData = await response.json();
    res.send({ status: 200, payload: jsonUsersData });
  } catch (error) {
    res.send({ status: 500, payload: error });
  }
  return;
};

module.exports = { userDetailsDataHandler };
