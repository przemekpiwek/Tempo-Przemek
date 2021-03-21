import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TeamsOverviewContainer from "../containers/TeamsOverviewContainer";
import UserDetailsContainer from "../containers/UserDetailsContainer";
import { TeamsUsersDataContext } from "../context";

export const ROUTES = {
  HOME: "/",
  TEAMS_OVERVIEW: "/teams",
  USERS_DETAILS: "/users",
};

export default function Pages() {
  const teamsEndpoint = "/api/teamsDetailsData";
  const usersEndpoint = "/api/userDetailsData";
  const [, dispatch] = useContext(TeamsUsersDataContext);

  useEffect(() => {
    const options = {
      method: "GET",
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchTeamsAndUserData = async () => {
      const endpointArray = [
        { type: "teams", endpoint: teamsEndpoint },
        { type: "users", endpoint: usersEndpoint },
      ];

      const endpointTypeDispatchSwitcher = async (type, payload) => {
        switch (type) {
          case "teams":
            dispatch({
              type: "ADD_TEAM_DATA",
              payload,
            });
            break;
          case "users":
            dispatch({
              type: "ADD_USER_DATA",
              payload,
            });
            break;
          default:
        }
      };
      await Promise.all(
        endpointArray.map(async (endpointBundle) => {
          try {
            const response = await fetch(endpointBundle.endpoint, options);
            if (response.status !== 200) {
              console.error(`${response.status}: ${response.payload}`);
              return;
            }
            const jsonData = await response.json();
            await endpointTypeDispatchSwitcher(
              endpointBundle.type,
              jsonData.payload
            );
            return jsonData;
          } catch (error) {
            console.log({ error });
          }
        })
      );
      dispatch({
        type: "CHANGE_LOADING_STATE",
        payload: false,
      });
    };

    fetchTeamsAndUserData();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Redirect exact from={ROUTES.HOME} to={ROUTES.TEAMS_OVERVIEW} />
        <Route
          path={ROUTES.TEAMS_OVERVIEW}
          component={TeamsOverviewContainer}
        />
        <Route path={ROUTES.USERS_DETAILS} component={UserDetailsContainer} />
      </Switch>
    </Router>
  );
}
