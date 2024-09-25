import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = React.useState(3);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);
  return (
    <div className="flex items-center justify-center w-full h-screen pt-[60px] bg-red-400">
      <h2 className="bg-white text-center">
        Ops, não encontramos nada por aqui. Você será redirecionado em {timeLeft} segundos.
      </h2>
    </div>
  );
};

export default NotFound;
