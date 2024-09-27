import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/accueil.css'
import AutoplayCarousel from '../components/AutoplayCarousel';

function Accueil() {

  return (
    <>
      <section>
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
      <section>
        <div className='accueil__section__confiance'>
          <h4>Nos différents clients</h4>
          <h3>Ils nous font confiance...</h3>
          <div className='accueil__section__confiance__carousel'>
            <AutoplayCarousel />
          </div>
        </div>
      </section>
      <section className='accueil__section__accompagnement'>
        <div className='accueil__section__accompagnement__container__white'>
          <h4>Avant le projet (AMOE)</h4>
          <h3>On vous aide à définir votre besoin</h3>
          <p>Pour rédiger un cahier des charges d’une refonte web (ou autre projet) plusieurs étapes d’échanges entre vous et nous sont nécessaires.
          </p>
          <div className='accueil__section__accompagnement__container__white__row'>
            <Link to='/projet' className='accueil__section__accompagnement__container__white__row__link__blue'>Vous avez un projet</Link>
            <Link to='/methodologie' className='accueil__section__accompagnement__container__white__row__link__white'>Voir notre méthodologie</Link>
          </div>
          <div className='accueil__section__accompagnement__container__white__bubble'>
            <p>Des questions ? Appelez-nous au 01 86 52 11 06 ou contactez-nous via le formulaire !</p>
          </div>
        </div>
        <div className='accueil__section__accompagnement__container__black'>
          <Link to='/analyse' className='accueil__section__accompagnement__container__black__link'>
            <h3>Analyse de l'existant</h3>
            <p>Recenser les fonctionnalités et les enjeux techniques</p>
          </Link>
          <Link to='/accompagnement' className='accueil__section__accompagnement__container__black__link'>
            <h3>Accompagnement technique</h3>
            <p>Initier les bases du cahier des charges fonctionnel</p>
          </Link>
          <Link to='/' className='accueil__section__accompagnement__container__black__link'>
            <h3>Cadrage du projet</h3>
            <p>De l'arborescence du site internet à la formation des utilisateurs</p>
          </Link>
          <Link to='/' className='accueil__section__accompagnement__container__black__link'>
            <h3>Rédaction cahier des charges (CCTP) et lancement de l'appel d'offres</h3>
            <p>Etablir le document clef de votre appel d'offres</p>
          </Link>
        </div>
        <div className='accueil__section__accompagnement__container__black'>
          <Link to='/projet' className='accueil__section__accompagnement__container__black__link'>
            <h3>Support de l'équipe projet</h3>
            <p>Accompagnement durant toutes les phases de réalisation</p>
          </Link>
          <Link to='/accompagnement' className='accueil__section__accompagnement__container__black__link'>
            <h3>Accompagnement UX-UI</h3>
            <p>Matérialiser les parcours utilisateurs</p>
          </Link>
          <Link to='/' className='accueil__section__accompagnement__container__black__link'>
            <h3>Accompagnement opérationnel</h3>
            <p>Du développement du site web aux tests</p>
          </Link>
          <Link to='/' className='accueil__section__accompagnement__container__black__link'>
            <h3>Accompagnement TMA</h3>
            <p>Etre présent durant la maintenance de votre site internet</p>
          </Link>
        </div>
        <div className='accueil__section__accompagnement__container__white'>
          <h4>Pendant le projet (AMOA)</h4>
          <h3>On vous accompagne tout au long du projet et même après</h3>
          <p>Nous serons présents sur l’ensemble des réunions pour vous apporter nos conseils d’expert et veiller au respect du cahier des charges web ou CCTP
          </p>
          <div className='accueil__section__accompagnement__container__white__row'>
            <Link to='/projet' className='accueil__section__accompagnement__container__white__row__link__blue'>Vous avez un projet</Link>
            <Link to='/methodologie' className='accueil__section__accompagnement__container__white__row__link__white'>Voir notre méthodologie</Link>
          </div>
          <div className='accueil__section__accompagnement__container__white__bubble'>
            <p>Des questions ? Appelez-nous au 01 86 52 11 06 ou contactez-nous via le formulaire !</p>
          </div>
        </div>
      </section>
      <section className='accueil__section__casClient'>
        <h3>Découvrez nos cas clients</h3>
        <div className='accueil__section__casClient__menu'>
          <h3>Etat et organismes publics</h3>
          <h3>Fédérations ou interprofession</h3>
          <h3>Edition</h3>
        </div>
        <div className='accueil__section__casClient__container'>
          <div className='accueil__section__casClient__container__img'></div>
          <div  className='accueil__section__casClient__container__text'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod beatae nihil voluptatum debitis cupiditate magnam exercitationem distinctio assumenda placeat ut dolores illo est soluta vero vitae, at eveniet illum.</p>
            <Link to='/cas' className='accueil__section__casClient__container__text__link'>Voir le cas client</Link>
          </div>
        </div>
      </section>
      <section className='accueil__section__blog'> 
        <div className='accueil__section__blog__header'>
          <h2>Découvrez nos articles de blog</h2>
          <Link to='/blog' className='accueil__section__blog__header__link'>En lire d'avantage</Link>
        </div>
        <div className='accueil__section__blog__content'>
          <div className='accueil__section__blog__content__container'>
            <div className='accueil__section__blog__content__container__text'>
              <p>Questions sur le web</p>
              <h3>Refonte de site web: pourquoi faire un cahier des charges?</h3>
            </div>
          </div>
        </div>
            
      </section >
      <section className='accueil__section__contact'>   
        <div className='accueil__section__contact__container'>
          <h3>Les beaux projets commencents toujours par un premier échange</h3>
          <Link to='/contact' className='accueil__section__contact__container__link'>Nous contacter</Link>
        </div>  
      </section >
    </>
  );
}

export default Accueil;
