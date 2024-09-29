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

  function handleLoggout() {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(!isLoggedIn);
  }

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
              <Link to="/" onClick={handleLoggout}>
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
