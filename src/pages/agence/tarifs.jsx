import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './tarifs.css'

function Tarifs() {
    return(
        <>
        <section className='banner'>
            <h4>Nos tarifs</h4>
            <h2>Une solution personnalisée selon vos besoins</h2>
        </section>
        <section className='content'>
            <div className='content__header'>
                <div className='content__header__text'>
                    <h5>Un peu de méthodologie</h5>
                    <h3>Notre approche, unique et performante</h3>
                </div>
                <Link to="/agence_presentation" className='content__header__button'>Découvrir notre méthodologie</Link>
            </div>
            <article className='content__article__small'>
                <h5>Construire le projet avec vous</h5>
                <p>Nous vous associons à chaque étape de notre méthodologie pour produire un projet à votre image qui pourra satisfaire toutes les parties prenantes.</p>
            </article>
            <article className='content__article__small'>
                <h5>Rigueur et convivialité</h5>
                <p>Nous pilotons la mission de manière à structurer efficacement votre projet, tout en veillant à instaurer un cadre de travail agréable.</p>
            </article>
            <article className='content__article__small'>
                <h5>Une prestation sur-mesure</h5>
                <p>Nous proposons pour chaque projet une méthodologie adaptée aux besoins et aux objectifs qui prend en compte les contraintes de budget et de planning.</p>
            </article>
        </section>
        <section className='graph'>
            <img src="graph.png" alt="graph" />
        </section>
        <section className='content'>
            <article className='content__article'>
                <h3>Tarifs d’une agence web : les paramètres qui jouent</h3>
                <p>Tout comme dans d'autres secteurs, le coût d'un service est directement lié à l'expertise et à la complexité de la tâche. Un artisan qualifié facturera plus cher qu'un apprenti, tout comme un développeur senior aura un tarif horaire supérieur à celui d'un junior. Nous proposons différentes formules pour s'adapter à tous les budgets.</p>
                <p>Le coût d'un projet web ne se limite pas au nombre d'heures travaillées. Il reflète également la valeur ajoutée apportée par l'agence, notamment en termes de conception, d'expérience utilisateur et de référencement. Un développeur senior, grâce à son expertise, peut optimiser votre site web pour un meilleur référencement naturel et ainsi générer plus de trafic. Bien que son tarif horaire soit plus élevé, il représente un investissement sur le long terme : </p>
                <ul>
                    <li>Un développeur sénior coûte 180€ à 450€ de l’heure.</li>
                    <li>Un développeur junior va coûter 50€ à 70€ de l’heure.</li>
                </ul>
            </article>
            <article className='content__article'>
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
                    <h5>200€ à 5000€</h5>
                </li>
                <li>
                    <p>Site vitrine simple avec une dizaine de type de pages différentes</p>
                    <h5>2000€ à 5000€</h5>
                </li>
                <li>
                    <p>Site portail, avec un espace de connexion, une navigation interne etc…</p>
                    <h5>5000€ à 20 000€</h5>
                </li>
                <li>
                    <p>Site E-commerce assez simple avec des fonctionnalités classiques</p>
                    <h5>5000€ à 30000 €</h5>
                </li>
                <li>
                    <p>Site de génération de lead très optimisé pour être visible sur un secteur fortement concurrentiel</p>
                    <h5>10000€ à 30000€</h5>
                </li>
                <li>
                    <p>Site E-commerce avancé, très personnalisé avec des produits configurables complexes et un back-office sur mesure</p>
                    <h5>Au moins 50000€</h5>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Tarifs