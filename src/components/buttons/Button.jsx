import React from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const Button = ({ type = 'button', content, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      className={twJoin(
        'flex items-center justify-center px-3 py-1 bg-p1 w-full uppercase font-poppinsSemibold rounded-sm cursor-pointer text-zinc-900',
        rest.className,
      )}
    >
      {content}
    </button>
  );
};

export default Button;
