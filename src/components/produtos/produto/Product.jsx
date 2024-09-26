import React from 'react';
import { Product } from './index';

const ProductElement = ({ title, description, rate, priceNow, priceBefore, id, productId }) => {
  return (
    <Product.Root key={id} productId={productId}>
      <Product.Image alt="Product" />
      <Product.Infos>
        <Product.Rating rate={rate} />
        <Product.Title title={title} className="h-auto" />
        <Product.Description descripton={description} />
        <Product.PriceContainer>
          <Product.PriceBefore priceBefore={priceBefore} />
          <Product.PriceNow priceNow={priceNow} />
        </Product.PriceContainer>
        <Product.Button />
      </Product.Infos>
    </Product.Root>
  );
};

export default ProductElement;
