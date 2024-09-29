/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ManageProducts from './pages/ManageProducts';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';
import Login from './pages/Login';
import PrivateRoutes from './routes/privateRoutes';
import { LoginStorage } from './hooks/LoginContext';

function App() {
  return (
    <>
      <LoginStorage>
        <div className="max-w-[1500px] m-auto">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="teste" element={<h1>Teste</h1>} />
              <Route
                path="gerenciar-produtos"
                element={
                  <PrivateRoutes>
                    <ManageProducts />
                  </PrivateRoutes>
                }
              />
              <Route
                path="gerenciar-produtos/editar/:id"
                element={
                  <PrivateRoutes>
                    <EditProduct />
                  </PrivateRoutes>
                }
              />
              <Route path="produto/:id" element={<SingleProduct />} />
              <Route path="*" element={<NotFound />} />
              <Route path="login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </LoginStorage>
    </>
  );
}

export default App;
