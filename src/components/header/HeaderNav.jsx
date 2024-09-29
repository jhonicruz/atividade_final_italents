/* eslint-disable react/prop-types */
import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MenuMobile from '../menuMobile/MenuMobile';
import MenuDesktop from '../menuDesktop/MenuDesktop';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../hooks/LoginContext';
export const HeaderNav = ({ media, trigger: Trigger }) => {
  const isDesktop = useMediaQuery(media);

  const { isLoggedIn, setIsLoggedIn } = React.useContext(LoginContext);

  console.log(isLoggedIn);

  return (
    <nav>
      {isDesktop ? (
        <MenuDesktop>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="/gerenciar-produtos">Cadastrar Produtos</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Sair
              </Link>
            </li>
          )}
        </MenuDesktop>
      ) : (
        <MenuMobile trigger={Trigger} />
      )}
    </nav>
  );
};
