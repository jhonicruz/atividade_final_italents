import React from 'react';
import Title from '../components/title/Title';
import InputForm from '../components/form/InputForm';
import Button from '../components/buttons/Button';
import { LoginContext } from '../hooks/LoginContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const { setIsLoggedIn, isLoggedIn } = React.useContext(LoginContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name && email) {
      setIsLoggedIn(!isLoggedIn);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      navigate('/gerenciar-produtos');
    }
  }

  return (
    <div className="pt-[200px] pb-[100px] text-white min-h-login w-full flex flex-col p-4 gap-10">
      <Title content="Login" />

      <form className="grid grid-cols-4 gap-2 w-full" id="meuFormulario" onSubmit={handleSubmit}>
        <InputForm
          name="nome"
          label="Nome"
          id="nome"
          value={name}
          setValue={setName}
          className="col-span-full"
        />
        <InputForm
          type="email"
          name="email"
          label="Email"
          id="email"
          value={email}
          setValue={setEmail}
          className="col-span-full"
        />
        <Button
          content="Cadastrar"
          type="submit"
          form="meuFormulario"
          className="w-full flex col-span-full mt-6"
        />
      </form>
    </div>
  );
};

export default Login;
