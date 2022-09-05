import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
    <Router>
        <Navbar/>
        
        <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        </Routes>
        
        </div>

        <Footer/>
        
    </Router>
  );
}

export default App;
