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
import BlogAccueil from './pages/blog/blogAccueil';
import ChoixMots from './pages/blog/choixMots';
import CoutSite from './pages/blog/coutSite';
import TestErgonomie from './pages/blog/testErgonomie';
import SiteCree from './pages/blog/siteCree';
import BonnesPratiques from './pages/blog/bonnesPratiques';
import Linkedin from './pages/blog/linkedin';
import Sensibilisation from './pages/blog/sensibilisation';
import Noel from './pages/blog/noel';
import RelationB2B from './pages/blog/relationb2b';
import './styles/App.css'

function App() {

  return (
    <AnimationWrapper>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/agence/presentation" element={<AgencePresentation />} />
        <Route path="/agence/temoignages" element={<Temoignages />} />
        <Route path="/agence/tarifs" element={<Tarifs />} />
        <Route path="/accompagnement/accompagnementTechnique" element={<AccompagnementTechnique />} />
        <Route path="/accompagnement/analyseExistant" element={<AnalyseExistant />} />
        <Route path="/accompagnement/cadrageProjet" element={<CadrageProjet />} />
        <Route path="/accompagnement/cahierCharges" element={<CahierCharges />} />
        <Route path="/accompagnement/definitionCible" element={<DefinitonCible />} />
        <Route path="/accompagnement/supportEquipe" element={<SupportEquipe />} />
        <Route path="/accompagnement/accompagnementUX" element={<AccompagnementUX  />} />
        <Route path="/accompagnement/accompagnementOperationnel" element={<AccompagnementOperationnel  />} />
        <Route path="/accompagnement/accompagnementPostProjet" element={<AccompagnementPostProjet  />} />
        <Route path="/expertise/auditErgonomique" element={<AuditErgonomique  />} />
        <Route path="/expertise/auditConcurrentiel" element={<AuditConcurrentiel  />} />
        <Route path="/expertise/auditTechnique" element={<AuditTechnique  />} />
        <Route path="/expertise/auditReferencement" element={<AuditReferencement  />} />
        <Route path="/expertise/gabaritsErgonomiques" element={<GabaritsErgonomiques  />} />
        <Route path="/expertise/gestionProjet" element={<GestionProjet  />} />
        <Route path="/expertise/recueilBesoin" element={<RecueilBesoin  />} />
        <Route path="/expertise/creationPersonae" element={<CreationPersonae  />} />
        <Route path="/expertise/testUtilisateur" element={<TestUtilisateur  />} />
        <Route path="/blog" element={<BlogAccueil  />} />
        <Route path="/blog/coutSite" element={<CoutSite  />} />
        <Route path="/blog/choixMots" element={<ChoixMots  />} />
        <Route path="/blog/testErgonomie" element={<TestErgonomie  />} />
        <Route path="/blog/siteCree" element={<SiteCree  />} />
        <Route path="/blog/bonnesPratiques" element={<BonnesPratiques  />} />
        <Route path="/blog/linkedin" element={<Linkedin  />} />
        <Route path="/blog/sensibilisation" element={<Sensibilisation  />} />
        <Route path="/blog/noel" element={<Noel  />} />
        <Route path="/blog/relationB2B" element={<RelationB2B  />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </main>
    <Footer />
    </AnimationWrapper>
  );
}

export default App;

