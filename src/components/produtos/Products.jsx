import React from 'react';
import Product from './produto/Product';

const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fecthData() {
      const response = await fetch('http://localhost:3000/produtos');
      if (!response.ok) throw new Error('Erro ao buscar dados');
      const data = await response.json();
      setProducts(data);
    }
    fecthData();
  }, []);

  return (
    <main className=" flex flex-wrap justify-center w-full h-full p-3 pt-[60px] gap-5 mx-auto">
      {products &&
        products.map(({ id, nome, descricao, precoAntes, precoDepois, comentarios }) => {
          return (
            <Product
              key={id}
              title={nome}
              description={descricao}
              priceBefore={precoAntes}
              priceNow={precoDepois}
              rate={comentarios}
            />
          );
        })}

      {/* card 1 */}

      {/* card 2 */}
      {/*   <a className="flex flex-col items-center gap-2 basis-[47%]  bg-n2 rounded-b">
   
        <div className=" bg-orange-300 w-full rounded-t overflow-hidden">
          <img src={imageProduct} alt="" className="w-full object-cover" />
        </div>



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
      </a> */}
    </main>
  );
};

export default Products;
