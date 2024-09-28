/* eslint-disable react/prop-types */
import ItemProdutoButton from './ItemProdutoButton';
import { useMutateProduct } from '../../../hooks/queries/useMutateProduct';
import { useQueryClient } from '@tanstack/react-query';
const ItemProduto = ({ nome, id }) => {
  const { deleteProductMutation } = useMutateProduct();
  const queryClient = useQueryClient();
  async function handleDelete() {
    if (!window.confirm('Deseja realmente deletar este produto?')) return;
    deleteProductMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['deleteProduct']);
      },
      onError: (error) => {
        console.error('Erro ao deletar produto:', error);
      },
    });
  }

  return (
    <div className="grid grid-cols-4 auto-rows-auto max-w-full gap-1" key={id}>
      <span className="col-span-3 bg-n2 p-2 rounded">NOME</span>
      <span className="col-start-4 text-center bg-n2 p-2 rounded">ID</span>
      <span className="col-span-3 text-wrap border-b p-2">{nome}</span>
      <span className="col-start-4 flex justify-center items-center border-b pt-2 pb-2">{id}</span>
      <ItemProdutoButton content="EDITAR" id={id} type="edit" />
      <ItemProdutoButton
        content="EXCLUIR"
        className="bg-red-600 col-start-4"
        onClick={handleDelete}
        type="delete"
      />
    </div>
  );
};

export default ItemProduto;
