import React from 'react';

const Card = () => {
  return (
    <a onClick={() => console.log('clicou')}>
      {/* image */}

      {/* infos */}

      <div className="flex flex-col gap-4 p-2 rounded-b overflow-hidden">
        <div className="flex items-center justify-center gap-1">
          <div className="flex">
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
          </div>
          <span className="text-xs text-zinc-600">(269)</span>
        </div>

        <div className="flex flex-col gap-4 items-center text-center">
          <h4 className="font-poppinsSemibold text-[18px] -mt-3 text-white">Notebook Asus</h4>
          <p className="h-[120px] max-w-[140px] truncate text-wrap text-zinc-400">
            Câmera Frontal - 25 megapixels - 8gb ram - 256Gb Armazenamento
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-poppinsRegular text-xs text-zinc-400">
            De: <span className="line-through">199,00</span>
          </p>
          <p className="font-poppinsSemibold text-white text-[18px]">Por: 159,90</p>
        </div>

        <div className=" py-2">
          <button className="flex items-center justify-center px-3 py-1 bg-p1 w-full uppercase font-poppinsSemibold rounded-sm cursor-pointer">
            Comprar
          </button>
        </div>
      </div>
    </a>
  );
};

export default Card;
