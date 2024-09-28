/* eslint-disable react/prop-types */
import ItemProdutoButton from './ItemProdutoButton';
import { useMutateProduct } from '../../../hooks/queries/useMutateProduct';
import { useQueryClient } from '@tanstack/react-query';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const ItemProduto = ({ nome, id }) => {
  const { deleteProductMutation } = useMutateProduct();
  const queryClient = useQueryClient();
  async function handleDelete() {
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

      {/* Delete Product */}
      <AlertDialog>
        <AlertDialogTrigger className="col-start-4 bg-red-500 text-zinc-900 font-poppinsSemibold rounded mt-4 p-2 text-center uppercase">
          excluir
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja excluir este produto?</AlertDialogTitle>
            <AlertDialogDescription>
              A exclusão do produto é permanente e não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>CANCELAR</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>EXCLUIR</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ItemProduto;
