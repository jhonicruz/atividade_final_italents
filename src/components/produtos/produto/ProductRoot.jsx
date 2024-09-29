/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const ProductRoot = ({ children, productId, ...rest }) => {
  return (
    <Link
      to={`/produto/${productId}`}
      className={twMerge(
        'flex flex-col items-center gap-2 h-auto w-full bg-n2 rounded-b grow-0',
        rest.className,
      )}
    >
      {children}
    </Link>
  );
};
