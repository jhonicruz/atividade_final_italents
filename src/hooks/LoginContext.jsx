/* eslint-disable react/prop-types */
import React from 'react';

export const LoginContext = React.createContext();

export const LoginStorage = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
  );
};
