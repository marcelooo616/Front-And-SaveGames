import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Navbar2 from './componentes/estaticos/navbar/Navbar2';


function App() {
  return (
    
    

      

      <Router>
          <Navbar />
          
            <div>
              <Routes> 
                <Route path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/cadastroUsuario" element={ <CadastroUsuario /> } />
                
              </Routes>
            </div>
          <Footer />
        </Router>

    
  );
}

export default App;
