import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function GabaritsErgonomiques () {

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
                <h4>Gabarits ergonomiques</h4>
                <h2>Anticiper le travail des maquettes de votre site web</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Réfléchir à l’organisation des pages clés</h3>
                <p>Gabarit, Zoning, Wireframe, Mock-up, maquette fonctionnelle, prototype de site web… différents termes sont employés pour désigner la représentation basique des pages clés d’une interface. Chez Ginseng Web, nous parlons de gabarits ergonomiques. C’est une étape qui intervient en amont de la construction des maquettes du site internet, une fois que l’on a une idée concrète de l’architecture du futur site et des pages qui vont le composer.</p>
                <p>L’objectif principal lors de la réalisation d’un gabarit ergonomique est la mise en place d’un agencement idéal des fonctions au sein de chaque page, selon les attentes des internautes et des contenus, sans prendre en considération le design. On est donc ici pleinement dans le cadre d’une démarche UX qui vise à construire les pages du site en prenant en compte les besoins des utilisateurs. Démarche que nous mettons en place lors de l’accompagnement opérationnel de nos clients en AMOA.</p>
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
                <h3>Une étape préparatoire aux maquettes de votre site web</h3>
                <p>Il n’y a pas d’intention graphique à ce stade, on part généralement sur un maquettage web en noir et blanc, avec une typographie basique et des blocs simplifiés réalisés à l’aide de logiciel de conception tel que Figma, Miro ou encore Adobe XD. L’idée est de pouvoir faire rapidement plusieurs constructions visuelles de la page, en agençant différemment les espaces qui la compose. En bref, c’est l’occasion d’essayer, de tester, de corriger, de recommencer…  car il sera bien plus difficile de faire bouger les choses lorsque le graphisme sera en place.</p>
                <p>Les gabarits ergonomiques sont donc un véritable outil de réflexion. Ils doivent pouvoir évoluer en même temps que le projet se concrétise, que la vision du futur site, de l’intranet, de l’application… s’affine. </p>
                <p>L’idée également derrière cette schématisation est de se concentrer sur l’aspect fonctionnel sans se préoccuper des enjeux graphiques (qui ont tendance à capter l’attention).</p>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Les gabarits , un outil clé pour votre projet</h3>
                    <p>Voici 5 bonnes raisons qui pourront peut-être vous convaincre (si ce n’est pas déjà fait) d’adopter le principe des gabarits ergonomiques.</p>
                    <p>Les gabarits permettent de :</p>
                    <ul>
                        <li><strong>Vérifier</strong> que l’ergonomie de chaque page répond bien aux objectifs fixés.</li>
                        <li><strong>S’assurer</strong> qu’aucune fonctionnalité ou information n’ont été oubliées</li>
                        <li><strong>Donner</strong> un cadre clair au graphiste et lui permettre et de se concentrer uniquement sur son expertise.</li>
                        <li><strong>Gagner</strong> du temps sur la phase des maquettes en évitant les allers-retours</li>
                        <li><strong>Préparer</strong> le contenu éditorial et iconographique du futur site ou de l’application.</li>
                    </ul>
                </div> 
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div> 
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Quelles sont les étapes de la conception des gabarits ?</h3>
            <p>Les gabarits ergonomiques sont au cœur du processus de conception d’un site web ou d’une application. Lors de nos missions d’AMOE, nous les réalisons en co-constructions avec l’équipe projet à l’occasion d’ateliers afin de déterminer ensemble la hiérarchie des éléments sur chaque page-clés.</p>
            <p>Nous intégrons ensuite les pages réalisées en annexe du cahier des charges lors des appels d’offres afin que les agences répondantes puissent en prendre connaissance également.</p>
            <p>Lors des ateliers de co-construction des gabarits, nous travaillons sur la base d’un tableau blanc interactif Miro qui facilite le travail collaboratif. C’est un outil qui permet de schématiser facilement les contenus des pages d’un site ou d’une application, et qui intègre des systèmes d’annotation et d’intégration de commentaires.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>En amont de l’atelier, nous listons et nous faisons une ébauche des différents éléments et fonctionnalités susceptibles de composer les pages qui seront prototypées afin d’interroger l’équipe projet sur leur pertinence.</p>
            <p>Durant les ateliers, nous faisons évoluer ces différentes briques fonctionnelles en prenant en compte les contraintes, les cas particuliers, les besoins, les envies… qui nous sont communiquées par l’équipe projet puis nous les agençons sur des fonds de page, en veillant à la hiérarchie de l’information, au bon enchaînement des éléments et à la cohérence globale de la page. Nous appliquons notre expertise pour assurer le respect des grands principes ergonomiques, la prise en compte des parcours utilisateurs mais également pour informer sur les possibilités techniques.</p>
            <p>Après les ateliers, nous retranscrivons les gabarits sur le logiciel Figma. Nous produisons ainsi des documents mis en forme représentant les pages clés travaillées, au format desktop et/ou mobile, afin de disposer d’une version finalisée permettant de se projeter dans le projet que cela soit une application, la refonte d’un intranet ou la création d’un extranet.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Suivant le type de projet, nous pouvons réaliser des prototypes animés, sur la base des gabarits. À l’aide de Figma, nous simulons les transitions entre les différents écrans pour permettre de naviguer aisément dans le prototype du site web ou de l’application. Nous prévoyons un temps de formation pour permettre à l’équipe projet de manipuler le prototype aisément.</p>
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

export default  GabaritsErgonomiques
