import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductPriceNow = ({ priceNow, ...rest }) => {
  return (
    <p className={twMerge('font-poppinsSemibold text-white text-[18px]', rest.className)}>
      Por: {priceNow}
    </p>
  );
};
