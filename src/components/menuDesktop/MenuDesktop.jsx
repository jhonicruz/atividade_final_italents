import React from 'react';

const MenuDesktop = ({ children }) => {
  return (
    <ul
      role="menu"
      className=" text-white flex items-center gap-4 font-poppinsSemibold text-[16px] uppercase"
    >
      {children}
    </ul>
  );
};

export default MenuDesktop;
