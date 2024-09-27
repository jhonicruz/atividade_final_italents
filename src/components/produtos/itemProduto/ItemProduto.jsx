import React from 'react';
import ItemProdutoButton from './ItemProdutoButton';

const ItemProduto = ({ nome, id }) => {
  async function handleDelete() {
    if (!window.confirm('Deseja realmente deletar este produto?')) return;
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar produto');
    window.location.reload();
  }

  /* * Falta implementar algum modal de confirmação mais bonito
   * FAlta implementar um Hook de FETCH
   */

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
