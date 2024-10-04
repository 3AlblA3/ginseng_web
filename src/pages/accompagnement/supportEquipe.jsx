import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './supportEquipe.css'

function SupportEquipe () {
    return(
        <>
        <section className='banner'>
            <h4>Pendant le projet - AMOA</h4>
            <h2>Support de l'équipe projet : accompagnement durant toutes les phases de réalisation</h2>
        </section>
        <section className='content__block'>
            <p>L’un des principes premier de l’AMOA est de pouvoir compter à tout moment sur l’accompagnement de notre équipe pour fluidifier au maximum le déroulement du projet et les échanges avec le prestataire que vous aurez sélectionné.</p>
            <h3>L’assistance à la maîtrise d’ouvrage (AMOA) pour vous accompagner pendant la réalisation du projet</h3>
        </section>
        <section>
            <div className='accueil__section__accompagnement__row'>
                <article className='accueil__section__accompagnement__container__white'>
                    <h3>Disposer d’une ressource experte supplémentaire au sein de votre équipe</h3>
                    <p>Pendant le projet, notre rôle d’Assistant à Maîtrise d’Ouvrage (AMOA) consiste à faire le lien fonctionnel entre le maître d’ouvrage (vous) et le maître d’œuvre (l’équipe de production du prestataire : chef de projet, graphistes, développeurs…).</p>
                    <p>Ainsi nous sommes un support de votre équipe projet dans toutes les phases de ce dernier, jusqu’à la mise en ligne du site Internet ou de l’application, et même au-delà, ce qui vous permet de disposer d’une ressource experte supplémentaire au sein de votre équipe.</p>
                    <p>Quand on parle de ressource supplémentaire, il faut avoir en tête que cette ressource sera dédiée à votre projet et n’aura donc pas d’autres tâches (plus urgentes) à accomplir. Et bien sûr cette ressource est présente lors de l’accompagnement opérationnel (développement et recette du site).</p>
                </article>
                <article className='content__article'>
                    <img src="miro.png" alt="" />
                </article>
            </div>
        </section>  
        <section className='content__block'>  
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
        <section className='content'>
            <div className='accueil__section__accompagnement__row'>
                <article className='content__article'>
                    <img src="miro.png" alt="miro"/>
                </article>
                <article className='accueil__section__accompagnement__container__white'>
                    <h3>Assurer des gabarits et des maquettes en conformité avec l’expression de besoin</h3>
                </article>
            </div>
        </section>
        <section className='content__block'>
            <h3>Prévoir la gestion des contenus : un défi incontournable</h3>
            <h5>Un gabarit de page c’est quoi ?</h5>
            <p>Le gabarit ergonomique (ou wireframe) sert de fondation à la structure d'une page en définissant l'emplacement de tous les éléments qui y seront intégrés. À ce stade, aucune intention graphique n'intervient : l'ergonomie est le seul guide. Chaque décision est prise en fonction de la logique d’usage, avec pour objectif de rendre l’expérience intuitive pour vos personae. Les éléments doivent être placés de manière cohérente, afin d'offrir un accès simple, rapide et pertinent à l’information recherchée.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <h5>Ça y est, le projet devient concret.</h5>
            <p>Nous échangeons avec vous sur le placement stratégique de chaque élément, en pesant les avantages et les implications de ces choix. C’est également à ce moment que les éléments commencent à prendre forme visuellement, facilitant ainsi la projection de toute l’équipe vers ce que sera le futur site.</p>
            <p>Durant cette étape, nous mettons à profit l’expertise que nous avons développée à travers la réalisation de nombreux sites et applications. Cela nous permet de vous conseiller sur certains principes essentiels, comme l’utilité d’un slider ou l’adoption de conventions ergonomiques reconnues. L’objectif reste toujours le même : offrir une expérience optimale à vos personae, qui sont au centre de toutes nos réflexions.</p>
        </section>
        <section className='banner__row'>
            <div className='banner__row__container'>
                <h4>À disposition de vos projets</h4>
                <h3>Découvrez nos expertises</h3>
                <p><strong>Combien de temps dure les audits ?</strong><br/>
                Faire le point sur vos contenus et les préparer pour le futur site</p>
                <p><strong>Test utilisateurs</strong><br/>
                Vérifier l’expérience du site auprès d’un panel d’utilisateurs</p>
                <p><strong>Gabarits ergonomiques</strong><br/>
                Anticiper le travail des maquettes de votre site web</p>
                <p><strong>Gestion de projet</strong><br/>
                Vous aider à structurer votre projet en terme d’organisation</p>                    
                </div>
        </section>
        <section className='content__block'>
            <h3>Soumettre les éléments aux futurs visiteurs : les tests utilisateurs</h3>
            <h5>Quel intérêt pour des tests utilisateurs ?</h5>
            <p>Nous apprécions particulièrement l’étape où nous sollicitons les retours des utilisateurs de votre site. Que ce soit lors de la définition des cibles pour comprendre leurs attentes et besoins, ou plus tard pour valider la structure des gabarits et l’arborescence, ces interactions sont cruciales pour s’assurer que le projet répond aux attentes des utilisateurs réels.</p>
            <p>Les tests utilisateurs peuvent se dérouler de plusieurs manières :</p>
            <ul>
                <li>Via un panel interne à votre entreprise</li>
                <li>Ou à travers un outil externe utilisant un panel représentatif de vos cibles</li>
            </ul>
            <p>Dans les deux cas, nous travaillons main dans la main avec vous pour concevoir plusieurs scénarios d’usage, chacun avec des objectifs précis à atteindre.</p>
            <p>Ces tests nous permettent d’observer attentivement les réactions des utilisateurs face aux différents écrans, d’identifier les obstacles qu’ils rencontrent, et de comparer leurs comportements aux attentes initiales. C’est un moyen efficace de vérifier si les besoins des visiteurs ont été correctement anticipés et intégrés au projet. En outre, ces tests nous donnent des indications précieuses sur l’accès à l’information. Par exemple, nous pouvons détecter si un élément est correctement placé ou, à l’inverse, s’il passe inaperçu et nécessite un repositionnement pour optimiser l’expérience utilisateur.</p>
        </section>

        </>
    )
}

export default SupportEquipe
