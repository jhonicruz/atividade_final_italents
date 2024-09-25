import React from 'react';
import imageProduct from '../../../assets/image_product.png';
export const ProductImage = ({ alt }) => {
  return (
    <div className=" bg-orange-300 w-full rounded-t overflow-hidden">
      <img src={imageProduct} alt={alt} className="w-full object-cover" />
    </div>
  );
};
