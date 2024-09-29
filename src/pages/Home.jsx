import Slides from '../components/slides/Slides';
import Products from '../components/produtos/Products';
import Head from '../components/head/Head';

const Home = () => {
  return (
    <>
      <Head title="Fiction | Home" description="Conheça nossos produtos" />
      <Slides />
      <Products />
    </>
  );
};

export default Home;
