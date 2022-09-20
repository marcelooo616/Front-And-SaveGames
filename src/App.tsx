import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Navbar from './componentes/estaticos/navbar/Navbar';
import ListaProdutos from './componentes/genero/produtos/listaprodutos/ListaProduto';
import ListaGenero from './componentes/genero/listagenero/ListaGenero';
import HomeProduto from './componentes/homeprodutos/HomeProduto';
import HomeProdutos from './componentes/homeprodutos/HomeProduto';




function App() {
  return (
    
    

      

      <Router>
         <Navbar/>
          
            <div>
              <Routes> 
                <Route path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/cadastroUsuario" element={ <CadastroUsuario /> } />
                <Route path="/listaprodutos" element={ <ListaProdutos /> } />
                <Route path="/genero" element={ <ListaGenero /> } />
                <Route path="/produtos" element={ <HomeProdutos/> } />
                
              </Routes>
            </div>
          <Footer />
        </Router>

    
  );
}

export default App;
