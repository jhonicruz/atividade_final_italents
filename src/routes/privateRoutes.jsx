/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../hooks/LoginContext';

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = React.useContext(LoginContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
