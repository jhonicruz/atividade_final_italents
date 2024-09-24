/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useMediaQuery } from '@uidotdev/usehooks';

import imageProduct from './assets/image_product.png';
import Star from './assets/star.svg?react';
import Slides from './componentes/Slides';
import Header from './componentes/Header';

function App() {
  // const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  // const isMediumDevice = useMediaQuery(
  //   'only screen and (min-width : 769px) and (max-width : 992px)',
  // );
  // const isLargeDevice = useMediaQuery(
  //   'only screen and (min-width : 993px) and (max-width : 1200px)',
  // );
  // const isExtraLargeDevice = useMediaQuery('only screen and (min-width : 1201px)');

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Slides />

          {/* Cards */}

          <main className=" flex flex-wrap justify-center w-full h-full p-3 pt-[60px] gap-5 mx-auto">
            {/* card 1 */}
            <a
              onClick={() => console.log('clicou')}
              className="flex flex-col items-center gap-2 basis-[47%]  bg-n2 rounded-b"
            >
              {/* image */}
              <div className=" bg-orange-300 w-full rounded-t overflow-hidden">
                <img src={imageProduct} alt="" className="w-full object-cover" />
              </div>

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
                  <h4 className="font-poppinsSemibold text-[18px] -mt-3 text-white">
                    Notebook Asus
                  </h4>
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
            {/* card 2 */}
            <a className="flex flex-col items-center gap-2 basis-[47%]  bg-n2 rounded-b">
              {/* image */}
              <div className=" bg-orange-300 w-full rounded-t overflow-hidden">
                <img src={imageProduct} alt="" className="w-full object-cover" />
              </div>

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
                  <h4 className="font-poppinsSemibold text-[18px] -mt-3 text-white">
                    Notebook Asus
                  </h4>
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
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
