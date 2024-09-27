import React from 'react';
import { twMerge } from 'tailwind-merge';

const Divisor = ({ ...rest }) => {
  return <div className={twMerge('w-full h-px bg-custom', rest.className)}></div>;
};

export default Divisor;
