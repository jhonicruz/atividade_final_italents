/* eslint-disable react/prop-types */
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../hooks/LoginContext';

const MenuMobile = ({ trigger: Trigger }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const { isLoggedIn, setIsLoggedIn } = React.useContext(LoginContext);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(!isLoggedIn);
    setIsOpen(false);
  }

  return (
    <div>
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="text-white">{Trigger}</DrawerTrigger>
        <DrawerContent aria-labelledby="drawer-title">
          <DrawerHeader>
            <DrawerTitle id="drawer-title">Menu</DrawerTitle>
          </DrawerHeader>
          <nav>
            <ul className="flex flex-col gap-4 p-4 text-zinc-900">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-zinc-900">
                  Produtos
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link to="/gerenciar-produtos" onClick={handleLinkClick}>
                    Cadastrar Produtos
                  </Link>
                ) : (
                  <Link to="/login" onClick={handleLinkClick}>
                    Login
                  </Link>
                )}
              </li>

              {isLoggedIn && (
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Sair
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <DrawerFooter>
            <DrawerClose>
              <button>x</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuMobile;
