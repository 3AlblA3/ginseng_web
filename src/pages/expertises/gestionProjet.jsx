import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function GestionProjet () {

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
                <h4>Gestion de projet</h4>
                <h2>Vous aider à organiser le déroulement du projet : planning, budget...</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>La gestion de projet dans le cadre des missions d’AMO</h3>
                <p>Véritable chef d’orchestre, le chef de projet planifie et pilote le projet. Il supervise la production et à en outre en charge la gestion du budget et le reporting. C’est l’interlocuteur central de votre projet. Celui par qui tout passe.</p>
                <p>Toutefois, s’il est votre interlocuteur principal, le chef de projet n’est jamais seul, il se fait l’écho de toute une équipe qui déploie l’ensemble de ses moyens pour mener à bien la mission que vous lui avez confiée.</p>
                <p>Notre spécificité en tant qu’agence de conseil est que notre rôle n’est pas le même suivant le temps du projet.</p>
                <p>Lors de l’avant-projet, dans le cadre de nos missions d’AMOE, nous suivons notre méthodologie qui nous permet d’aboutir à la rédaction du cahier des charges et à la sélection d’un prestataire qualifié pour votre projet. Dans ce cadre, c’est nous qui menons notre barque : nous planifions la mission d’AMOE, dans le respect des budgets prévus et nous en assurons le suivi.</p>
                <p>Lors de nos missions d’AMOA, c’est-à-dire pendant le projet, c’est l’agence en charge du projet qui a en charge la gestion du projet, la planification des étapes et le reporting. Notre rôle dans ce cadre est d’être présent à chaque étape pour apporter notre expertise et faire avancer le projet et ainsi respecter vos contraintes de planning et de budget. Nos sommes, en quelque sorte, l’huile qui vient graisser les rouages de cette gigantesque machine qu’est la gestion de projet web.</p>
                <p>Nous pouvons poursuivre ce rôle après la mise en ligne pour accompagner sur les évolutions futures du site internat.</p>
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
                    <h3>Vous pouvez compter sur notre expérience</h3>
                    <p>Pendant plus de 10 ans, Ginseng Web était une agence spécialisée dans le développement et la réalisation de projet web : conception et refonte de sites internet.</p>
                    <p>Nous avons ainsi pu développer une expertise concrète, qui nous permet notamment de vous faire des recommandations réalistes vis-à-vis de votre budget et votre planning, de vous proposer des solutions techniques pour répondre efficacement à vos problématiques, de constituer un réseau de prestataires de confiance….</p>
                    <p>Cela fait également plusieurs années que nous exerçons en tant qu’agence de conseil. Pour certains projets, nous ne réalisons que la mission d’AMOE, mais dans la plupart des cas, nous avons la chance de pouvoir accompagner nos clients jusqu’à la mise en ligne de leur site (et parfois nous continuons même à les accompagner après). Nous apprenons de chaque projet et nous tâchons au fil des missions d’affûter notre méthodologie, pour vous proposer l’accompagnement le plus efficace possible. C’est cette expérience, qui s’est construite au fil des années, que nous mettons à votre disposition pour vous aider à mener votre projet jusqu’à son terme.</p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Conduire et organiser le projet lors de l’AMOE (avant-projet)</h3>
            <h5>Déterminer la gouvernance du projet d’accompagnement</h5>
            <p>C’est un élément incontournable de notre conduite de projet : nous nous assurons dès la réunion de lancement de notre mission d’AMOE que le cadre de la gouvernance a bien été fixé. En effet, pour assurer une bonne conduite de projet, il est important de définir dès le départ le rôle et les responsabilités de chacun et de déterminer les étapes de validation. </p>
            <p>Nous avons ainsi, dès le départ, une vision claire de qui participe au projet (les membres de l’équipe projet mais également les experts à solliciter sur les problématiques spécifiques) et qui sont les instances décisionnaires. Nous nous assurons de la manière dont vont s’établir les concertations avec les membres décisionnaires, des grandes étapes de validation qui jalonneront le projet et les délais qui seront à prévoir. En effet, il est indispensable que certains éléments soient validés par toutes les parties prenantes pour assurer le déroulé de notre méthodologie (c’est le cas notamment des personae). Nous voulons aussi nous assurer que nous produirons les livrables les plus à même de fluidifier les échanges entre les différents services. Nous pouvons par exemple mettre en œuvre dans certains projets des sessions de restitutions auprès d’instances spécifiques, mais c’est un élément qu’il faut pouvoir planifier le plus tôt possible. Chaque projet à sa particularité et nous mettons un point d’honneur à nous y adapter au mieux.</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h5>La production de documents de suivi</h5>
            <p>Nous produisons tout au long du projet d’accompagnement des documents de comptes rendus des différentes réunions et ateliers et tenons à jour un fichier navette. Ce document recense les points en suspens, les questionnements et les décisions actées. L’objectif est de donner de la transparence au projet en veillant à ce que les parties prenantes partagent le même niveau d’information et soient en accord sur les décisions. Ce document est aussi un moyen pour les instances décisionnaires d’avoir une vision synthétique de l’avancement du projet.</p>
            <p>Nous utilisons l’outil « Sharepoint » pour partager et échanger sur les documents, ce qui nous permet de centraliser tous les livrables et de rendre la documentation accessible tout au long du projet.</p>
            <p>Ce fichier navette est aussi réalisé dans le cadre d’une mission d’AMOA.</p>
            <h5>L’organisation des ateliers</h5>
            <p>Les ateliers sont préparés en amont par nos soins afin d’établir une base de travail qui sera discuté et évoluera au fil de la réunion. Nous transmettons l’ordre du jour avant chaque réunion et nous prévenons le plus tôt possible si des éléments sont à fournir par le client. À l’issue de chaque atelier, nous vous remettons un compte rendu dans un délai de 5 jours.</p>
            <p>Nous prévoyons 2 heures par atelier. C’est la durée que nous jugeons optimale pour garder une implication maximale de l’ensemble des intervenants. En fonction des ateliers, des règles sanitaires et du lieu d’activité de nos bureaux respectifs, nous pourrons mener les ateliers à distance via visioconférence, ou bien en présentiel dans vos locaux.</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h5>Vous aider à cadrer votre futur projet</h5>
            <p>L’un des enjeux de la mission d’AMOE est de vous aider à cadrer votre futur projet avec votre prestataire. C’est pourquoi nous constituerons avec vous un budget estimatif réaliste suivant les fonctionnalités demandées et un planning prévisionnel (avec découpage par briques fonctionnelles) qui prennent également en compte vos contraintes. Ces éléments sont intégrés dans le CCTP pour que les agences répondantes vous apporte des réponses satisfaisantes sur ces éléments fondamentaux.</p>
            <p>Lorsque nous recevons les propositions des candidats, nous constitutions un tableau d’analyse et de comparaison des offres ainsi qu’une fiche de notation commentée pour vous aider à sélectionner le prestataire qui sera le plus à même à mener à bien votre projet.</p>
            <h3>Vous assistez dans toutes les phases du projet dans le cadre de l’AMOA (pendant le projet)</h3>
            <h5>Vous accompagner sur le suivi du projet </h5>
            <p>Lors de l’AMOA, c’est le prestataire sélectionné pour la réalisation du projet qui aura la charge de sa planification, de sa gestion et de la mise en place d’un reporting régulier. Les agences web s’appuient généralement sur des logiciels de gestion de projet tel que Monday, Notion, Basecamp ou encore Trello pour rassembler l’ensemble des informations sur le projet. Ce sont des logiciels que nous connaissons bien et que nous pourrons vous aider à prendre en main.</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <p>Si l’agence a en charge la réalisation des comptes rendus, nous assurons de notre côté des relectures de ces documents pour y apporter des précisions lorsque nécessaire. Nous tenons également de notre côté un fichier navette, que nous partageons avec vous, qui nous suit tout au long du projet et que nous annotons à chaque réunion. Nous pouvons ainsi faire le point régulièrement sur les éléments qui sont en attentes, mettre en valeur des fonctionnements qu’il faudra penser à spécifier sur les fiches fonctionnelles, etc.</p>
            <h5>Partager notre expertise pour faire avancer le projet</h5>
            <p>Notre objectif en tant qu’agence de conseil est de rendre le projet le plus fluide possible. Lorsque cela est nécessaire, nous aidons à l’arbitrage des décisions (concernant une fonctionnalité, le budget, le planning…) en faisant bénéficier de notre expérience dans la réalisation de projets web.</p>
            <p>Nous provoquons des temps de réunion « internes » avec l’équipe projet pour permettre d’avancer plus rapidement. Par exemple, lors de la phase de conception, nous prévoyons des temps en dehors du projet pour réunir l’ensemble des retours et les formaliser sur les maquettes et les gabarits. Nous prévoyons aussi des sessions de travail avec l’équipe projet, lors de la phase de validation des spécifications fonctionnelles. Ces temps d’échange, nous permettent également de faire la démonstration de certains outils, conseiller sur une approche, aider à constituer un fichier de migration, rédiger des documents de synthèses, conduire des entretiens avec des interlocuteurs clefs, etc…</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <p>En phase de développement, nous proposons des solutions pour recueillir les éléments nécessaires à l’avancée du projet, par exemple, en encadrant la migration des données, en sollicitant les bons interlocuteurs, en produisant des notices explicatives… Nous vous conseillons également pour améliorer votre productivité lors de la phase de recette.</p>
            <p>Après la mise en ligne, nous pouvons continuer à vous accompagner sur toutes les problématiques numériques, notamment sur la phase d’accompagnement et de formation des équipes, ainsi que sur la phase d’évolution qui interviendra éventuellement une fois le site confronté à la réalité. Cette phase qui porte le nom de TMA ou Tierce Maintenance Applicative est souvent gérée en interne par vos équipes. Il arrive cependant que certains clients nous demande de participer à la TMA de manière ponctuelle ou quand certains sujets importants surviennent.</p>
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

export default  GestionProjet
