import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductTitle = ({ title, ...rest }) => {
  return (
    <h4
      className={twMerge(
        'font-poppinsSemibold text-[18px] -mt-3 max-w-full text-white max-h-[70px] leading-none text-center flex items-center line-clamp-2 bg-teal-300',
        rest.className,
      )}
    >
      {title}
    </h4>
  );
};
