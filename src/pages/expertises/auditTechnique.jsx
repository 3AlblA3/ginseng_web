import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AuditTechnique () {

    const [selectedCategory, setSelectedCategory] = useState('Droitico');

  const categories = [
    'Droitico',
    'DIFCAA',
    'MLS Communication'
  ];

  // Définition des variables des cas clients

  const casClients = {
    'Droitico': {
      image: '8.png',
      description: "Tout au long des ateliers collaborateurs organisés par Ginseng Web, nous avons été impressionnés par leur écoute attentive et leur compréhension fine de nos enjeux et contraintes. Cela a permis de bâtir une relation de confiance solide, bénéfique pour la réussite du projet à chaque étape. Leur expertise technique et éditoriale, combinée à des conseils toujours pertinents, nous a grandement aidés. Leur réactivité et leur capacité à proposer des solutions adaptées ont été des atouts majeurs.",
      author:"Célestin TOWANOU, directeur général SANCFIS"
    },
    'DIFCAA': {
      image: '9.png',
      description: "La refonte de notre site e-commerce avec Ginseng Web a été d'une qualité exemplaire. Leur équipe a su s'adapter aux défis spécifiques de notre plateforme B2B et B2C, en proposant des solutions sur mesure et en intégrant des fonctionnalités techniques avancées pour nos éclatés techniques. Leur écoute attentive et leur expertise nous ont permis d'obtenir un résultat parfaitement aligné avec nos attentes. Nous avons pu nous désolidariser d'une solution qui ne répondait plus du tout à nos attentes et nous allons clairement travailler sur de futurs projets avec eux, en toute confiance.",
      author:"M. Manoukian, Directeur Général de DIFCAA"

    },
    'MLS Communication': {
      image: '10.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisi rutrum, ultricies tellus vitae, ullamcorper dolor. Aenean pellentesque arcu vel turpis dignissim blandit. Mauris varius lorem eget massa elementum iaculis. In venenatis erat a dolor facilisis ultricies. Aliquam eu tellus a ex aliquet maximus. Nullam vitae porttitor dui, id tristique mauris. Phasellus euismod orci mollis, hendrerit orci eu, tristique elit.",
      author:"Fernando Ecclesia, dirigeant de MLS Communications SARL"
    },
  };

    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Audit technique</h4>
                <h2>Faire un état des lieux technique de votre site (code, performance, accessibilité...)</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Audit technique dans le cadre d’une optimisation continue</h3>
                <p>Un site internet a une durée de vie plus ou moins importante en fonction de son secteur d’activité et la concurrence à laquelle il doit répondre. Ainsi l’équipe projet d’un site e-commerce va suivre un certain nombre d’indicateurs. Elle va ensuite opérer régulièrement des optimisations sur son site en fonction de ces derniers.</p>
                <p>L’amélioration continue de son site internet est vitale pour toute entreprise dont l’activité dépend de celui-ci. Dans le cadre de cette optimisation un audit technique du site peut être réalisé. Cet audit technique peut être général ou plus spécifique.</p>
                <p>Il n’est pas rare qu’un audit technique soit déclenché en fonction d’un point bloquant ou d’un retour d’utilisateurs sur certaines problématiques. L’audit a ici pour objectif de trouver le défaut afin de pouvoir le corriger. Nous réalisons alors un audit du code source, des plugins installés et de certains éléments pour déterminer si l’ensemble est conforme.</p>
                <p>Dans la pratique, nous effectuons assez peu d’expertises techniques de sites en amélioration continue car ce n’est pas notre cœur de métier. Ce type d’expertise peut durer plusieurs jours à plusieurs semaines et convoquer de nombreuses compétences.</p>
            </article>
            <article className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/miro.png`} alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
                <div className='banner__row__container'>
                    <h3>Audit technique dans le cadre de la refonte d’un site internet</h3>
                    <p>À l’inverse nous réalisons régulièrement des audits techniques dans le cadre d’un projet de refonte d’un site internet. En effet les clients souhaitent savoir dans quel état est le site techniquement avant la refonte.</p>
                    <p>Dans le cadre de nos missions d’AMOE l’audit est intégré en annexes lors de la rédaction du CCTP et donc inclus dans l’appel d’offres afin que les agences répondantes aient toutes les informations.</p>
                    <p>L’expertise technique sollicitée dans le cadre de ce type de projet consiste à se focaliser sur l’existant en gardant en tête qu’un projet de refonte est engagé. Ainsi l’objectif ici n’est pas de repérer des éléments à corriger ou des éléments pouvant poser des problèmes mais de comprendre l’existant techniquement. On observe aussi quelles sont éventuellement les briques techniques pouvant être conservées.</p>
                    <p>Dans le cadre de notre accompagnement technique, il peut aussi arriver que nous mettions le doigt sur certains éléments problématiques et que nous proposions alors des correctifs à réaliser le temps que le projet de refonte se réalise.</p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Un Audit technique concrètement c’est quoi ?</h3>
            <p>Comme on a pu le voir précédemment un audit technique est un terme générique qui recouvre plusieurs types d’audits (dont l’audit SEO dont on ne parlera pas ici).</p>
            <h5>Audit de code</h5>
            <p>L’audit du code source d’un site internet est sans doute le type d’audit que l’on attend principalement quand on mentionne un audit technique.</p>
            <p>Il peut intervenir soit dans le cadre d’une optimisation (afin de corriger un point) soit dans le cadre d’une AMOE (afin de déterminer ce qui est utilisable).</p>
            <p>La plupart des sites Internet que nous rencontrons dans le cadre de notre activité d’accompagnement digital sont animés par un CMS (WordPress, Drupal, Typo 3..) et donc le code source de ces sites est celui de ces CMS. Cependant les CMS ont des limites et la plupart du temps il y a des plugins ou add-ons qui viennent combler ces limites. Et quand cela ne suffit pas du développement spécifique peut-être réalisé.</p>
            <p>Nous pouvons donc le constater il y a souvent plusieurs couches de codes qui doivent interagir entre elles. À cela s’ajoute dans certains cas le non-respect des bonnes pratiques recommandées lors de l’usage d’un CMS. L’audit de code va donc avoir pour objectif de déterminer si les bonnes pratiques sont respectées dans un premier temps, si d’un point de vue sécurité le code exécuté ne présente pas de risque majeur et si un conflit n’a pas lieu entre plusieurs codes (CMS, plugins et développé).</p>
            <p>Des outils comme Balckfire ou NewRelic vont permettre d’analyser les flux d’exécutions et de détecter les problèmes. Couplé à une analyse du code source cela permet de remédier à des situations problématiques et permet ainsi au site de continuer son existence pendant la durée du projet.</p>
            <div className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <p>Quand nous intervenons dans le cadre d’un accompagnement digital l’audit de code nous permet de comprendre ce qui est en place et de déterminer si certaines briques logicielles peuvent être réutilisées. Cela nous arrive fréquemment de pouvoir déterminer s’il convient ou non de garder l’existant. C’est une source d’économie qui peut être importante et c’est aussi la garantie de gagner un peu de temps. Cependant les agences sont très réticentes à reprendre du code dont elles ne sont pas à l’origine. C’est pourquoi nous mettons en œuvre cet audit en amont et qu’il est réalisé dans la phase d’analyse de l’existant. Cela va permettre aussi de rassurer les candidats.</p>
            <h3>Audit de performances</h3>
            <p>La performance d’un site internet est au cœur des conversations depuis plusieurs mois car le maître du web (Google) a décidé de sanctionner les sites trop lents dans les résultats de recherche.</p>
            <p>Cette décision qui s’accompagne bien sûr d’indicateur aux dénominations plus barbares les unes que les autres (LCP, CLS, INP, FCP etc..) a fait trembler la toile car depuis l’apparition des connexions haut débit les sites internet ont pris du poids voir beaucoup de poids passant de quelques dizaines de Ko à presque 10 Mo en 2023 [la réponse de ChatGPT sur cette question].</p>
            <p>La question maintenant est de savoir comment faire pour rendre plus performant un site tout en négociant avec l’ensemble des acteurs qui ne veulent pas d’un site moins beau, moins animé ou avec moins de vidéos. La prise en compte des besoins primordiaux des personae peut aider à trancher certaines questions.</p>
            <p>Cependant même si techniquement plusieurs éléments peuvent être convoqués pour permettre d’améliorer la performance (comme l’utilisation de systèmes de cache, les optimisations côté serveur ou encore l’optimisation du code) il est un critère qui ne pourra pas changer c’est le nombre d’éléments que l’on va charger sur une page. En effet les sites présentent tous beaucoup d’informations et souvent ces informations sont visuelles. Chaque image a un poids et un impact sur le temps de chargement du site et il faut en avoir conscience.</p>
            <p><strong>L’audit de performance va donc chercher si techniquement des améliorations sont possibles et va aussi sensibiliser les éditeurs d’un site sur le poids de chaque élément</strong> et sur la nécessité de chaque élément convoqué sur une page.</p>
        </section>
        <section className='content__block__row'>
        <div className='content__block__insight'>
                <h5>Insight</h5>
                <p>Face aux problèmes techniques : les écueils à éviter</p>
                <p>Il est important de cerner au mieux le profil de vos contributeurs et le « rythme de vie » de votre projet pour éviter une de ces deux voies :</p>
                <ul>
                    <li>Choisir la solution de facilité : on vous propose le système en vogue et vos équipes devront s’y adapter sans tenir compte de leur métier,</li>
                    <li>Réaliser une usine à gaz : on développe une solution trop complexe en essayant de tenir compte de toutes les contraintes et en utilisant des briques logicielles fermées ou propriétaires.</li>
                </ul>
                <p>Notre expertise technique quand elle est sollicitée, soit en amont lors de la phase d’AMOE ou en aval lors de la phase d’AMOA, permet de trouver une troisième voie respectueuse des utilisateurs et utilisant des solutions techniques adaptées.</p>
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Audit d’accessibilité</h3>
            <p>L’objectif principal d’un audit d’accessibilité web est de vérifier si le contenu numérique est conçu de manière à être utilisable et accessible par tous, indépendamment de leurs capacités physiques, cognitives ou sensorielles.</p>
            <p>Expert en évaluation de l’accessibilité numérique d’un site internet, Ginseng Web, a à cœur de défendre l’accessibilité dans l’ensemble des projets auxquels il participe. Cela implique de pouvoir faire respecter de la phase de conception d’un site internet les règles du RGAA. C’est un point que nous mettons en avant lorsque nous accompagnons des clients en AMOA car l’ergonomie et le graphisme d’un site vont jouer énormément dans l’accessibilité d’un site.</p>
            <p>Dans le cadre d’un projet en AMOE l’accessibilité numérique est souvent mentionnée car nous sommes en présence fréquemment d’association ou d’entités publiques. Pour ces clients c’est une obligation que de rendre accessible leur site internet.</p>
            <div className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <p>L’audit ou l’évaluation de l’accessibilité d’un site va faire appel à des compétences techniques (notamment pour vérifier que le code du site ne va pas à l’encontre des recommandations du RGAA en bloquant par exemple la navigation au clavier) mais aussi à des compétences éditoriales, graphiques ou encore ergonomiques. L’accessibilité est au croisement de plusieurs expertises et le contenu d’un site se doit aussi d’être accessible. Il en est ainsi des tableaux de données, des graphiques, des documents associés etc..</p>
            <p>Dans le cadre d’un accompagnement, nous mentionnons dans le CCTP ou le cahier des charges le souhait ou l’obligation du client à se faire auditer. Cela prévient les agences répondantes de ce besoin et permet de sélectionner les agences à même d’y répondre.</p>
            <p>L’audit d’accessibilité est alors réalisé par un prestataire tiers, proposé par l’agence en charge de la réalisation ou par Ginseng Web</p>
            <h3>Analyse des flux d’échanges entre outils</h3>
            <p>Pour ce dernier type d’audit technique il s’agit plus d’une analyse technique du site web que d’un audit.</p>
            <p>Afin qu’un projet puisse être réalisé et surtout puisse dépasser ses objectifs de départ il est important de comprendre les flux de données qui peuvent être en jeu.</p>
            <p>S’il y a quelques années un site internet pouvait n’exister que par lui-même il est de plus en plus fréquent de voir des interactions entre plusieurs systèmes d’information. Et c’est ce qui fait d’ailleurs la force d’internet actuellement. Découvrir ces liens, imaginer ces liens ou comprendre ces liens fait partie de cette analyse des flux que nous proposons. Nos expériences nous ont amenés à mettre en place de nombreux connecteurs entre plusieurs systèmes d’information, développer des API et créer des ponts avec des outils métiers très divers.</p>
            <p>Comprendre les schémas entre les différents systèmes est ce qui fait notre force et permettra à votre projet de passer une étape supérieure et à votre équipe projet de gagner du temps sur leurs tâches quotidiennes.</p>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Un cas concret : un audit technique pour optimiser le parcours des utilisateur dans un ERP</h3>
                    <p>Lors de notre accompagnement technique dans le projet de refonte de l’ERP de la CRCC de Paris, nous avons dans un premier temps échangé avec les équipes pour comprendre le fonctionnement et les différents outils utilisés et reliés ou non à l’ERP actuel.</p>
                    <p>Dans un second temps, nous avons poussé la réflexion pour un parcours optimisé. Nous avons ainsi proposé des connecteurs entre le nouvel outil métier et un logiciel d’emailing, un logiciel de gestion d’événements ou encore un logiciel d’envoi de courrier papier. Cela dans l’optique de gagner du temps au quotidien.</p>
                </div>  
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Et l’éco-conception ?</h3>
                <p>Depuis quelques mois le sujet de l’éco-conception fait son apparition dans les appels d’offres publics et dans les consultations. Le numérique a un impact non négligeable sur le développement des gaz à effets de serre et ce à travers 2 facteurs : l’hébergement du site et la bande passante nécessaire à afficher le site.</p>
                <p>La première question à se poser est donc de savoir si le projet que l’on doit réaliser à une réelle utilité. Il est important de se questionner sur ce point avant de lancer un projet numérique. Une fois acté l’utilité du projet, les questionnements sont nombreux pour rendre un site internet le moins consommateur d’énergie : poids des pages, poids des images, animations, vidéos, hébergement… Nous allons porter ces questions avec vous lors des différentes phases d’accompagnement afin de préciser clairement sur les documents constituant l’appel d’offres quelles sont les attentes sur ce point. L’éco-conception fait maintenant partie des sujets à aborder lors d’une mission d’accompagnement digital.</p>
                <p>Un référentiel d’éco-conception numérique des services est disponible en ligne.</p>
            </article>
            <article className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/miro.png`} alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
        <div className='accueil__section__casClient'>
          <h3>Découvrez nos cas clients</h3>
          <div className='accueil__section__casClient__menu'>
          {/* Gestion du menu */}
          {categories.map((category) => (
            <h3 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}>
              {category}
            </h3>
          ))}
        </div>
        <div className='accueil__section__casClient__container'>
          {/* Affichage des cas clients dépendamments des contenus */}
          {categories.map((category) => (
            <div 
              key={category} 
              className={`fade-section ${selectedCategory === category ? 'active' : ''}`}>
              <img 
                src={`${import.meta.env.VITE_IMAGE_PATH}/${casClients[selectedCategory].image}`}
                className='accueil__section__casClient__container__img'
                alt={category}/>
              <div className='accueil__section__casClient__container__text'>
                <p>{casClients[category].description}</p>
                <p>{casClients[category].author}</p>
                <Link to='/cas' className='button__white'>
                  Voir le cas client
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default AuditTechnique