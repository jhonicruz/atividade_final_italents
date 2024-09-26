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

  if (!product) return null;
  return (
    <div className="grid grid-cols-1 p-8 pt-[100px]">
      <Product.Root>
        <Product.Image src={product.imagem} />
        <Product.Infos>
          <Product.Rating rate="250" />
          <Product.Title title={product.nome} className="text-3xl" />
          <Product.Description descripton={product.descricao} />
          <Product.PriceBefore priceBefore={product.precoAntes} className="text-[16px] pt-2" />
          <Product.PriceNow priceNow={product.precoDepois} className="text-[22px]" />
          <Product.Button />
        </Product.Infos>
      </Product.Root>
    </div>
  );
};

export default SingleProduct;
