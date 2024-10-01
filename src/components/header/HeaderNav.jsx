/* eslint-disable react/prop-types */
import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MenuMobile from '../menuMobile/MenuMobile';
import MenuDesktop from '../menuDesktop/MenuDesktop';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../hooks/LoginContext';
import { LogIn, LogOut } from 'lucide-react';

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
              <Link to="/login" className="p-2 bg-p1 rounded text-zinc-900 flex gap-2">
                <LogIn />
                Login
              </Link>
            )}
          </li>
          {isLoggedIn && (
            <li>
              <Link
                to="/"
                onClick={handleLoggout}
                className="flex gap-2 bg-red-500 p-2 rounded text-zinc-900"
              >
                <LogOut />
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
