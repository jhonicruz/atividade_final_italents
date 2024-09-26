import { NavLink } from 'react-router-dom';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductRoot = ({ children, productId, ...rest }) => {
  return (
    <NavLink
      to={`/produto/${productId}`}
      className={twMerge(
        'flex flex-col items-center gap-2 h-auto w-full bg-n2 rounded-b grow-0',
        rest.className,
      )}
    >
      {children}
    </NavLink>
  );
};
