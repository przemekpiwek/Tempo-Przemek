import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamsOverview from "./TeamsOverview";
import UserDetails from "./UserDetails";
import { TeamsUsersDataContextProvider } from "../context";

const ROUTES = {
  TEAMS_OVERVIEW: "/",
  USERS_DETAILS: "/users",
};

//fetch initial data, set to provider

export default function Pages() {
  const endpoint = "/api/teamsDetailsData";
  const options = {
    method: "GET",
    Accept: "application/json",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchTeamsAndUserData = async () => {
      const response = await fetch(endpoint, options);
      const data = await response.json();

      if (data.status === 200) {
      }
    };

    //if status 200, save to provider

    fetchTeamsAndUserData();
  });

  return (
    <TeamsUsersDataContextProvider>
      <Router>
        <Route path={ROUTES.TEAMS_OVERVIEW} component={TeamsOverview} />
        <Route path={ROUTES.USERS_DETAILS} component={UserDetails} />
      </Router>
    </TeamsUsersDataContextProvider>
  );
}
