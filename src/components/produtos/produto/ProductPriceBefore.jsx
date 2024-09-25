import React from 'react';

export const ProductPriceBefore = ({ priceBefore }) => {
  return (
    <p className="font-poppinsRegular text-xs text-zinc-400  w-full flex items-center justify-center gap-1">
      De: <span className="line-through">{priceBefore}</span>
    </p>
  );
};
