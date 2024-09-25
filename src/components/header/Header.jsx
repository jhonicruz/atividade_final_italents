import React from 'react';
import { MenuIcon } from 'lucide-react';
import Brand from '../../assets/brand-mobile.svg?react';
import { Header } from './index';

const HeaderElement = () => {
  return (
    <Header.Root>
      <Header.Logo route="/">
        <Brand />
      </Header.Logo>
      <Header.Nav media="(min-width : 768px)" trigger={<MenuIcon />} />
    </Header.Root>
  );
};

export default HeaderElement;
