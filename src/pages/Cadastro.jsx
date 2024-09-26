import React from 'react';
import Form from '../components/form/Form';
import Title from '../components/title/Title';

const Cadastro = () => {
  return (
    <div className="pt-[150px] text-white h-screen flex flex-col p-4 gap-10">
      <Title content="Cadastrar Produto" />
      <Form />
    </div>
  );
};

export default Cadastro;
