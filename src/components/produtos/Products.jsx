import React from 'react';
import Product from './produto/Product';

const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fecthData() {
      const response = await fetch('http://localhost:3000/produtos');
      if (!response.ok) throw new Error('Erro ao buscar dados');
      const data = await response.json();
      setProducts(data);
    }
    fecthData();
  }, []);

  return (
    <main className=" flex flex-wrap justify-center w-full h-full p-3 pt-[60px] gap-5 mx-auto">
      {products &&
        products.map(({ id, nome, descricao, precoAntes, precoDepois, comentarios }) => {
          return (
            <Product
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
