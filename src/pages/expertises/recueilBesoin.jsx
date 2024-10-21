import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function RecueilBesoin () {

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
                <h4>Recueil des besoins</h4>
                <h2>Recueillir l'expression de besoins : questionnaires, entretiens et ateliers</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Construire un projet qui répond à vos besoins</h3>
                <p>L’expression et la formalisation des besoins sont des étapes incontournables dans la construction d’un projet digital car elles doivent ensuite être exprimées dans le cahier des charges. C’est une étape que nous proposons généralement lors de nos missions d’AMOE (assistance à maîtrise d’œuvre – en amont), car il est important que l’agence qui sera en charge de votre projet puisse vous proposer les solutions qui répondront le mieux à vos objectifs.</p>
                <p>C’est pourquoi chez Ginseng Web, nous accompagnons nos clients, en organisant pour eux une phase de recueil de l’expression de besoins, suivant la spécificité de leur projet. Nous prenons également en compte les contraintes (budget, planning…) pour définir la méthodologie de projet la plus adaptée que ce soit pour la refonte ou la création d’une application, d’un site internet ou de tout autre type de dispositif numérique.</p>
                <p>Ainsi nous proposons, et combinons, plusieurs méthodes pour organiser le recueil des besoins sur les différents éléments constitutifs du projet (tel que le contenu, les fonctionnalités, le graphisme, l’aspect technique…) par le biais d’ateliers collaboratifs, d’entretiens et de questionnaires.</p>
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
                    <h3>Pourquoi la phase de recueil des besoins est-elle nécessaire dans un projet numérique ?</h3>
                    <p>Lors de la phase du recueil, on cherche à mieux comprendre les enjeux du projet et à explorer les différentes orientations possibles du projet. L’analyse de l’existant est souvent la première phase de ce travail qui est ensuite appronfondie dans le recueil des besoins. Il est important de rester objectif et de ne pas tirer de conclusions sur les solutions à apporter au stade trop tôt, car nous ne disposons ni du recul, ni de l’ensemble des éléments nécessaires pour apporter une réponse adéquate.</p>
                    <p>Le temps de formalisation des besoins est primordial, et s’il représente un investissement, il permet un temps de réflexion nécessaire pour éviter des erreurs qui pourraient s’avérer très coûteuses.</p>
                    <p>Par le biais des ateliers, des entretiens et des questionnaires nous construisons des bases solides, validées par l’ensemble des parties prenantes, pour la construction d’un projet pérenne qui atteindra ses bonnes cibles.</p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Un travail exploratoire pour bien définir le cadre du projet</h3>
            <p>En amont du projet, nous accompagnons les entreprises et les organismes dans la définition du périmètre de leur projet web, en allant interroger les bons interlocuteurs, en faisant se confronter les différents points de vue, en produisant des outils d’aide à la décision, en vérifiant la cohérence entre les objectifs et l’environnement interne…</p>
            <p>À travers les questionnaires, les entretiens individuels et les ateliers collaboratifs, nous menons un travail d’enquête, qui débouche sur des recommandations stratégiques qui définiront le cadre et le périmètre du projet.</p>
            <p>L’accompagnement vise également à la production de livrables, qui permettront une bonne transmission de l’information à toutes les parties prenantes du projet et constitueront des outils d’aide à la décision utiles tout au long du projet.</p>
            <p>C’est lors de cette phase exploratoire que nous validons avec la direction les choix réalisés avec l’équipe projet afin que le projet puisse être porté par l’ensemble de la structure.</p>
            <h5>Questionnaires exploratoires : récolter des informations pour valider des hypothèses</h5>
            <p>Le questionnaire exploratoire est une technique d’enquête quantitative qui permet d’interroger rapidement un grand nombre d’utilisateurs, existants ou potentiels, sur leurs attentes et leurs besoins. Particulièrement adapté lorsque l’on souhaite valider un concept ou des hypothèses, il peut être utile également pour identifier des points de blocage sur l’existant.</p>
            <p>Lors de la réalisation de questionnaires exploratoires, nous prenons en charge la construction du questionnaire, en veillant à recueillir des données qui seront exploitables et nous mettons en place le questionnaire sur la plateforme (Google Form, Typeform, Survey Monkey), en accord avec vos choix. Les questionnaires peuvent être ensuite diffusés de différentes façons : via une campagne d’emailing, un questionnaire présent sur le site existant…</p>
            <p>Nous analyserons ensuite l’ensemble des réponses afin d’en tirer les grands axes et les pistes à travailler.</p>
            <p>Pour aller plus loin dans le recueil des besoins utilisateurs il est souvent efficace de compléter le questionnaire avec des entretiens individuels auprès d’utilisateurs volontaires. Ces entretiens permettent en effet de creuser les réponses données lors du questionnaire, d’expliciter et de mieux comprendre. Un audit des statistiques de votre site permettra de compléter, confirmer les résultats.</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h5>Entretiens ou interview : obtenir des données qualitatives sur les utilisateurs</h5>
            <p>Il s’agit d’une méthode qualitative, fondamentale de l’UX design qui consiste en un dialogue avec l’utilisateur potentiel (cela peut être un visiteur externe, mais également un contributeur en interne). Les entretiens peuvent être plus ou moins guidés mais il est nécessaire d’influencer le moins possible l’interlocuteur pour que les réponses ne soient pas biaisées.</p>
            <p>La technique de l’entretien permet de collecter de nombreuses données proches de la réalité, d’appréhender les besoins des utilisateurs et comprendre, via leurs partages d’expérience, leurs attentes et leurs motivations.</p>
            <p>Les étapes de l’entretien :</p>
            <ul>
                <li>En amont de l’entretien nous définissons les objectifs de l’entretien et nous constituons la grille d’entretien, en itération avec l’équipe projet. Il s’agit d’une série de questions qui serviront de trame à l’entretien.</li>
                <li>Les personnes interviewées doivent correspondre à la cible utilisatrice, c’est pourquoi nous sollicitons les participants en nous basant sur un fichier de contacts transmis par nos clients. Le nombre d’entretiens individuels et la sélection de la cible sont définis avec l’équipe projet.</li>
                <li>Vient ensuite l’étape du déroulement de l’entretien qui peut se faire en présentiel ou à distance, bien souvent en fonction de la disponibilité de l’interlocuteur.</li>
            </ul>
            <p>Suite aux entretiens, nous réalisons une synthèse analytique afin de trier et organiser les informations et rapporter les paroles des interlocuteurs en distinguant les idées récurrentes des exceptions et ainsi définir les éléments qui doivent être significatifs dans la conception du projet.</p>
            <h5>Ateliers collaboratifs : fédérer les parties prenantes autour d’un projet commun</h5>
            <p>Nous conduisons plusieurs types d’atelier de travail, en co-construction ou en itération, qui visent à rencontrer et à se faire rencontrer les différents acteurs impliqués dans le projet (spécialistes, référents, chefs de projet, utilisateurs…) pour leur permettre d’exprimer leur vision du projet digital.</p>
            <p>À distance, en présentiel, dans vos locaux ou dans un espace de coworking : nous adaptons le format de l’atelier en fonction de l’environnement, du nombre de participants, de leur niveau de maîtrise des outils informatiques…</p>
            <div className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <p>Quelques exemples d’atelier :</p>
            <ul>
                <li><strong>Recueil des besoins métiers :</strong> Le recueil des besoins métier permet d’impliquer les collaborateurs en amont de la conception du projet. La prise en compte de leurs demandes et de leurs besoins permet de fluidifier la prise de décision.</li>
                <li><strong>Éditorial :</strong> il peut s’avérer important d’identifier, dès le stade de l’avant-projet, les contenus qui seront à garder, à améliorer, à supprimer ou bien à créer… Et ainsi estimer le temps et les moyens humains qui seront nécessaires à la réalisation du travail éditorial. L’atelier éditorial peut aussi être l’occasion d’aborder la question du workflow et la spécificité de la saisie des contenus pour les contributeurs.</li>
                <li><strong>Technique :</strong> les ateliers autour de l’axe technique visent à s’assurer de la cohérence des demandes par rapport au système d’information existant et l’évolution des usages qui est attendue. C’est généralement à l’occasion de ces ateliers que nous rencontrons vos prestataires techniques. Un audit technique peut suivre et approfondir cette première approche.</li>
            </ul>
            <p>Les ateliers sont pour nous un des moments privilégiés du travail avec nos clients car nous pouvons mettre en pratique nos valeurs que sont le partage et l’enthousiasme. Nous animons l’atelier et essayons de faire en sorte que ces ateliers soient efficaces dans une bonne ambiance. C’est une de nos marques de fabrique.</p>
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

export default  RecueilBesoin
