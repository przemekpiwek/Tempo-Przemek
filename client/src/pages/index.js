import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamsOverview from "./TeamsOverview";

const ROUTES = {
  TEAMS_OVERVIEW: "/",
};

export default function Pages() {
  return (
    <Router>
      <Route path={ROUTES.TEAMS_OVERVIEW} component={TeamsOverview} />
    </Router>
  );
}
