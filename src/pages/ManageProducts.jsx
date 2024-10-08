import Form from '../components/form/Form';
import Title from '../components/title/Title';
import Divisor from '../components/footer/Divisor';
import ItemProduto from '../components/produtos/itemProduto/ItemProduto';
import { useGetProducts } from '../hooks/queries/useGetProducts';
import Head from '../components/head/Head';

const ManageProducts = () => {
  const { data: products } = useGetProducts();
  return (
    <div className="pt-[150px] pb-[100px] text-white w-full flex flex-col p-4 gap-10 max-w-[600px] m-auto">
      <Head title="Fiction | Gerenciar Produtos" description="Gerencie seus produtos" />
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
