import React from 'react';

export const ProductImage = ({ image, alt }) => {
  return (
    <div className=" bg-orange-300 w-full rounded-t overflow-hidden">
      <img src={image} alt={alt} className="w-full object-cover" />
    </div>
  );
};
