import { Product } from '../components/produtos/produto';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/queries/useGetProductById';

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useGetProductById(id);

  console.log(product);
  if (isLoading) return <p className="pt-[120px] p-4 text-white">Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="grid grid-cols-1 p-8 pt-[100px]">
      <Product.Root>
        <Product.Image image={product.imagem} alt={id} />
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
