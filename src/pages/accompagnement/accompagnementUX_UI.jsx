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
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Comment l’AMO intervient-elle dans les différentes étapes de la démarche UX ?</h3>
                <h5>Comprendre qui sont les utilisateurs et ce qu’ils viennent chercher sur le site</h5>
                <p>La première action de la démarche UX-UI consiste à déterminer qui sont les utilisateurs que vous souhaitez capter sur votre site, les raisons pour lesquelles ils s’y connectent, la situation dans laquelle ils se trouvent au moment où ils le consultent… C’est le travail que nous réalisons lors des ateliers peronae, au cours desquelles nous nous basons sur toutes les données collectées sur les utilisateurs pour formaliser des fiches qui vous accompagneront tout au long du projet.</p>
                <p>Si cette phase n’a pas été réalisée en amont du projet, nous pouvons la mener en cours de projet suite à une phase de recueil des besoins qui peut prendre plusieurs formes : interview utilisateur UX ou interview des collaborateurs (qui ne peuvent pas nécessairement se rendre disponibles pour participer aux réunions), ateliers de travail avec les cibles, enquêtes et questionnaires auprès des utilisateurs, analyse des statistiques de consultation…</p>
            </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="" />
            </article>
        </section>
        <section className='content__block__column'>
            <h3>Relever les tendances et les bonnes pratiques chez les concurrents</h3>
            <p>Cette pratique vise à étudier le contexte concurrentiel dans lequel le projet s’inscrit. À travers le benchmark UX (ou étude de la concurrence), nous allons évaluer la pertinence de l’expérience utilisateur sur les sites ayant la même cible que vous pour établir des recommandations concernant votre dispositif numérique. Les avantages du benchmark UX sont nombreux :</p>
            <ul>
                <li>relever les bonnes pratiques concernant les éléments précis d’une interface ou bien au contraire tirer des leçons des erreurs des concurrents. Le fil d’ariane d’un site internet est souvent sujet à débat par exemple mais il reste une bonne pratique à conserver.</li>
                <li>se faire une idée sur les possibilités et sur les tendances, qu’elles soient graphiques, ergonomiques ou fonctionnelles, bref s’inspirer de ce qu’il y a sur le marché sans chercher à copier</li>
                <li>permettre de se différencier des autres ou bien s’y aligner lorsque cela semble nécessaire (dans certains domaines des sites internet ont instauré des conventions ergonomiques qu’il convient de suivre)…</li>
            </ul>
            <p>Les conclusions tirées d’une étude des sites concurrents permettront donc d’améliorer la conception UX de vos interfaces, c’est d’ailleurs une étape que nous menons couramment lors des missions d’AMOE à travers les phases de l’audit des concurrents, mais également lors du benchmark graphique. Si vous ne l’avez pas réalisé en amont de votre projet, pas de panique, nous pouvons vous accompagner sur cette problématique lors de la phase de conception.</p>
            <p>Il nous arrive aussi de réaliser un mini-audit de la concurrence centré sur une fonctionnalité donnée en cours de projet afin de pouvoir proposer des solutions ou de disposer d’arguments pour prendre une décision éclairée.</p>            
        </section>
        <section className='content__block__column'>
            <h3>Ateliers de co-conception UX-UI : prototypage des pages clés puis mise en maquette</h3>
            <p>Nous sommes lors de cette étape au cœur de la conception UX.</p>
            <p>Design thinking, user stories… Différentes méthodes existent pour constituer le prototypage des pages clés, toutefois l’objectif reste le même : fixer les grands principes ergonomiques des pages, sans s’embarrasser des problématiques esthétiques. C’est après cette étape de prototypage que l’on procède à la mise en maquette des pages.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Si nous concevons certains de ces gabarits ergonomique lors de la phase d’AMOE, nous préférons laisser la main à l’agence en charge du développement du projet lors de nos missions d’AMOA. Nous vous accompagnons néanmoins de manière active lors de cette phase cruciale :</p>
            <ul>
                <li>Nous sommes présents sur l’ensemble des ateliers de conception, au cours desquels nous nous assurons du respect de la prise en compte des demandes exposées dans le cahier des charges. Nous accompagnons vos équipes pour concevoir un site en conformité avec l’expression de besoins et contribuons efficacement à l’avancée du projet.</li>
                <li>Nous veillons lors de la création des gabarits et des maquettes, à ce que les pages soient ergonomiques et facilitent le parcours des utilisateurs. Les objectifs des personae sont au cœur de cette phase. Nous prenons aussi en compte les problématiques d’accessibilité numérique car il est important de concevoir un internet inclusif.</li>
                <li>Nous prévoyons des temps avec vous hors projet pour réunir l’ensemble des retours et les formaliser. Lors de ces temps de réunions interne nous analysons avec vous les pages transmises par l’agence et nous sommes force de proposition sur les détails et les points d’ergonomie. Nous vérifions les interactions entre les écrans et l’harmonisation du design sur l’ensemble des pages, nous nous assurons que les pages sont compatibles avec les contraintes techniques (certains plugins ne permettent pas ou encore certaines solutions imposent un design particulier), nous contrôlons également la déclinaison des pages dans leur format responsive…</li>
            </ul>
        </section>
        <section className='content__block__column'>
            <h3>Tester la solution auprès des utilisateurs : recueillir leurs retours concrets sur l’ergonomie et les parcours utilisateurs</h3>
            <p>Même si elle n’est pas obligatoire, cette étape des tests utilisateurs est fortement recommandée pour évaluer l’utilisabilité et la qualité de l’UX et anticiper les éventuelles erreurs avant le développement de la solution. D’autant que 85 % des problèmes UX peuvent être résolus en testant 5 utilisateurs. (Source : Groupe Nielsen Norman) Cette métrique est cependant à prendre avec des réserves car un débat important à lieu entre experts autour de cette dernière.</p>
            <p>Cette étape peut être réalisée dès la phase du prototypage, si les écrans sont construits de manière interactive et fonctionnelle et permettent une navigation (les logiciels comme Figma ou Adobe XD qui permettent cela sont maintenant la norme dans les agences web). La conception des pages ne doit pas non plus être trop avancée puisqu’une phase itérative est à prévoir pour intégrer les retours et faire à nouveau tester la solution jusqu’à validation par les utilisateurs.</p>
        </section>
        </>
    )
}

export default AccompagnementUX
