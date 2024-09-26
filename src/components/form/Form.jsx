import React from 'react';
import InputForm from './InputForm';
import Button from '../buttons/Button';

const Form = () => {
  const [name, setName] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [priceBefore, setPriceBefore] = React.useState('');
  const [priceNow, setPriceNow] = React.useState('');

  return (
    <div className="flex flex-col gap-8">
      <form className="grid grid-cols-4 gap-2" id="meuFormulario">
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
