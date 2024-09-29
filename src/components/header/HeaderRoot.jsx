/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export const HeaderRoot = ({ children }) => {
  return (
    <header className="flex items-center justify-between h-[60px] p-3 bg-n2 fixed top-0 w-full max-w-[1500px] z-10 ">
      {children}
    </header>
  );
};
