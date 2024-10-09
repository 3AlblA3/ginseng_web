import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './accompagnementTechnique.css'

function AccompagnementTechnique () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Avant le projet</h4>
                <h2>Accompagnement technique : bâtir le cahier des charges fonctionnel pour un projet réussi</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <article className='content__block__row__container__text'>
                <p>Grâce à notre expérience en tant qu'agence web et notre expertise technique acquise lors de la création et refonte de sites, nous vous accompagnons dès le départ pour explorer toutes les questions techniques liées à votre projet.</p>
                <h3>Concevoir le cahier des charges fonctionnel étape par étape en étant force de proposition</h3>
                <h4>Tout le monde n’a pas le même bagage technique</h4>
                <p>Nous savons que chacun n’a pas le même bagage technique, et nous veillons à aligner tous les acteurs autour d’une compréhension commune des enjeux. Notre mission est d’ajuster nos explications et de proposer des solutions adaptées à chaque niveau de connaissance.</p>
                <h4>Recenser l’ensemble des fonctionnalités et en estimer le coût</h4>
                <p>Votre site actuel, bien qu’en besoin de refonte, possède des fonctionnalités qui peuvent être conservées, améliorées ou supprimées.</p>
                <p>Parallèlement, vous avez probablement réfléchi à de nouvelles fonctionnalités pour mieux répondre aux besoins de vos utilisateurs.</p>
                <p>Ginseng Web se base sur les audits et les analyses des personae pour passer en revue chaque fonctionnalité existante. Nous évaluerons ensemble leur pertinence et leur impact en termes de coût et de complexité de mise en œuvre.</p>
                <p>Plusieurs <strong>fonctionnalités</strong>, allant des <strong>espaces personnels</strong> aux <strong>chatbots</strong> en passant par les formulaires et les <strong>cartes interactives</strong>, peuvent être intégrées en fonction de votre projet. Chez Ginseng Web, nous estimons les coûts de leur mise en place et de leur utilisation, et collaborons avec votre équipe pour examiner leur pertinence en fonction de la complexité technique et de l’adéquation avec les attentes de vos cibles.</p>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Étude de cas</h3>
                    <p>Lors de notre mission pour ETS PAUMIER (la partie professionnelle de la marque LE CACTUS FRANÇAIS), l'un des enjeux clés de la refonte du site était d'optimiser la gestion du back-office. Cela visait à assurer une transition fluide vers la digitalisation de l'entreprise, jusque-là peu familiarisée avec le web, tout en rompant avec leur ancien ERP. En parallèle, avec plus de 10 groupes clients distincts et des catalogues produits associés, il était essentiel de concevoir un affichage produit personnalisé en fonction de critères spécifiques (groupes clients, ajout de... etc.).</p>
                    <p>Pour relever ces défis, nous avons développé un Prestashop surpuissant. Le back-office a été entièrement repensé et restructuré afin de s'intégrer harmonieusement à leurs systèmes internes, garantissant une gestion quotidienne fluide et efficace.</p>
                </div>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
            </div>
        </section>
        <section className='content__block__column'>
            <div className='content__block__row__container__text'>
                <h3>Analyse de l’existant : les différents types d’analyses et audits</h3>
                <p>Vous utilisez un logiciel métier spécifique ?<br/>
                Une source de données externe ?<br/>
                Ou avez besoin de connecter votre site à un autre environnement ?</p>
                <p>Notre directrice de projet, Anaïs, accompagné de notre développeur si nécessaire, se chargera de collaborer avec les différents intervenants : service technique, prestataires, DSI (Direction des Systèmes d'Information), afin d'évaluer l'ensemble de votre écosystème. Nous identifierons ensemble les opportunités d'optimisation ainsi que les contraintes potentielles, pour assurer une intégration fluide et efficace de vos outils tiers.</p>
            </div>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder" />
            </div>
            <div className='content__block__row__container__text'>
                <h3>Prendre en compte tous les aspects techniques de votre projet – ne rien laisser au hasard</h3>
                <p>En plus des ateliers dédiés aux fonctionnalités et aux outils tiers, nous complétons l'accompagnement technique web en définissant précisément le périmètre de votre projet à travers une série de questions ciblées.
                Cet atelier, plus général, est essentiel pour aborder l’ensemble des aspects liés à la mise en place de votre futur site web, notamment :</p>
                <ul>
                    <li><strong>Le choix de l’environnement technique :</strong> CMS, Framework... Quelle architecture répondra le mieux à vos besoins ?</li>
                    <li><strong>L'hébergement et ses contraintes :</strong> dimensionnement, sauvegardes, disponibilité, choix entre un prestataire externe ou une gestion en interne.</li>
                    <li><strong>Les besoins en migration de données :</strong>élaboration d’un plan de migration, besoin d’un accompagnement spécifique, ou autres exigences.</li>
                    <li><strong>La conformité au RGPD :</strong>au-delà du site web, cette question touche également les données client présentes dans les outils tiers. Cela implique une réflexion globale sur le traitement des données au sein de l’écosystème digital. Ici, notre rôle en conseil stratégique prend toute son importance.</li>
                    <li><strong>Les besoins en statistiques et analyse des données :</strong> solutions de suivi, plan de taggage, mise en place de data visualisation pour générer des rapports automatisés à partir des données sélectionnées en amont.</li>
                </ul>
                <p>D'autres aspects techniques seront abordés pour s'assurer qu'aucune dimension du projet n’est laissée de côté.</p>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Étude de cas</h3>
                    <p>Lors de notre mission pour ETS PAUMIER (la partie professionnelle de la marque LE CACTUS FRANÇAIS), l'un des enjeux clés de la refonte du site était d'optimiser la gestion du back-office. Cela visait à assurer une transition fluide vers la digitalisation de l'entreprise, jusque-là peu familiarisée avec le web, tout en rompant avec leur ancien ERP. En parallèle, avec plus de 10 groupes clients distincts et des catalogues produits associés, il était essentiel de concevoir un affichage produit personnalisé en fonction de critères spécifiques (groupes clients, ajout de... etc.).</p>
                    <p>Pour relever ces défis, nous avons développé un Prestashop surpuissant. Le back-office a été entièrement repensé et restructuré afin de s'intégrer harmonieusement à leurs systèmes internes, garantissant une gestion quotidienne fluide et efficace.</p>
                </div>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
            </div>
        </section>
        <section className='content__block__column'>
            <div className='content__block__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </div>
            <p>Enfin, dans le cadre de la rédaction du CCTP (cahier des clauses techniques particulières) pour la refonte d’un site internet (ou sa création, bien que cela soit désormais rare), Ginseng Web aborde systématiquement deux points essentiels à nos yeux dans tout projet digital :</p>
            <ul>
                <li><strong>1. L'accessibilité,</strong>  obligatoire pour certains sites, notamment ceux du secteur public, afin de garantir un accès adapté aux personnes en situation de handicap (physique ou mental). L’accessibilité concerne à la fois l’aspect technique, ergonomique et éditorial du site. Nous sensibilisons nos clients sur l’importance de créer un internet inclusif.</li>
                <li><strong>2. Le numérique et les enjeux environnementaux. Un référentiel général d’écoconception de services numériques (RGESN),</strong>  a été publié par le gouvernement et sert de cadre pour évaluer l'impact environnemental des projets numériques. La première question que nous posons est : "Ce projet est-il réellement nécessaire ?" Nous intégrons systématiquement cette réflexion dans notre approche technique, car la prise en compte des enjeux environnementaux est un sujet qui nous tient à cœur.</li>
            </ul>
            <p>Le rôle de Ginseng Web dans cette phase d’accompagnement technique est de vous conseiller et de proposer des solutions adaptées à vos besoins, en tenant compte des défis de l’accessibilité et de l’écoconception.</p>
        </section>
        </>
    )
}

export default AccompagnementTechnique
