import React from 'react';
import { twMerge } from 'tailwind-merge';

const Title = ({ content, ...rest }) => {
  return (
    <h1 className={twMerge('text-center text-2xl font-poppinsBold', rest.className)}>{content}</h1>
  );
};

export default Title;
