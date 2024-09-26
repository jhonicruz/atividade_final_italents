import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductTitle = ({ title, ...rest }) => {
  return (
    <h4
      className={twMerge(
        'w-full min-h-[38px] h-auto text-[18px] font-poppinsSemibold text-white leading-none text-center line-clamp-2',
        rest.className,
      )}
    >
      {title}
    </h4>
  );
};
