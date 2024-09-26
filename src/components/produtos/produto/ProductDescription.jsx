import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductDescription = ({ descripton, ...rest }) => {
  return (
    <p
      className={twMerge(
        'h-[120px] max-w-[140px] text-wrap text-zinc-400 flex justify-center text-center p-1 line-clamp-3',
        rest.className,
      )}
    >
      {descripton}
    </p>
  );
};
