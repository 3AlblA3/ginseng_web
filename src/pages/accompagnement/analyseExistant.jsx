import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './analyseExistant.css'

function AnalyseExistant() {
    return(
        <>
        <section className='banner'>
            <h4>Avant le projet</h4>
            <h2>Analyse de l'existant : recenser les fonctionnalités et les enjeux techniques</h2>
        </section>
        <section className='content__block'>
            <p>Chaque projet d’accompagnement digital débute par une analyse complète de la situation existante. Ce travail s’articule autour de plusieurs phases, chacune ayant pour objectif de dresser un état des lieux précis et de formuler des pistes d’action adaptées.</p>
            <h3>Phase d’immersion : s’approprier votre environnement et vos enjeux</h3>
            <p>La phase d’immersion constitue le point de départ de tout projet digital. Cette étape fondatrice permet à notre équipe de comprendre en profondeur votre organisation, afin de poser les bases du projet.</p>
            <p>Qu’il s’agisse de la rédaction d’un cahier des charges pour la refonte d’un site internet ou d’un projet de transformation numérique, cette immersion est essentielle pour appréhender les défis spécifiques de votre structure. Cela s’applique également pour le développement ou l’optimisation d’applications digitales.</p>
            <div className='content__block__img'>
            </div>
            <p>Pour assurer le succès de tout projet digital, il est essentiel de bien appréhender les processus de mise à jour des contenus, les responsabilités en place et les rôles des différents acteurs impliqués. Il s’agit de comprendre leurs compétences, leur disponibilité et la manière dont ils seront impactés par les changements à venir.</p>
            <p>C’est aussi à ce moment que s’établit une relation de confiance et de collaboration entre vos équipes et la nôtre, ancrée dans des échanges fluides et transparents – des éléments clés pour garantir la réussite du projet.
            Au-delà de la gestion de projet, nous savons que chaque initiative digitale nécessite un ensemble de compétences diversifiées, c’est pourquoi notre équipe regroupe des experts aux profils complémentaires pour répondre à l’ensemble des besoins.</p>
            <div className='content__block__insight'>
                <h3>Insight</h3>
                <p>C’est également lors de la phase d’immersion que l’on fixe le cadre de la gouvernance du projet.</p>
                <p><strong>Qui participe ? Qui valide ?</strong><br/>
                <strong>Comment vont s’établir les concertations avec les membres décisionnaires ?</strong><br/>
                <strong>Y a-t-il des délais de validation à anticiper ?</strong><br/>
                <strong>Quels moyens seront mis en place pour faciliter la communication entre les services concernés ?</strong>
                </p>
                <p>Pour garantir le bon déroulement du projet, il est essentiel de clarifier, dès le début, les rôles et responsabilités de chacun, ainsi que les étapes cruciales de validation. Mettre en place des points réguliers avec les équipes de direction pour leur offrir une visibilité continue sur l’avancement du projet fait partie intégrante de notre approche méthodologique.</p>
            </div>
            <h3>Audits et analyses : explorer et orienter pour mieux répondre aux attentes de vos utilisateurs</h3>
            <p>L’audit de l’existant, qu’il s’agisse d’un site, d’un intranet ou d’une application, offre une vue d’ensemble indispensable pour identifier les points forts et les axes d’amélioration d’un projet numérique. Cela permet de mieux cerner la situation actuelle et de poser les bases pour des recommandations pertinentes.</p>
            <h4>Analyse de l’existant : les différents types d’analyses et audits</h4>
            <h5>Audit d'ergonomie : repenser l’expérience utilisateur de votre site web pour une performance optimisée</h5>
            <p>Quels aspects de l’expérience utilisateur méritent d’être préservés ? <br/>
            Où se situent les obstacles qui freinent la fluidité des interactions ? <br/>
            Et, surtout, quelles pistes d'amélioration s'ouvrent à nous pour améliorer l’efficacité globale ?</p>
            <p>Dans tout projet de refonte numérique, l’un des défis majeurs est l’accompagnement au changement, tant pour vos équipes que pour vos utilisateurs finaux. Nous intégrons cette dimension dès le début, en identifiant les éléments clés de votre interface, ceux qui créent de la valeur et doivent être maintenus. Par exemple, si nous découvrons que votre moteur de recherche est particulièrement apprécié, nous veillerons à en conserver l'essence dans la future version du site.</p>
            <p>Un audit ergonomique ne se limite pas à l’interface utilisateur, il inclut aussi une évaluation approfondie de l’accessibilité. Notre rôle est d'analyser dans quelle mesure cette dimension est cruciale pour votre projet, et de l’intégrer dans le cahier des charges si nécessaire. L’accessibilité touche autant à la structure du site qu'à la manière dont les contenus sont présentés, et il est essentiel d’en tenir compte pour offrir une expérience inclusive à tous.</p>
            <h5>Audit éditorial : comprendre ce qui fait la force de vos contenus</h5>
            <p>L'audit des contenus a pour objectif de saisir ce qui fait la richesse de vos ressources et d’en préserver les éléments les plus impactants. L'enjeu est de capitaliser sur ce qui fonctionne et de l'intégrer de manière stratégique lors de la refonte du site. C'est aussi l'occasion idéale pour faire un tri : certains contenus ont peut-être perdu de leur pertinence avec le temps.</p>
            <p>Cette étape est particulièrement cruciale pour les plateformes ayant accumulé une vaste bibliothèque de contenus. L’audit permet de revoir en profondeur l’organisation des informations, afin de rendre plus fluide et cohérente la navigation via l’arborescence du site, et ainsi aborder la refonte avec une base solide et structurée.</p>
            <h5>Audit SEO : sécuriser et renforcer votre visibilité lors de la refonte</h5>
            <p>Dans le cadre d'une refonte web, comprendre et maîtriser votre référencement naturel est essentiel pour préserver votre positionnement. Notre mission ? Analyser les points forts et les faiblesses de votre SEO actuel afin de les traduire efficacement dans le cahier des charges et ainsi éviter toute perte de visibilité.</p>
            <p>Contrairement à un audit SEO classique axé sur l’amélioration immédiate des positions, notre approche, dans le cadre d’une refonte, vise à préserver les acquis. Nous n’utilisons pas seulement des outils comme SEMrush pour traquer les problèmes techniques, mais nous nous concentrons sur la structure existante qui fonctionne. L'objectif est clair : garder intact ce qui vous assure déjà un bon référencement.</p>
            <p>Lors de cet audit, nous identifions les pages stratégiques, les éléments clés de votre structure SEO (notamment les balises sémantiques HTML) et nous les documentons précisément pour une transition en douceur lors de la refonte. Préserver votre SEO est crucial pour maintenir, voire améliorer, votre visibilité dans les moteurs de recherche.</p>
            <p>Notre expertise consiste à encadrer rigoureusement cette transition SEO. Nous prévoyons des actions essentielles comme la gestion des redirections (les fameuses 301) et la restructuration des contenus pour garantir un SEO optimisé, sans rupture de performance.</p>
            <h5>Audit technique : évaluer et optimiser les fondations de votre écosystème numérique</h5>
            <p>Grâce à l’expérience de notre équipe, notamment celle de nos développeurs, nous sommes en mesure de plonger au cœur de votre infrastructure pour en comprendre les rouages.</p>
            <p>L’audit technique que nous réalisons ne se limite pas à évaluer la qualité du code ou à vérifier l’efficacité des plugins utilisés – cela fait l’objet d’analyses plus spécifiques. Ici, notre objectif est de décrypter l'architecture globale de votre projet : </p>
            <p>Sur quoi repose votre infrastructure actuelle ? <br/>
            Comment vos systèmes interagissent-ils entre eux ?</p>
            <p>Au cours de cette phase, nous développons des schémas relationnels qui permettent de visualiser les interactions entre vos différents systèmes d’information. Ce travail minutieux nous permet de repérer les améliorations possibles et, souvent, d’identifier des solutions qui vous feront gagner un temps précieux. Ce moment est clé dans l’accompagnement digital, car c’est ici que des propositions d’optimisation concrètes voient le jour. <br/>
            L’objectif final ? Poser des bases solides pour votre futur projet numérique. En comprenant parfaitement le socle technique de l’existant, nous préparons le terrain pour un développement fluide et optimisé.</p>
            <h5>Audit concurrentiel : des inspirations stratégiques pour renforcer votre projet</h5>
            <p>En plus de l’analyse de votre propre écosystème digital, il est essentiel d’examiner ce que font vos concurrents ou des sites comparables dans votre secteur.</p>
            <p>Comment structurent-ils l’information ? <br/>
            Quelles solutions mettent-ils en place pour répondre aux besoins des utilisateurs ? <br/>
            Comment optimisent-ils l’accès aux contenus et la navigation ?</p>
            <p>L’audit concurrentiel, ou benchmark, nous permet de décortiquer les pratiques des acteurs de votre marché qui partagent des problématiques similaires aux vôtres. Cette analyse comparative offre des idées précieuses pour améliorer votre site web, ajuster votre stratégie digitale, et parfois même identifier les pièges à éviter.</p>
            <p>S’inspirer, innover, se différencier</p>
            <p>L’objectif de cet audit est d’explorer ce qui fonctionne ailleurs pour inspirer des optimisations concrètes et des évolutions pour votre projet. Mais il ne s’agit pas simplement de reproduire : il s’agit de comprendre les tendances du marché, de saisir les opportunités d'innovation, et de développer une approche différenciante qui vous permettra de vous démarquer de vos concurrents.</p>
            <strong>En étudiant les stratégies de vos pairs, nous vous aidons à identifier des solutions créatives et performantes pour enrichir l’expérience utilisateur et atteindre vos objectifs de manière plus efficace.</strong>
        </section>
        <section className='banner__row'>
            <div className='banner__row__container'>
                <h4>Vous avez d’autres questions ?</h4>
                <h3>Nous avons les réponses</h3>
                <p><strong>Combien de temps dure les audits ?</strong></p>
                <p>La durée d’un audit varie en fonction de plusieurs facteurs. Le type d’audit, le périmètre d’analyse, etc.</p>
                <p>Nos audits sont généralement menés en parallèle de notre accompagnement., afin d’optimiser le temps de projet tout en garantissant une analyse approfondie. En moyenne, comptez minimum 1 semaine en temps de projet.</p>
                <p className='question'>Est-ce obligatoire de faire tous les audits ?</p>
                <p className='question'>Quels sont les livrables attendus ?</p>
                <p className='question'>J’ai déjà réalisé des audits. Est-ce bloquant ?</p>
                <p className='question'>Comment savoir quel audit choisir ?</p>
                <p className='question'>Quels outils utilisez-vous ? Est-ce un coût supplémentaire ?</p>
            </div>
        </section>
        </>
    )
}

export default AnalyseExistant

