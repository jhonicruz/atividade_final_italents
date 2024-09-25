import React from 'react';
import { MenuIcon } from 'lucide-react';
import Brand from '../../assets/brand-mobile.svg?react';
import { Header } from './index';
import { Link } from 'react-router-dom';

const HeaderElement = () => {
  return (
    <Header.Root>
      <Header.Logo route="/">
        <Brand />
      </Header.Logo>
      <Header.Nav media="(min-width : 768px)" trigger={<MenuIcon />}>
        <Link to="/">Home</Link>
      </Header.Nav>
    </Header.Root>
  );
};

export default HeaderElement;
