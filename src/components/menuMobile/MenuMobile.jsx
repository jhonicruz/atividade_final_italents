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
import { LogIn, LogOut } from 'lucide-react';

const MenuMobile = ({ trigger: Trigger }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const { isLoggedIn, setIsLoggedIn } = React.useContext(LoginContext);

  function handleLogout() {
    localStorage.removeItem('userInfo');
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
          <nav className='className="bg-zinc-900"'>
            <ul className="flex flex-col gap-4 p-4 text-zinc-900">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-white uppercase">
                  Produtos
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link
                    to="/gerenciar-produtos"
                    onClick={handleLinkClick}
                    className="text-white uppercase"
                  >
                    Cadastrar Produtos
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="p-2 px-4 bg-p1 rounded text-zinc-900 flex gap-2 w-[fit-content] uppercase"
                  >
                    <LogIn />
                    Login
                  </Link>
                )}
              </li>

              {isLoggedIn && (
                <li>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className=" px-4 flex gap-2 bg-red-500 p-2 rounded text-zinc-900 w-[fit-content] uppercase"
                  >
                    <LogOut />
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
