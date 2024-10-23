import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function Rentree () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h2>Pour la rentrée, exploitez tout le potentiel de votre profil LinkedIn !</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <h5>Dans ce blog, nous allons explorer quelques règles pour optimiser votre profil, comment communiquer sur LinkedIn pour faire connaître votre marque, et enfin, comment Ginseng Web peut vous aider dans toutes les phases de ce processus.</h5>
            <p>La rentrée est souvent synonyme de nouveaux départs, de nouvelles opportunités et de nouvelles ambitions. Pour beaucoup d’entre nous, c’est le moment de mettre à jour notre profil LinkedIn, ce précieux outil de networking qui peut nous aider à décrocher de nouvelles opportunités professionnelles ou à faire connaître notre marque. Dans ce blog, nous allons explorer quelques règles pour optimiser votre profil, comment communiquer sur LinkedIn pour faire connaître votre marque, et enfin, comment Ginseng Web peut vous aider dans toutes les phases de ce processus.</p>
            <h3>Optimisation de votre profil LinkedIn</h3>
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

export default Rentree