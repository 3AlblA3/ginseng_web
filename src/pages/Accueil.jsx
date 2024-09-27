import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/accueil.css'

function Accueil() {

  return (
    <>
      <section className='accueil__section'>
        <div className='accueil__section__background'>
          <div className='accueil__section__background__title'>
            <div className='accueil__section__background__title__container'>
              <h4>Pour répondre à tous vos objectifs</h4>
              <h2>Ginseng Web vous accompagne dans vos projets digitaux</h2>
              <Link to="/methodologie" className="accueil__section__background__title__link">Notre méthodologie</Link>
            </div>
          </div>
          <div className='accueil__section__background__description'>
            <div className='accueil__section__background__description__container'>
              <h3>
              Nous sommes une agence web à taille humaine, spécialisée dans l’accompagnement digital. Nous vous aidons à imaginer (amoe refonte de site) et réaliser (amoa) votre projet web.
              </h3>
              <Link to="/" className="accueil__section__background__descripton__link">Pourquoi nous choisir?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
