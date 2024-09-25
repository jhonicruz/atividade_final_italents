import React from 'react';

export const ProductDescription = ({ descripton }) => {
  return (
    <p className="h-[120px] max-w-[140px] text-wrap text-zinc-400 flex justify-center text-center p-1 line-clamp-3">
      {descripton}
    </p>
  );
};
