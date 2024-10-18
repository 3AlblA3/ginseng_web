import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import AgencePresentation from './pages/agence/AgencePresentation';
import Temoignages from './pages/agence/temoignages';
import Tarifs from './pages/agence/tarifs';
import Contact from './pages/Contact';
import AnalyseExistant from './pages/accompagnement/analyseExistant';
import AccompagnementTechnique from './pages/accompagnement/accompagnementTechnique';
import AccompagnementOperationnel from './pages/accompagnement/accompagnementOperationnel';
import AccompagnementUX from './pages/accompagnement/accompagnementUX_UI';
import AccompagnementPostProjet from './pages/accompagnement/accompagnementPostProjet';
import CadrageProjet from './pages/accompagnement/cadrageProjet';
import CahierCharges from './pages/accompagnement/cahierCharges';
import DefinitonCible from './pages/accompagnement/definitionCible';
import SupportEquipe from './pages/accompagnement/supportEquipe';
import AuditConcurrentiel from './pages/expertises/auditConcurrentiel';
import AuditErgonomique from './pages/expertises/auditErgonomique';
import AuditTechnique from './pages/expertises/auditTechnique';
import AuditReferencement from './pages/expertises/auditReferencement';
import GabaritsErgonomiques from './pages/expertises/gabaritsErgonomiques';
import GestionProjet from './pages/expertises/gestionProjet';
import RecueilBesoin from './pages/expertises/recueilBesoin';
import CreationPersonae from './pages/expertises/creationPersonae';
import TestUtilisateur from './pages/expertises/testUtilisateur';
import AnimationWrapper from './utilities/AnimationWrapper';

import './styles/App.css'

function App() {

  return (
    <AnimationWrapper>
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
        <Route path="/accompagnement_supportEquipe" element={<SupportEquipe />} />
        <Route path="/accompagnement_accompagnementUX" element={<AccompagnementUX  />} />
        <Route path="/accompagnement_accompagnementOperationnel" element={<AccompagnementOperationnel  />} />
        <Route path="/accompagnement_accompagnementPostProjet" element={<AccompagnementPostProjet  />} />
        <Route path="/expertise_auditErgonomique" element={<AuditErgonomique  />} />
        <Route path="/expertise_auditConcurrentiel" element={<AuditConcurrentiel  />} />
        <Route path="/expertise_auditTechnique" element={<AuditTechnique  />} />
        <Route path="/expertise_auditReferencement" element={<AuditReferencement  />} />
        <Route path="/expertise_gabaritsErgonomiques" element={<GabaritsErgonomiques  />} />
        <Route path="/expertise_gestionProjet" element={<GestionProjet  />} />
        <Route path="/expertise_recueilBesoin" element={<RecueilBesoin  />} />
        <Route path="/expertise_creationPersonae" element={<CreationPersonae  />} />
        <Route path="/expertise_testUtilisateur" element={<TestUtilisateur  />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </main>
    <Footer />
    </AnimationWrapper>
  );
}

export default App;

