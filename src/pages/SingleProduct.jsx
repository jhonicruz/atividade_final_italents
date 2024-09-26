import React from 'react';
import { Product } from '../components/produtos/produto';

const SingleProduct = () => {
  return (
    <div className="p-7 pt-[100px] h-full w-full flex justify-center items-center">
      <Product.Root className="basis-full  bg-blue-600 h-auto">
        <Product.Image src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b" />
        <Product.Infos className="gap-1 h-auto">
          <Product.Rating rate="250" />
          <Product.Title
            title=" asdasdasdasd asdasdasdSamsung Galaxy S8"
            className="text-3xl h-auto bg-teal-300"
          />
          <Product.Description
            descripton="SmartphUASHDUAS ASUDHAUSDHasdasdasudhausdhausdadasdasdasd AUSHDUAHSD UAHSDUHAUSDH UAHSUHA Sone Pica1"
            className="max-w-full bg-red-400 h-auto"
          />
          <Product.PriceBefore priceBefore="259" className="text-[16px] pt-2" />
          <Product.PriceNow priceNow="200" className="text-[22px]" />
          <Product.Button />
        </Product.Infos>
      </Product.Root>
    </div>
  );
};

export default SingleProduct;
