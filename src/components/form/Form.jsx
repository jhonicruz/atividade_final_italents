import React from 'react';
import InputForm from './InputForm';
import Button from '../buttons/Button';
import { useMutateProduct } from '../../hooks/queries/useMutateProduct';

const Form = () => {
  const [name, setName] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [priceBefore, setPriceBefore] = React.useState('');
  const [priceNow, setPriceNow] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(''); // Estado para armazenar a mensagem de erro
  const { addProductMutation } = useMutateProduct();

  async function handleSubmit(event) {
    event.preventDefault();
    const product = {
      nome: name,
      comentarios: rate,
      descricao: description,
      precoAntes: priceBefore,
      precoDepois: priceNow,
      imagem: 'https://picsum.photos/200/300?random=1',
      avaliacao: 4.8,
    };
    addProductMutation.mutate(product, {
      onSuccess: () => {
        alert('Produto adicionado com sucesso!');
        // Limpar os campos do formulário após a submissão bem-sucedida
        setName('');
        setRate('');
        setDescription('');
        setPriceBefore('');
        setPriceNow('');
      },
      onError: (error) => {
        console.error('Erro ao adicionar produto:', error);
        setErrorMessage('Erro ao adicionar produto. Tente novamente.');
      },
    });
  }

  return (
    <div className="flex flex-col gap-8">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
      </form>
      <Button content="Cadastrar" type="submit" form="meuFormulario" />
    </div>
  );
};

export default Form;
