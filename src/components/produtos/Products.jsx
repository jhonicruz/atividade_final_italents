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
    <main className="grid grid-cols-2 p-3 pt-[60px] pb-[100px] gap-5">
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
