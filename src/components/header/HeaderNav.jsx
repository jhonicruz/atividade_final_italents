import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MenuMobile from '../menuMobile/MenuMobile';
import MenuDesktop from '../menuDesktop/MenuDesktop';
import { Link } from 'react-router-dom';

export const HeaderNav = ({ media, trigger: Trigger }) => {
  const isDesktop = useMediaQuery(media);
  return (
    <nav>
      {isDesktop ? (
        <MenuDesktop>
          <li>
            <Link to="/" content="Produtos" />
          </li>
          <li>
            <Link to="/teste" content="Cadastrar Produto" />
          </li>
        </MenuDesktop>
      ) : (
        <MenuMobile trigger={Trigger} />
      )}
    </nav>
  );
};
