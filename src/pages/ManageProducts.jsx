import Form from '../components/form/Form';
import Title from '../components/title/Title';
import Divisor from '../components/footer/Divisor';
import ItemProduto from '../components/produtos/itemProduto/ItemProduto';
import { useGetProducts } from '../hooks/queries/useGetProducts';

const ManageProducts = () => {
  const { data: products } = useGetProducts();
  return (
    <div className="pt-[150px] pb-[100px] text-white w-full flex flex-col p-4 gap-10 max-w-[800px] m-auto">
      <Title content="Cadastrar Produto" />
      <Form />
      <Divisor className="bg-custom2" />
      <Title content="Editar Produtos respo" />

      {products &&
        products.map(({ nome, id }) => {
          return <ItemProduto key={id} nome={nome} id={id} />;
        })}
    </div>
  );
};

export default ManageProducts;
