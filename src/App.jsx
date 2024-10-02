import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import AgencePresentation from './pages/AgencePresentation';
import Temoignages from './pages/temoignages';
import Tarifs from './pages/tarifs';

import './styles/App.css'

function App() {
  return (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/agence_presentation" element={<AgencePresentation />} />
        <Route path="/agence_temoignages" element={<Temoignages />} />
        <Route path="/agence_tarifs" element={<Tarifs />} />
      </Routes>
    </main>
  
    <Footer />
  </>
  );
}

export default App;

