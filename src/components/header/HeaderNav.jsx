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
            {/* <Link to="/" content="Produtos" /> */}
            <Link to="/">Produtos</Link>
          </li>
          <li>
            {/* <Link to="/teste" content="Cadastrar Produto" /> */}

            <Link to="/gerenciar-produtos">Cadastrar Produtos</Link>
          </li>
        </MenuDesktop>
      ) : (
        <MenuMobile trigger={Trigger} />
      )}
    </nav>
  );
};
