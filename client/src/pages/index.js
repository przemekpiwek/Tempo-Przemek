import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamsOverview from "./TeamsOverview";
import UserDetails from "./UserDetails";
import { TeamsUsersDataContext } from "../context";

const ROUTES = {
  TEAMS_OVERVIEW: "/",
  USERS_DETAILS: "/users",
};

export default function Pages() {
  const endpoint = "/api/teamsDetailsData";
  const options = {
    method: "GET",
    Accept: "application/json",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [state, dispatch] = useContext(TeamsUsersDataContext);

  useEffect(() => {
    const fetchTeamsAndUserData = async () => {
      const response = await fetch(endpoint, options);
      const data = await response.json();

      if (data.status === 200) {
        dispatch({
          type: "ADD_TEAM_DATA",
          payload: data.payload,
        });
      } else {
        console.error(`${data.status}: ${data.payload}`);
      }
    };

    fetchTeamsAndUserData();
  }, []);

  return (
    <Router>
      <Route path={ROUTES.TEAMS_OVERVIEW} component={TeamsOverview} />
      <Route path={ROUTES.USERS_DETAILS} component={UserDetails} />
    </Router>
  );
}
