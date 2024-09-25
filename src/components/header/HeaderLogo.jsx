import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLogo = ({ children, route, ...rest }) => {
  return (
    <Link to={route} {...rest}>
      {children}
    </Link>
  );
};
