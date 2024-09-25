/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../../assets/logo_fiction_mobile.svg?react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ListLinks from './ListLinks';
import MenuMobile from './MenuMobile';
import { Link } from 'react-router-dom';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <header className="flex items-center justify-between h-[60px] p-3 bg-n2 fixed top-0 w-full z-10">
      <Link to="/">
        <Logo className="w-[66px]" />
      </Link>
      <nav>{isDesktop ? <ListLinks /> : <MenuMobile />}</nav>
    </header>
  );
};

export default Header;
