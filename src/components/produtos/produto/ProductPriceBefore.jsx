import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductPriceBefore = ({ priceBefore, ...rest }) => {
  return (
    <p
      className={twMerge(
        'font-poppinsRegular text-xs text-zinc-400  w-full flex items-center justify-center gap-1',
        rest.className,
      )}
    >
      De: <span className="line-through">{priceBefore}</span>
    </p>
  );
};
