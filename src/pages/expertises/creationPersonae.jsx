import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function creationPersonae () {

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
                <h4>Création des personae</h4>
                <h2>Comprendre les objectifs des utilisateurs d'un site ou d'une application</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Une étape clé pour concevoir un site centré utilisateur</h3>
                <h5>Concevoir un site pour ses cibles</h5>
                <p>La démarche user centric qui consiste à placer l’utilisateur au centre de la démarche de création est au cœur de notre méthodologie de projet, que cela soit lors de nos missions d’AMOE, en vue de la rédaction du CCTP, ou nos accompagnements AMOA.</p>
                <p>En effet, il nous parait impensable aujourd’hui de construire un projet digital qui ne prendrait pas en considération les besoins et les objectifs des utilisateurs finaux. C’est pourquoi lors de nos missions, nous nous assurons que le travail de conception respecte les parcours utilisateurs et leur permette d’accomplir ce qu’ils étaient venus faire sur le site. Et pour cela, notre arme infaillible est la création des personae qui est un des outils en ergonomie web que nous déployons.</p>
            </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
            <article className='content__block__img'>
                <img src="miro.png" alt="miro"/>
            </article>
            <article className='content__block__row__container__sticky'>
                <h5>Les personae sont des archétypes d’utilisateurs</h5>
                <p>Les personae sont des personnages fictifs, construits à partir de données réelles afin de modéliser les utilisateurs cibles d’une interface.</p>
                <p>Découvrez notre méthode pour définir les cibles de votre site internet.</p>
                <p>Ils possèdent une histoire, un âge, un métier et des missions. Chaque persona représente un groupe d’utilisateurs et l’ensemble des personae représente la totalité des cibles d’un site ou d’une application.</p>
                <p>Le principal objectif des personae est de permettre à l’équipe projet de regarder à travers les yeux des utilisateurs finaux au moment de la conception du site et du développement.</p>
                <p>Pour leur élaboration, nous nous basons sur toutes les données disponibles sur les utilisateurs : analyse des statistiques de consultation du site, études de marché, échanges de mails avec certains utilisateurs, échanges sur les réseaux sociaux ou lors de salons, entretiens individuels, questionnaires, etc. En effet, il s’agit d’une représentation fictive, mais réaliste des utilisateurs que l’on souhaite toucher avec le site ou l’application qui sera développée.</p>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Inventer des utilisateurs, c'est facile, non?</h3>
                    <p>Si elle semble simple à appréhender, la méthode des personae demande rigueur et investissement notamment dans la recherche et le recueil de données quantitatives et qualitatives sur les cibles.</p>
                    <p>Même si leur réalisation demande un peu d’imagination, les personae ne doivent pas se construire sur des intuitions, des anecdotes, des aprioris… mais bien sur la base de données réelles.</p>
                    <p>Correctement exploités, c’est un outil ergonomique redoutable qui vous permettra d’offrir une meilleure expérience utilisateur (UX : user experience).</p>
                    <button className='button__white'> Découvrir la définition des cibles</button>
                </div> 
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div> 
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Notre méthode pour concevoir des persona efficaces</h3>
            <h5>Un atelier indispensable lors de nos accompagnements</h5>
            <p>Soyez prévenus, la création des personae est une étape incontournable lors d’une AMO avec Netemedia. Lors de l’AMOE, nous prévoyons généralement plusieurs ateliers sur cette problématique (que nous pouvons également mener lors de nos AMOA si cette phase n’a pas été prévue par le prestataire). Ce sont des ateliers que nous menons de manière collaborative avec vos équipes et des moments toujours riches d’échanges qui sont généralement appréciés.</p>
            <p>En support des ateliers (car il faut généralement deux ateliers pour pouvoir définir précisément l’ensemble des personae d’un projet) nous avons constitué un tableau blanc MIRO spécifique. Nous avons fait évoluer ce tableau MIRO, au fil du temps, pour le rendre le plus efficace possible afin d’établir des personae précis selon des étapes faisant évoluer la réflexion de manière fluide et ludique (autant que possible, tout du moins).</p>
            <p>Lors de nos missions d’AMOE, nous nous assurons que les personae réalisés sont réalistes et prennent bien en compte les différents éléments clés que nous allons vous exposer à présent. Ils seront en effet à la base des réflexions pour construire l’arborescence du site et cadrer le projet.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <h5>Répertorier l’ensemble des cibles du site et les regrouper</h5>
            <p>La première question à se poser lors de la création des personae est : qui va utiliser le site ?</p>
            <p>Il est important de prendre un temps pour répertorier les cibles du site, aussi bien les cibles externes que les cibles internes à votre organisation et de lister pour chaque cible, les différents profils qui l’incarne.</p>
            <p>En effet, les utilisateurs cibles sont segmentés en profils distincts. Chaque profil type / persona va représenter un groupe d’utilisateur. Par exemple : dans le cadre de la refonte du site d’une mairie, les habitants de la commune représente la cible principale. Mais cette cible peut être scindée davantage : l’habitant peut être un jeune, un retraité ou une mère/père de famille… et leur besoin sur le site sera surement différent.</p>
            <p>Ce premier temps permet donc de se questionner sur les cibles que l’on peut regrouper ensemble (et qui seront donc incarnés par un unique personae) ou celles sur lesquelles il est nécessaire d’avoir plus de granularité (et qui seront incarnés par deux, voire trois personae). Tout dépend de votre projet, secteur… Toutefois, nous recommandons de ne pas avoir plus de 4 personae afin de concentrer le site sur leurs besoins principaux. Les besoins du persona primaire étant ceux prioritaire par rapport aux personae secondaire, tertiaire…</p>
            <h5>Hiérarchiser les cibles et définir leurs caractéristiques</h5>
            <p>L’un des bénéfices de la méthode des personae est de hiérarchiser les cibles et ainsi pouvoir déterminer lors de la phase de conception, quelle résolution des besoins sera prioritaire.</p>
            <p>Par exemple, pour une Fédération dont la cible principale est l’adhérent et la cible secondaire est l’adhérent potentiel. La page d’accueil du site devra donc s’adresser aux deux cibles : permettre à l’adhérent de trouver rapidement le document qu’il recherche, et à l’adhérent potentiel d’en savoir plus sur l’organisme pour valider ou non son envie d’adhérer. Toutefois, le personae principal étant l’adhérent, c’est à son besoin que l’on cherche à répondre en priorité et ainsi pourquoi pas, lui proposer un champ de recherche dès son entrée sur le site. Un encart réservé à la présentation de la Fédération pourra être affiché dans un second temps, pour répondre aux besoins d’informations de l’adhérent potentiel.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Dans un temps deux, nous cherchons donc à déterminer, avec vous, à quelle cible le site s’adresse en priorité. Puis pour chaque cible nous déterminons quels sont leurs niveaux de compétences et de connaissance. Si l’on reprend l’exemple précédent, sur la fédération, nous pourrons par exemple évaluer leur niveau de connaissance concernant la Fédération (élevée pour le persona primaire, plutôt bas pour le persona secondaire). L’évaluation de ce critère permettra notamment de déterminer dans quelle mesure il sera nécessaire d’adapter le contenu et l’accès aux informations.</p>
            <h5>Donner vie aux personae</h5>
            <p>C’est généralement l’étape la plus appréciée de l’atelier : rédiger le roman de vie des personae.</p>
            <p>Elle demande à faire preuve d’imagination, sans oublier toutefois qu’elle se base sur des données réelles. Ainsi, si les analytics du site existant révèlent que vos utilisateurs principaux sont des femmes de plus de 55 ans, la cible ne pourra pas être incarnée par le personae de Cédric, 35 ans.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Pour donner vie aux personae, il nous semble important de leur donner un nom, un prénom et un âge. Nous apprécions également leur attribuer une photo, ce qui donne des personae plus incarné et permet de mieux se projeter. Les notions de professions et de lieux géographiques sont plus ou moins importantes selon le projet mais donnent des informations importantes. Si des entretiens et des questionnaires ont été menés en amont, il est intéressant d’y intégrer des verbatim donnant à voir ce que le personae dit sur l’organisme, le produit ou le service. Enfin, nous recommandons d’installer le personae dans une histoire, sans entrer trop dans le descriptif, mais en donnant quelques indications sur sa situation familiale et ses hobbies.</p>
            <p>Une étape importante également consiste à évaluer l’état d’esprit du personae lors de sa visite sur le site (s’il est sans une attitude positive ou non, s’il a du temps à consacrer à sa visite ou s’il est pressé, s’il se trouve dans un environnement plutôt stressant ou au contraire relaxant…)</p>
            <h5>Définir les besoins et les usages du persona</h5>
            <p>Ce dernier point est au cœur de la création des personae, une fois que nous nous sommes familiarisés avec nos personae, il est nécessaire de définir quels sont leurs besoins par rapport au site, en précisant bien à quel moment et dans quel but. Une hiérarchie peut également être définie, il est possible que l’utilisateur final ait plus besoin de consulter un document que de contacter l’organisme, mais ces deux besoins devront être pris en compte sur le futur site.</p>
            <p>Lorsque cela est possible, il est bien d’expliquer comment sur l’existant le personae peut déjà répondre à ce besoin, car il est toujours bon de tabler sur des habitudes existantes pour concevoir une nouvelle fonctionnalité.</p>
            <p>Enfin, lors de cette dernière étape de l’atelier, nous tâchons de mettre en avant quelles sont ces craintes et ces frustrations (si la crainte de l’utilisateur est l’étape de paiement, il serait judicieux de le rassurer sur ce point tout au long de sa visite sur le site) et les fonctionnalités et les rubriques qui seront clés pour lui sur le futur site. Puis, généralement, sur les dernières minutes restantes (si l’atelier se fait le matin, c’est généralement à ce moment-là que l’estomac se met à gargouiller), nous tâchons de nous projeter sur une situation d’usage sur le futur projet.</p>
            <h5>Des fiches qui vont suivront tout au long du projet</h5>
            <p>À l’issue des ateliers nous formaliserons les éléments en créant une fiche synthétique et mise en forme pour chaque persona, pour une consultation agréable et simplifiée pendant toute la durée du projet.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
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
                src={casClients[category].image} 
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

export default  creationPersonae
