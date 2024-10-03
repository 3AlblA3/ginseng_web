import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './definitionCible.jsx'

function DefinitonCible () {
    return(
        <>
        <section className='banner'>
            <h4>Avant le projet</h4>
            <h2>Définition des cibles : comprendre les objectifs des utilisateurs</h2>
        </section>
        <section className='content__block'>
            <p>Avez-vous déjà entendu parler de l'UX (expérience utilisateur), d'ergonomie ou de conception centrée sur l'utilisateur ? Ces concepts, en réalité, reposent tous sur une idée simple mais puissante : un site web ou une application doit être pensé avant tout pour l'utilisateur final, celui qui va réellement s'en servir.</p>
            <h3>Comprendre ses cibles grâce à la méthode des personae</h3>
            <h5>Pourquoi est-il crucial de définir ses cibles ?</h5>
            <p>Que ce soit pour consulter des informations, se documenter sur un sujet spécifique, trouver un guide pratique ou encore être accompagné dans une démarche, un projet numérique s’adresse à des publics aux besoins variés et aux attentes souvent très différentes.</p>
            <p>En construisant des personae, on partage une vision claire et collective des objectifs des utilisateurs. Prenons un exemple concret : une personne cherchant une convention collective aura des attentes très différentes d'un passionné de sport automobile qui cherche à suivre une course en direct. C’est ce genre de nuances que la création des personae permet de saisir, afin d’offrir une expérience adaptée à chaque utilisateur.</p>
            <div className='content__block__img'>
                <img src="id_ph.png" alt="id placeholder" />
            </div>
            <p>Il est essentiel que les cibles identifiées soient validées collectivement par l'équipe projet et les décideurs clés. Cette validation garantit que tout le monde partage une même vision des utilisateurs finaux.</p>
            <p>Dès le début de nos missions, nous travaillons avec vous pour esquisser une première version de ces cibles. Puis, au fil des étapes de recueil des besoins et lors d’un atelier de co-conception, nous affinons cette ébauche. À partir de ces échanges, nous créons des fiches personae détaillées, synthétisant les profils des utilisateurs.</p>
            <p>Pour concevoir ces personae, nous nous appuyons sur votre expertise terrain, l’analyse de l’existant et les résultats des phases de recueil des besoins et de l’analyse des statistiques. C’est cette combinaison d’informations qui permet de dessiner des profils utilisateurs pertinents et ancrés dans la réalité.</p>
        </section>
        <section className='content'>
            <div className='accueil__section__accompagnement__row'>
                <article className='accueil__section__accompagnement__container__white'>
                    <h3>Qu’est-ce que les personae ?</h3>
                    <div className='content__article__bubble'>
                        <img src="https://picsum.photos/100/150" alt="img manu"/>
                        <p>Vous voulez en savoir plus sur sur notre méthode de construction des personae ?</p>
                    </div>
                </article>
                <article className='content__article'>
                    <p>La création des personae est réalisée en co-construction entre nos 2 équipes.</p>
                    <p><strong>Les personae, ce sont des représentations fictives d’utilisateurs réels</strong>. Basés sur des données concrètes, ils permettent de modéliser les comportements des utilisateurs cibles de votre projet, qu’il s’agisse d’un site web, d’une application mobile, d’un intranet ou encore d’un outil métier.</p>
                    <p>Chaque persona est doté d’un prénom, d’un métier, d’une histoire et de besoins spécifiques. Cette personnalisation les rend tangibles pour l’équipe projet :</p>      
                    <p>« Est-ce que Laura trouve facilement l’information qu’il cherche ? Laura, qui est pressée, peut-elle obtenir une réponse rapide à sa question, ou est-elle bloquée par le site ? »</p>  
                    <p>Le cœur du travail autour des personae est de permettre à l’équipe de se glisser dans la peau de l’utilisateur final, dès les premières phases de conception et de développement. Cela permet de prioriser les cibles, de distinguer les besoins principaux des besoins secondaires, et de comprendre les objectifs des utilisateurs. De cette manière, l’arborescence et l’ergonomie du site ou de l’application pourront être optimisées pour répondre précisément à leurs attentes.</p>   
                </article>
            </div>
        </section>
        <section className='content__block'>
            <h3>Comprendre les objectifs des utilisateurs cibles et les retranscrire</h3>
            <h5>Pourquoi est-il crucial de définir ses cibles ?</h5>
            <p>Pour réaliser les personae nous nous basons sur plusieurs éléments qui vont nous permettre de comprendre quels sont les objectifs de vos utilisateurs :</p>
            <ul>
                <li>les données statistiques du site</li>
                <li>les études que vous avez pu mener</li>
                <li>et surtout le recueil de la parole des utilisateurs (recueil des besoins).</li>
            </ul>
            <p>À l’issue d’ateliers de co-conception, nous formalisons les éléments recueillis en créant une fiche synthétique et mise en forme pour chaque persona, qui vous suivra tout au long du projet.</p>
        </section>
        <section className='content'>
            <div className='accueil__section__accompagnement__row'>
                <article className='content__article'>
                    <img src="miro.png" alt="miro"/>
                </article>
                <article className='accueil__section__accompagnement__container__white'>
                    <h3>Un atelier de co-conception</h3>
                    <p>Une fois toutes les informations collectées, nous organisons un atelier dédié à la construction des personae.</p>
                    <p>Notre approche garantit que les personae que nous créons reflètent fidèlement les utilisateurs réels de votre site. Étape par étape, nous définissons les caractéristiques de chaque persona : leur état d’esprit, leur comportement face à votre application ou site (sont-ils stressés ? quel appareil utilisent-ils ? à quelle fréquence se connectent-ils ?). Nous dressons ensuite la liste de leurs besoins, en explorant leurs objectifs, le contexte dans lequel ils utilisent votre plateforme, et ce qu’ils espèrent accomplir. Enfin, nous mettons en lumière leurs craintes, leurs frustrations, ainsi que les fonctionnalités qui leur sont essentielles.</p>
                    <p>Pour finaliser les fiches personae, l'équipe projet affine les profils avec nous en leur attribuant un prénom, un âge, une situation familiale, un métier, et même un lieu de résidence. Cette personnalisation donne vie à vos utilisateurs et permet de mieux comprendre leurs attentes.</p>
                </article>
            </div>
        </section>
        <section className='content__block'>
            <h3>Résultat : une fiche de personae que nous transmettons</h3>
            <p>À l’issue de toutes ces étapes, nous créons des <strong>fiches synthétiques</strong> et visuellement attrayantes qui vous accompagneront tout au long de votre projet. Ces fiches personae deviennent une véritable référence pour les étapes suivantes, en particulier lors du cadrage du projet.</p>
            <p>Les personae sont ensuite partagés avec l’ensemble de vos équipes afin que chacun, y compris les décideurs, soit parfaitement aligné sur l'identité et les besoins de l’utilisateur final. C’est souvent un moment clé où le projet prend forme de manière concrète, offrant à tous une vision claire et partagée de l’objectif à atteindre.</p>
            <div className='content__block__img'>
                <img src="adobe_ph.png" alt="adobe placeholder"/>
            </div>
            <h3>Tests utilisateurs : confronter votre site à la réalité</h3>
            <p>Au-delà de la création des personae, des enquêtes, questionnaires et interviews qui permettent de mieux cerner vos utilisateurs, il est possible d’aller encore plus loin en réalisant des tests utilisateurs.</p>
            <p>Concrètement, cette démarche consiste à concevoir des scénarios d’usage que des utilisateurs réels vont devoir suivre. Nous faisons appel à un partenaire spécialisé pour conduire ces tests, et recueillons des retours sous forme de vidéos, d’audios ou de commentaires écrits, selon la méthode choisie. Ensuite, nous analysons en détail ces retours pour en extraire une synthèse claire et des pistes d'amélioration concrètes.</p>
            <p>Ces tests permettent d’affiner encore davantage la connaissance de vos utilisateurs et de repérer les éventuels blocages avant même que votre site ne soit en ligne. Vous avez ainsi l’opportunité de corriger ces points en amont, tout en les intégrant de manière précise dans le cahier des charges.</p>
        </section>
        </>
    )
}

export default DefinitonCible
