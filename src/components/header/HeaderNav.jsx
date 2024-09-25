import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

export const HeaderNav = ({ media, trigger: Trigger, children }) => {
  const isDesktop = useMediaQuery(media);
  return (
    <nav>{isDesktop ? <MenuDesktop /> : <MenuMobile trigger={Trigger}>{children}</MenuMobile>}</nav>
  );
};
