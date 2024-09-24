/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../../assets/logo_fiction_mobile.svg?react';
const Header = () => {
  return (
    <header className="flex items-center justify-between h-[60px] p-3 bg-n2 fixed top-0 w-full z-10">
      <a href="#">
        <Logo className="w-[66px]" />
      </a>

      <nav>
        <button
          aria-controls="menu"
          aria-expanded="false"
          aria-haspopup="true"
          className="text-white font-poppinsBold"
        >
          MENU
        </button>
        <ul role="menu" className="hidden">
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Cadastrar Produto</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
