import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductInfos = ({ children, ...props }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center h-auto w-full gap-2 p-2 pt-0 rounded-b',
        props.className,
      )}
    >
      {children}
    </div>
  );
};
