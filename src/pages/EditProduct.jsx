/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/queries/useGetProductById';
import InputForm from '../components/form/InputForm';
import { useMutateProduct } from '../hooks/queries/useMutateProduct';
import Button from '../components/buttons/Button';
import Message from '../components/message/Message';
import Title from '../components/title/Title';
import Head from '../components/head/Head';

const EditProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError, error } = useGetProductById(id);
  const { editProductMutation } = useMutateProduct();

  const [name, setName] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [priceBefore, setPriceBefore] = React.useState('');
  const [priceNow, setPriceNow] = React.useState('');
  const [update, setUpdade] = React.useState(false);

  React.useEffect(() => {
    if (product) {
      setName(product.nome);
      setRate(product.comentarios);
      setDescription(product.descricao);
      setPriceBefore(product.precoAntes);
      setPriceNow(product.precoDepois);
    }
  }, [product]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedProduct = {
      id,
      nome: name,
      comentarios: rate,
      descricao: description,
      precoAntes: priceBefore,
      precoDepois: priceNow,
    };

    editProductMutation.mutate(updatedProduct, {
      onSuccess: () => {
        console.log('Produto atualizado com sucesso!');
        setUpdade(true);
        clearForm();
      },
      onError: (error) => {
        console.error('Erro ao atualizar produto:', error);
      },
    });
  }

  function clearForm() {
    setName('');
    setRate('');
    setDescription('');
    setPriceBefore('');
    setPriceNow('');
  }

  if (isLoading) return <p className="pt-[120px] p-4 text-white">Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="pt-[150px] pb-[100px] text-white w-full items-center flex flex-col p-4 gap-10">
      <Head title="Fiction | Editar Produto" description="Editar produto da loja Fiction" />
      <Title content="Editar Produto" />
      {update && <Message content="Produto atualizado com sucesso!" />}

      <form className="grid grid-cols-4 gap-2" id="meuFormulario" onSubmit={handleSubmit}>
        <InputForm
          name="nome-produto"
          label="Nome do Produto"
          id="nome"
          value={name}
          setValue={setName}
          className="col-span-3"
        />

        <InputForm
          label="Avaliações"
          name="avalicacoes"
          id="rate"
          value={rate}
          setValue={setRate}
          className="col-start-4"
        />

        <div className="col-span-full flex flex-col gap-1">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            rows="3"
            className="rounded p-1 outline-emerald-500 text-zinc-800"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>

        <InputForm
          name="precoBefore"
          label="Preço sem Desconto"
          id="priceBefore"
          value={priceBefore}
          setValue={setPriceBefore}
          className="col-span-2"
        />

        <InputForm
          name="precoNow"
          label="Preço com Desconto"
          id="priceNow"
          value={priceNow}
          setValue={setPriceNow}
          className="col-span-2"
        />
        <Button
          className="col-span-full mt-6"
          content="EDITAR"
          type="submit"
          form="meuFormulario"
        />
      </form>
    </div>
  );
};

export default EditProduct;
