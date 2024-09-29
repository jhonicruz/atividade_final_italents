import { twMerge } from 'tailwind-merge';

export const ProductImage = ({ image, alt, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'bg-orange-300 w-full rounded-t overflow-hidden md:h-[300px] flex items-center',
        rest.className,
      )}
    >
      <img src={image} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};
