import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductDescription = ({ descripton, ...rest }) => {
  return (
    <p
      className={twMerge(
        'h-auto min-h-[120px] text-wrap text-zinc-400 flex justify-center text-center p-1 line-clamp-4 w-full',
        rest.className,
      )}
    >
      {descripton}
    </p>
  );
};
