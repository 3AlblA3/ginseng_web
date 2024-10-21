import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function SiteCree () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h2>Vous avez crée votre site web</h2>
            </div>
        </section>
        <section className='content__block__column'>
          <p>Vous avez créé votre site web, mais avez-vous pensé à toutes les menaces qui pèsent sur votre identité numérique ? Le typosquatting, cette pratique consistant à enregistrer des noms de domaine similaires au vôtre pour détourner votre trafic ou usurper votre identité, est une menace réelle. Imaginez que quelqu'un enregistre votre nom de domaine sans le tiret ou avec une faute d'orthographe. Non seulement vos visiteurs risquent de se perdre, mais vos concurrents pourraient profiter de la situation pour vous nuire. C'est ce qui s'est passé avec France 2 ou Doctrine.  </p>
          <p>L'association de défense des animaux PETA a été victime d'une attaque de typosquatting particulièrement sournoise. Des individus malveillants ont enregistré des noms de domaine très proches de celui de PETA, tels que "Peta.org", pour rediriger les internautes vers des sites promouvant la consommation de viande et de fourrure. Cette usurpation d'identité a porté atteinte à la réputation de l'association et a semé la confusion chez les internautes.</p>
          <p>Pour éviter ces désagréments, Ginseng Web vous recommande de réserver l'ensemble des variantes de votre nom de domaine (.fr, .com, .net, etc.) ainsi que les éventuelles fautes d'orthographe. C'est une assurance tous risques pour votre identité numérique. </p>
     </section>
    <section className='accueil__section__contact'>   
      <div className='accueil__section__contact__container'>
        <h3>Vous avez un projet?</h3>
        <h4>Parlons-en maintenant.</h4>
        <Link to='/contact' className='button__blue'>Planifier un rendez-vous</Link>
      </div>  
    </section>
    </>
    )
}

export default SiteCree