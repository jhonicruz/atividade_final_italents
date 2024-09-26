import React from 'react';
import Star from '../../../assets/star.svg?react';
export const ProductRating = ({ rate }) => {
  return (
    <div className="flex items-center justify-center gap-1 h-[30px] pb-1  ">
      <div className="flex">
        <Star className="w-4 h-4" />
        <Star className="w-4 h-4" />
        <Star className="w-4 h-4" />
        <Star className="w-4 h-4" />
        <Star className="w-4 h-4" />
      </div>
      <span className="text-xs text-zinc-600">({rate})</span>
    </div>
  );
};
