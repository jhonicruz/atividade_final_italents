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

const MenuMobile = ({ trigger: Trigger, children }) => {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger className="text-white">{Trigger}</DrawerTrigger>
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
      {/*  <Drawer direction="right">
        <DrawerTrigger className="text-white" aria-label="Open menu">
          <MenuIcon />
        </DrawerTrigger>

        <DrawerContent aria-labelledby="drawer-title" className="bg-zinc-900">
          <DrawerHeader>
            <DrawerTitle id="drawer-title">Menu</DrawerTitle>
          </DrawerHeader>
          <nav>
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a
                  href="/produtos"
                  className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="/cadastrar-produtos"
                  className="text-white  hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cadastrar Produtos
                </a>
              </li>
            </ul>
          </nav>
        </DrawerContent>
      </Drawer> */}
    </div>
  );
};

export default MenuMobile;
