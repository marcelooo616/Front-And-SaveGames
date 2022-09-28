import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Navbar from './componentes/estaticos/navbar/Navbar';
import ListaGenero from './componentes/genero/listagenero/ListaGenero';
import ListaProdutos from './componentes/produtos/listaprodutos/ListaProdutos';

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
                <Route path="/genero" element={ <ListaGenero /> } />
                <Route path="/produtos" element={ <ListaProdutos/> } />               
              </Routes>
            </div>
          <Footer />
        </Router>   
  );
}

export default App;
