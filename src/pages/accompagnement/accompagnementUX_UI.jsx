import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './supportEquipe.css'

function AccompagnementUX () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Pendant le projet - AMOA</h4>
                <h2>Accompagnement UX-UI : matérialiser les parcours utilisateurs</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <p>La phase d’UX-UI est une période cruciale durant laquelle le projet va se matérialiser par la réalisation de gabarits de page et de maquettes graphiques. En amont de l’accompagnement opérationnel, nous vous proposons d’être à vos côtés durant toute cette phase avec notre regard d’expert.</p>
            <h3>L’assistance à la maîtrise d’ouvrage (AMOA) pour vous accompagner pendant la réalisation du projet</h3>
            <h5>Le design d’expérience utilisateur : adapter l’interface aux besoins et parcours de l’internaute</h5>
            <p>L’UX (Acronyme de User Expérience), l’expérience utilisateur en français, correspond à la perception qu’un internaute a d’un site web. Ainsi, le Design d’expérience utilisateur (le fameux UX design) est une méthode de conception des interfaces web qui s’applique à placer l’utilisateur au centre de la démarche de création.</p>
            <p>Cette approche tournée vers l’utilisateur final est devenue incontournable dans le secteur digital/numérique. Elle consiste à adapter l’interface aux attentes de l’internaute (qu’il soit client, prospect ou collaborateur) en assurant un travail de conception et de développement qui respectent le parcour utilisateur sur le site web permettant ainsi aux utilisateurs d’atteindre leurs objectifs sur le site internet (ou l’application / intranet / extranet).</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Pour être efficace, cette méthodologie UX nécessite la collaboration de l’ensemble des services, c’est pourquoi le dialogue est la clé d’une conception UX réussie. Nous sommes présent à l’ensemble des ateliers pour faciliter cette communication et engager le dialogue. En effet, il faut permettre aux différents membres de l’équipe de s’exprimer pour créer de la valeur. Cela sous-entend également qu’un travail de fond a été mené en amont pour connaître vos utilisateurs et leurs besoins, que les parties prenantes sont en accord sur les objectifs de votre organisation et du site internet (ou application, intranet, extranet ou encore logiciel métier). Cela suppose également une bonne disponibilité des équipes en interne pour travailler de manière collaborative autour du projet. Cela commence souvent par la réalisation d’une arborescence UX (centrée utilisateur) c’est à dire qui s’adresse directement à la cible : termes utilisés, ordre des éléments, densité de l’arborescence…</p>
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
        <section className='content__block__row'>
            <div className='banner__column'>
                <h3>Insight</h3>
                <p>L’expérience utilisateur est importante pour retenir les visiteurs sur le site, remporter leur adhésion et leur confiance. Adopter une vision « user centrix » est devenu indispensable dans la conception d’un site web, les statistiques parlent d’eux-mêmes :</p>
                <ul>
                    <li>8 clients sur 10 sont prêts à payer plus pour une meilleure expérience client. (Source : Capgemini)</li>
                    <li>Une interface utilisateur bien conçue peut augmenter le taux de conversion de votre site Web jusqu’à 200 %, et une meilleure conception UX peut générer des taux de conversion jusqu’à 400 %. (Source : Forrester)</li>
                    <li>62 % des clients déclarent partager leurs mauvaises expériences avec d’autres. (Source : Salesforce)</li>
                </ul>
            </div> 
        </section> 
        <section className='content__block__column'>
            <h3>Le design d’interface utilisateur : penser le design graphique pour une navigation agréable et efficace</h3>
            <p>L’étape de l’UI design intervient après l’UX design, elle entre également dans le cadre global de l’UX c’est-à-dire la prise en compte de l’expérience utilisateur dans la conception des différentes interfaces (pages) du site.</p>
            <p>UI design est l’acronyme de User Interface et désigne cette fois si tout ce qui s’apparente au graphisme : design, agencement des éléments, choix typographiques, couleurs, mise en application de votre charte graphique… c’est l’étape de la mise en maquette des différents écrans, la face visible de l’iceberg.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>L’étape du design d’interface utilisateur est menée, côté agence, par un UI designer et éventuellement avec un directeur artistique, qui collaborent avec l’UX designer (garant de l’expérience utilisateur), pour élaborer une version graphique des interfaces validée lors de la phase UX.</p>
            <p>Les enjeux du graphisme lors de la conception d’un site internet sont multiples, en effet le site ne doit pas seulement être visuellement agréable, il doit aussi être intuitif et permettre une navigation fluide. Conçu de manière cohérente par rapport à votre image et vos valeurs, l’UI permet également d’améliorer les interactions avec vos utilisateurs, de leur donner envie de parcourir votre site et de remplir les objectifs que vous vous êtes fixés pour votre site internet. Ainsi, d’une interface agréable et facile à utiliser, découlera par nature une bonne expérience utilisateur sur le site et donc un engagement de vos utilisateurs.</p>
        </section>
        </>
    )
}

export default AccompagnementUX
