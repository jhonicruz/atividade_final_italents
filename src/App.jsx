/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cadastro from './pages/Cadastro';
import SingleProduct from './pages/SingleProduct';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="teste" element={<h1>Teste</h1>} />
            <Route path="cadastrar-produtos" element={<Cadastro />} />
            <Route path="/produto/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
