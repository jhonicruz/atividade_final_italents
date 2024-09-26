import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductRoot = ({ children, ...rest }) => {
  return (
    <a
      href="#"
      className={twMerge(
        'flex flex-col items-center gap-2 basis-[47%] w-full bg-n2 rounded-b grow-0',
        rest.className,
      )}
    >
      {children}
    </a>
  );
};
