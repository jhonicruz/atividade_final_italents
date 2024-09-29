/* eslint-disable react/prop-types */
export const ProductImage = ({ image, alt }) => {
  return (
    <div className=" bg-orange-300 w-full rounded-t overflow-hidden md:h-[300px] flex items-center">
      <img src={image} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};
