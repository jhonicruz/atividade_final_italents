import React from 'react';

export const ProductRoot = ({ children }) => {
  return (
    <a href="#" className="flex flex-col items-center gap-2 basis-[47%] w-full bg-n2 rounded-b">
      {children}
    </a>
  );
};
