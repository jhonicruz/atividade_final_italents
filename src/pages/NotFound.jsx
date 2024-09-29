import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../components/head/Head';
import Lost from '../assets/svgs/lost.svg?react';

const NotFound = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = React.useState(5);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);
  return (
    <div className="flex flex-col items-center w-full pt-[120px] justify-center gap-24">
      <Head title="Fiction | 404" description="Página não encontrada" />
      <h2 className=" text-center text-white text-2xl">
        Ops, não encontramos nada por aqui.{' '}
        <span className="block">Você será redirecionado em {timeLeft} segundos.</span>
      </h2>

      <Lost className=" w-full max-h-[300px]" />
    </div>
  );
};

export default NotFound;
