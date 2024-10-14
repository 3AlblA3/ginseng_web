import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function Tarifs() {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Nos tarifs</h4>
                <h2>Une solution personnalisée selon vos besoins</h2>
            </div>
        </section>
        
        <section className='graph'>
            <img src="graph.png" alt="graph" />
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Tarifs d’une agence web : les paramètres qui jouent</h3>
                <p>Tout comme dans d'autres secteurs, le coût d'un service est directement lié à l'expertise et à la complexité de la tâche. Un artisan qualifié facturera plus cher qu'un apprenti, tout comme un développeur senior aura un tarif horaire supérieur à celui d'un junior. Nous proposons différentes formules pour s'adapter à tous les budgets.</p>
                <p>Le coût d'un projet web ne se limite pas au nombre d'heures travaillées. Il reflète également la valeur ajoutée apportée par l'agence, notamment en termes de conception, d'expérience utilisateur et de référencement. Un développeur senior, grâce à son expertise, peut optimiser votre site web pour un meilleur référencement naturel et ainsi générer plus de trafic. Bien que son tarif horaire soit plus élevé, il représente un investissement sur le long terme : </p>
                <ul>
                    <li>Un développeur sénior coûte 180€ à 450€ de l’heure.</li>
                    <li>Un développeur junior va coûter 50€ à 70€ de l’heure.</li>
                </ul>
            </article>
            <article className='content__block__row__container__img'>
                <img className='content__article__img' src="https://picsum.photos/500/700" alt="image" />
            </article>
        </section>
        <section className='prices'>
            <h3>Prix de création d’un site web</h3>
            <div>
                <p>Pour la création du site à proprement parler, la formule de calcul du prix est assez simple :</p>
                <p>(TJM) x nombre de jours nécessaires = prix global du site internet</p>
                <p>Le TJM ou Taux journalier Moyen est le prix de l’agence web pour une </p>
            </div>
            <div>
                <p>Chaque projet web étant unique, son coût est calculé sur mesure. Nous utilisons une formule simple : TJM x nombre de jours.</p>
                <p>Le TJM ou Taux journalier Moyen, qui varie en fonction des compétences requises, est un indicateur clé du coût final.</p>
                <p>Pour donner un ordre de grandeur général, selon la typologie du site à créer, les gammes de prix s’étendent ainsi :</p>
            </div>
            <ul>
                <li>
                    <p>Site monopage simple</p>
                    <h5>200€ à 5.000€</h5>
                </li>
                <li>
                    <p>Site vitrine simple avec une dizaine de type de pages différentes</p>
                    <h5>2.000€ à 5.000€</h5>
                </li>
                <li>
                    <p>Site portail, avec un espace de connexion, une navigation interne etc…</p>
                    <h5>5.000€ à 20.000€</h5>
                </li>
                <li>
                    <p>Site E-commerce assez simple avec des fonctionnalités classiques</p>
                    <h5>5.000€ à 30.000€</h5>
                </li>
                <li>
                    <p>Site de génération de lead très optimisé pour être visible sur un secteur fortement concurrentiel</p>
                    <h5>10.000€ à 30.000€</h5>
                </li>
                <li>
                    <p>Site E-commerce avancé, très personnalisé avec des produits configurables complexes et un back-office sur mesure</p>
                    <h5>Au moins 50.000€</h5>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Tarifs