import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function BlogAccueil () {

    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Le blog</h4>
                <h2>Pour comprendre le web</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <Link to="/blog/coutSite" className='blogLink'>
                <h3> Combien coûte vraiment un site internet en 2023 ? Un budget sur mesure pour vos projets web</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/choixMots" className='blogLink'>
                <h3>Le choix des mots dans un menu : la clé d'une expérience utilisateur réussie </h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/testErgonomie" className='blogLink'>
                <h3>Tests utilisateurs pour améliorer l'ergonomie de votre site web  </h3>
                <img src="fleche_droite_black.png" alt="fleche" />

            </Link>
        </section>
        <section className='content__block__row'>
            <Link to="/blog/siteCree" className='blogLink'>
                <h3>Vous avez crée votre site web</h3>
                <img src="fleche_droite_black.png" alt="fleche" />

            </Link>
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

export default BlogAccueil