import React from 'react';
import Form from '../components/form/Form';
import Title from '../components/title/Title';
import Divisor from '../components/footer/Divisor';
import ItemProduto from '../components/produtos/itemProduto/ItemProduto';

const ManageProducts = () => {
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
    <div className="pt-[150px] pb-[100px] text-white w-full flex flex-col p-4 gap-10">
      <Title content="Cadastrar Produto" />
      <Form />
      <Divisor className="bg-custom2" />
      <Title content="Editar Produtos" />

      {products &&
        products.map(({ nome, id }) => {
          return <ItemProduto key={id} nome={nome} id={id} />;
        })}
    </div>
  );
};

export default ManageProducts;
