import React from 'react';
import Logo from '../../assets/LOGO-FOOTER.svg?react';
import Divisor from './Divisor';
import Title from '../title/Title';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="h-[238px] bg-n2 p-3 flex flex-col items-center w-full py-6 space-y-4">
      <div className="w-full flex flex-col items-center gap-5">
        <Logo />
        <Divisor />
      </div>

      <div className="grid grid-cols-3 w-full gap-2">
        <div className="flex flex-col items-center">
          <Title content="Sua Conta" className="text-white text-[14px]" />
          <ul className="flex flex-col gap-1 items-center text-center">
            <li className="text-[12px] text-zinc-500">Gerenciar Perfil</li>
            <li className="text-[12px] text-zinc-500">Preferências</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <Title content="Institucional" className="text-white text-[14px]" />
          <ul className="flex flex-col gap-1 items-center text-center">
            <li className="text-[12px] text-zinc-500">Sobre a Fiction Store</li>
            <li className="text-[12px] text-zinc-500">Política de Privacidade</li>
            <li className="text-[12px] text-zinc-500">Política de Frete</li>
            <li className="text-[12px] text-zinc-500">Trabalhe Conosco</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <Title content="Nossos Canais" className="text-white text-[14px]" />
          <ul className="flex gap-2">
            <li className="text-[12px] text-zinc-500">
              <FaInstagram size="16px" className="hover:text-emerald-400" />
            </li>
            <li className="text-[12px] text-zinc-500">
              <FaFacebook size="16px" className="hover:text-emerald-400" />
            </li>
            <li className="text-[12px] text-zinc-500">
              <FaTiktok size="16px" className="hover:text-emerald-400" />
            </li>
            <li className="text-[12px] text-zinc-500">
              <FaWhatsapp size="16px" className="hover:text-emerald-400" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
