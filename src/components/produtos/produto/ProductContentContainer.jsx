import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductContentContainer = ({ children, ...props }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 items-center text-center w-full line-clamp-3',
        props.className,
      )}
    >
      {children}
    </div>
  );
};
