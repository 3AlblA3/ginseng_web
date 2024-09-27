import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import './styles/App.css'

function App() {
  return (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </main>
  
    <Footer />
  </>
  );
}

export default App;

