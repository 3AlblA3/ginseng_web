import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './supportEquipe.css'

function SupportEquipe () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Pendant le projet - AMOA</h4>
                <h2>Support de l'équipe projet : accompagnement durant toutes les phases de réalisation</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <p>L’un des principes premier de l’AMOA est de pouvoir compter à tout moment sur l’accompagnement de notre équipe pour fluidifier au maximum le déroulement du projet et les échanges avec le prestataire que vous aurez sélectionné.</p>
            <h3>L’assistance à la maîtrise d’ouvrage (AMOA) pour vous accompagner pendant la réalisation du projet</h3>
        </section>
        <section>
            <div className='content__block__row'>
                <article className='content__block__row__container__sticky'>
                    <h3>Disposer d’une ressource experte supplémentaire au sein de votre équipe</h3>
                    <p>Pendant le projet, notre rôle d’Assistant à Maîtrise d’Ouvrage (AMOA) consiste à faire le lien fonctionnel entre le maître d’ouvrage (vous) et le maître d’œuvre (l’équipe de production du prestataire : chef de projet, graphistes, développeurs…).</p>
                    <p>Ainsi nous sommes un support de votre équipe projet dans toutes les phases de ce dernier, jusqu’à la mise en ligne du site Internet ou de l’application, et même au-delà, ce qui vous permet de disposer d’une ressource experte supplémentaire au sein de votre équipe.</p>
                    <p>Quand on parle de ressource supplémentaire, il faut avoir en tête que cette ressource sera dédiée à votre projet et n’aura donc pas d’autres tâches (plus urgentes) à accomplir. Et bien sûr cette ressource est présente lors de l’accompagnement opérationnel (développement et recette du site).</p>
                </article>
                <article className='content__block__img'>
                    <img src="miro.png" alt="" />
                </article>
            </div>
        </section>  
        <section className='content__block__column'>  
            <h3>Porter avec vous un projet ambitieux</h3>
            <p>Les projets digitaux sont des projets ambitieux, tant sur le plan technique que sur le plan éditorial et graphique. Ils demandent un investissement important des équipes internes. Bénéficier d’une AMO sur le suivi du projet permet d’alléger la charge de l’équipe pilote, tout en leur faisant bénéficier de nos expertises : techniques / éditoriales / ergonomiques.</p>
            <h3>Continuer à vous accompagner à la suite de l’AMOE</h3>
            <p>Souvent nous continuons d’accompagner en AMOA des clients que nous avons eu le plaisir d’accompagner en AMOE (lors de la phase amont du projet – recueil des besoins et rédaction du cahier des charges technique et fonctionnel). Cet accompagnement de l’équipe pilote du projet sur les différentes étapes en amont (ateliers, rédaction du cahier des charges…) nous a permis d’acquérir une bonne connaissance des différents acteurs et une perception fine du projet souhaité et de développer une relation de confiance, basée sur la coopération et la communication, des valeurs clés dans la réussite d’un projet.</p>
            <p>Nous sommes présents à l’ensemble des réunions et partageons avec vous les bonnes pratiques, notamment lors de la conception de gabarit UX et des maquettes, mais sommes également la pour avertir sur les potentiels risques de débordement du projet.</p>
            <p>Et c’est aussi pour nous une immense source de fierté et de joie que de pouvoir suivre un projet que l’on a conçu avec vous. C’est ce qui nous fait vibrer et nous donne envie de nous investir : voir un jour le site en ligne ou l’application lancée sur les stores.</p>
            <div className='content__block__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </div>
            <h3>La valeur ajoutée de l’AMOA durant la réalisation de vos projets digitaux</h3>
            <h5>Vous faire bénéficier de notre expertise tout au long du projet</h5>
            <ul>
                <li>Nous assistons à l’ensemble des réunions du projet : suivi du projet, comités de pilotage, ateliers… Et nous tenons à jour un document navette nous permettant de conserver un historique du projet et des décisions prises ou en attente.</li>
                <li>Nous sommes force de proposition : notre expertise dans le développement de projets numériques nous permet de trouver des solutions en amont pour éviter les blocages (nous avons ainsi pu dans certains projets proposer une solution de recherche non envisagée ou encore permis de fluidifier le parcours utilisateurs en supprimant quelques étapes).</li>
                <li>Nous traduisons l’expression de besoins et les contraintes techniques possibles afin d’assurer la qualité du site internet produit ou de l’application ou d’un intranet.</li>
            </ul>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Assurer des gabarits et des maquettes en conformité avec l’expression de besoin</h3>
                <div className='content__article__bubble'>
                    <img src="https://picsum.photos/100/125" alt="img bubble"/>
                    <p>En savoir plus sur notre accompagnement lors de la phase de conception (expertise UX/UI)</p>
                </div>
            </article>
            <article className='content__block__row__container__text'>
                <p>Nous serons présents sur l’ensemble des ateliers de conception (notamment durant les ateliers UX/UI où les parcours utilisateurs sont concrétisés sous la forme d’un enchaînement de gabarits), au cours desquels nous nous assurons du respect de la prise en compte des demandes exposées dans le cahier des charges et des parcours utilisateurs.</p>
                <p>Nous veillons lors de la création des gabarits et des maquettes, à ce que les pages soient ergonomiques et facilitent le parcours des utilisateurs en nous appuyant notamment des normes et critères heuristiques (Les critères de Bastien & Scapin – identification des difficultés d’ergonomie / Les heuristiques de Jacob Nielsen / Les lois de la Gestalt – principes de similarité et de proximité).</p>
                <p>Des tests utilisateurs peuvent également être effectués à cette étape pour confirmer ou non les choix opérés.</p>
                <p>Les objectifs des personae sont au cœur de cette phase. Nous prenons aussi en compte les problématiques d’accessibilité numérique même si elles ne sont pas centrales sur le projet car nous avons à cœur de faire en sorte que chaque site internet puisse délivrer la même information pour tous.</p>           
            </article>
        </section>
        <section className='content__block__column'>
            <h3>Bénéficier de notre regard d’expert lors de la relecture des spécifications</h3>
            <p>La phase de conception conduit à la rédaction des spécifications fonctionnelles du projet (qui peut aussi survenir après validation des maquettes). Ce document doit lister l’ensemble des éléments fonctionnels du site : les différents formulaires, l’administration du site, les départs de mails, les spécificités de l’espace adhérent, les connexions avec les services tiers, etc..</p>
            <p>Ce document est essentiel et contient l’ensemble de points techniques (ou ergonomique) permettant de comprendre comment le site va fonctionner, il doit être validé par l’équipe projet avant la phase de développement.</p>
            <p>Lors de nos accompagnements AMOA, nous prévoyons impérativement une phase de relecture de ces spécifications fonctionnelles et techniques après laquelle nous faisons part de nos remarques à l’équipe projet. Il peut même nous arriver dans certains projets de co-construire ces spéciations avec l’agence.</p>
            <p>Nous vérifions notamment que les éléments exposés sont compréhensibles par tous et que le fonctionnement évoqué correspond aux besoins et aux contraintes mentionnées notamment lors de la phase de conception (par exemple concernant les contraintes liées à l’authentification utilisateur ou sur les étapes nécessaires à la création d’un compte).</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <h3>Faciliter la communication avec l’équipe de développement</h3>
            <p>Lors de nos différentes expériences, nous avons noté le rôle que nous avons joué dans la fluidification des échanges entre l’équipe projet et l’équipe de développement. D’une part parce que nous pouvons répondre aux questions et lever les blocages de l’équipe projet, d’autre part parce que nous pouvons leur partager notre méthodologie pour recueillir les éléments nécessaires à l’avancée du projet, par exemple, en encadrant la migration des données, en sollicitant les bons interlocuteurs, en produisant des notices explicatives… Nous sommes ainsi un véritable support opérationnel pour les équipes.</p>
            <p>Plus trivialement, il nous arrive aussi d’arriver à parler le même langage que l’équipe de développement et donc de pouvoir intervenir en direct avec eux permettant ainsi de gagner un temps précieux.</p>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Des forces vives pour le recettage du site</h3>
                <p>La phase de recette est une étape cruciale avant la mise en ligne, qui sollicite beaucoup les équipes. Fort de notre connaissance du projet, nous aidons à tester le site pour vérifier la conformité graphique (notamment l’intégration html/css) et fonctionnelle sur plusieurs terminaux (mobile/desktop et navigateurs). Grâce à notre bonne connaissance des back-offices, nous pouvons aider à lever de nombreux freins pendant la contribution et prêter main-forte en cas de besoin.</p>
                <p>Lors de cette étape nous encadrons aussi l’équipe projet pour faciliter le recueil des anomalies et permettre ainsi une résolution plus rapide des problèmes. Les différents outils de ticketing sont plus ou moins complexes et notre expertise sur ces derniers permet de mettre en place certaines routines pour faciliter le travail.</p>
            </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="" />
            </article>        
        </section>
        <section className='content__block__column'>
            <h3>Continuer à vous accompagner après la mise en ligne</h3>
            <p>Après la mise en ligne, nous pouvons continuer à vous accompagner sur toutes les problématiques numériques, notamment sur la phase d’accompagnement et de formation des équipes, ainsi que sur la phase d’évolution qui interviendra assurément une fois le site confronté à la réalité.</p>
            <p>Ainsi certains clients souhaitent que nous puissions consacrer un temps donné par mois à leur projet afin de suivre l’ensemble des évolutions et permettre de continuer à cadrer les choses au mieux. C’est toujours un réel plaisir que de pouvoir ainsi suivre des projets sur le long terme et de les voir grandir.   </p>
        </section>

        </>
    )
}

export default SupportEquipe
