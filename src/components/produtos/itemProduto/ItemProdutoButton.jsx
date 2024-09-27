import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const ItemProdutoButton = ({ content, id, type, ...rest }) => {
  return (
    <Link
      {...rest}
      className={twMerge(
        'col-start-3 bg-p1 text-zinc-900 font-poppinsSemibold rounded mt-4 p-2 text-center',
        rest.className,
      )}
      to={type === 'edit' ? `/gerenciar-produtos/editar/${id}` : /gerenciar-produtos/}
    >
      {content}
    </Link>
  );
};

export default ItemProdutoButton;
