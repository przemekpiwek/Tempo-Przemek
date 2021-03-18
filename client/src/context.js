import React, { createContext, useReducer } from "react";

const initialState = {
  currentData: [],
};

const reducer = null;

export const TeamsUsersDataContext = createContext();

export const TeamsUsersDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TeamsUsersDataContext.Provider value={[state, dispatch]}>
      {children}
    </TeamsUsersDataContext.Provider>
  );
};
