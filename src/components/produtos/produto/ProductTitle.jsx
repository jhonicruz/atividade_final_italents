import React from 'react';

export const ProductTitle = ({ title }) => {
  return (
    <h4 className="font-poppinsSemibold text-[18px] -mt-3 text-white h-[60px] leading-none text-center flex items-center">
      {title}
    </h4>
  );
};
