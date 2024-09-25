import React from 'react';
import Link from './Link';

const MenuDesktop = () => {
  return (
    <ul
      role="menu"
      className=" text-white flex items-center gap-4 font-poppinsSemibold text-[16px] uppercase"
    >
      <li>
        <Link url="#" content="Produtos" />
      </li>
      <li>
        <Link url="#" content="Cadastrar Produto" />
      </li>
      <li>
        <Link url="#" content="Login" />
      </li>
    </ul>
  );
};

export default MenuDesktop;
