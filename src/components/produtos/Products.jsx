import Product from './produto/Product';
import { useGetProducts } from '../../hooks/queries/useGetProducts';

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProducts();

  if (isLoading) return <p className="p-4 text-white">Carregando Produtos...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <main className="grid grid-cols-2 p-3 pt-[60px] pb-[100px] gap-5 max-xs:grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
      {products &&
        products.map(({ id, nome, descricao, precoAntes, precoDepois, comentarios, imagem }) => {
          return (
            <Product
              image={imagem}
              productId={id}
              key={id}
              title={nome}
              description={descricao}
              priceBefore={precoAntes}
              priceNow={precoDepois}
              rate={comentarios}
            />
          );
        })}
    </main>
  );
};

export default Products;
