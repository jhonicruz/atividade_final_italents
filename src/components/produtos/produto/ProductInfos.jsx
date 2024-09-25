import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ProductInfos = ({ children, ...props }) => {
  return (
    <div className={twMerge('flex flex-col items-center  gap-4 p-2 rounded-b', props.className)}>
      {children}
    </div>
  );
};
