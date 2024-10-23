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
        <section className='content__block__blog'>
            <Link to="/blog/coutSite" className='blogLink'>
                <h3> Combien coûte vraiment un site internet en 2024 ? Un budget sur mesure pour vos projets web</h3>
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
            <Link to="/blog/siteCree" className='blogLink'>
                <h3>Vous avez crée votre site web</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/noel" className='blogLink'>
                <h3>E-commerce à Noël: Les 10 Commandements pour augmenter vos ventes</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/sensibilisation" className='blogLink'>
                <h3>L’importance d’un site web bien conçu pour sensibiliser à des causes comme Octobre Rose</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/relationB2B" className='blogLink'>
                <h3>Pourquoi et Comment Digitaliser la Relation Client B2B ?</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/bonnesPratiques" className='blogLink'>
                <h3>Les Bonnes Pratiques pour un Site E-commerce Performant.</h3>
                <img src="fleche_droite_black.png" alt="fleche" />
            </Link>
            <Link to="/blog/linkedin" className='blogLink'>
                <h3>Pour la rentrée, exploitez tout le potentiel de votre profil LinkedIn !</h3>
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