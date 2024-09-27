import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Link } from 'react-router-dom';

const MenuMobile = ({ trigger: Trigger }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
                <Link to="/gerenciar-produtos" onClick={handleLinkClick}>
                  Gerenciar Produtos
                </Link>
              </li>
              <li>
                <Link to="/login" content="Login" onClick={handleLinkClick} />
              </li>
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
