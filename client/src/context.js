import React, { createContext, useReducer } from "react";

const initialState = {
  teamInfo: [],
  userInfo: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM_DATA":
      return {
        ...state,
        teamInfo: [...action.payload],
      };
    case "ADD_USER_DATA":
      return {
        ...state,
        userInfo: [...action.payload],
      };
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      throw new Error();
  }
};

export const TeamsUsersDataContext = createContext();

export const TeamsUsersDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TeamsUsersDataContext.Provider value={[state, dispatch]}>
      {children}
    </TeamsUsersDataContext.Provider>
  );
};
