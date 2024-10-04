import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import AgencePresentation from './pages/agence/AgencePresentation';
import Temoignages from './pages/agence/temoignages';
import Tarifs from './pages/agence/tarifs';
import AnalyseExistant from './pages/accompagnement/analyseExistant';
import AccompagnementTechnique from './pages/accompagnement/accompagnementTechnique';
import CadrageProjet from './pages/accompagnement/cadrageProjet';
import CahierCharges from './pages/accompagnement/cahierCharges';
import DefinitonCible from './pages/accompagnement/definitionCible';
import SupportEquipe from './pages/accompagnement/supportEquipe';

import './styles/App.css'

function App() {
  return (
  <>
  <BrowserRouter basename="/ginseng_web">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/agence_presentation" element={<AgencePresentation />} />
        <Route path="/agence_temoignages" element={<Temoignages />} />
        <Route path="/agence_tarifs" element={<Tarifs />} />
        <Route path="/accompagnement_accompagnementTechnique" element={<AccompagnementTechnique />} />
        <Route path="/accompagnement_analyseExistant" element={<AnalyseExistant />} />
        <Route path="/accompagnement_cadrageProjet" element={<CadrageProjet />} />
        <Route path="/accompagnement_cahierCharges" element={<CahierCharges />} />
        <Route path="/accompagnement_definitionCible" element={<DefinitonCible />} />
        <Route path="/accompagnement_supportEquipe" element={<SupportEquipe />} />*

      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  </>
  );
}

export default App;

