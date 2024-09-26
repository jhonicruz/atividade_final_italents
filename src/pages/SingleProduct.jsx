import React from 'react';
import { Product } from '../components/produtos/produto';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams(); // Pegue o productId da URL

  console.log(id);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`);
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  console.log(product);

  if (!product) return null;
  return (
    <div className="grid grid-cols-1 p-8 pt-[100px]">
      <Product.Root className="bg-blue-600">
        <Product.Image src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b" />
        <Product.Infos>
          <Product.Rating rate="250" />
          <Product.Title
            title=" asdasdasdasd asdasdasasdasdasdasdasddasdasdasdasdasdasdSamsung Galaxy S8"
            className="text-3xl h-auto bg-teal-300"
          />
          <Product.Description
            descripton="SmartphUASHDUAS ASUDHAUSDHasdasdasudhausdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshausdadasdasdasd AUSHDUAHSD UAHSDUHAUSDH UAHSUHA Sone Pica1"
            className="bg-red-400 w-full"
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
