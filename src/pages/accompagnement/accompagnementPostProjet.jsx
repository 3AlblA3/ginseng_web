import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AccompagnementPostProjet () {

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
                <h4>Pendant le projet - AMOA</h4>
                <h2>Accompagnement post_-projet : être présent durant la maintenance de votre site internet</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <p>La Tierce Maintenance Applicative (TMA) ou plus simplement la maintenance du site internet (ou projet numérique) est le contrat mis en place entre votre agence et vous pour maintenir le site en conditions opérationnelles et éventuellement faire quelques évolutions. Cependant derrière une même appellation on peut découvrir plusieurs pratiques.</p>
            <h3>Quels sont les enjeux de la maintenance de votre site internet (TMA) ?</h3>
            <h5>Que recouvre la TMA ?</h5>
            <p>La TMA vous permet d’avoir une garantie de disponibilité de votre agence en cas de problème avec votre site internet, votre intranet, application métier ou application mobile.</p>
            <p>Vous pensez qu’après un investissement important et la mise en ligne d’un nouveau projet numérique se garantir contre des dysfonctionnements n’a pas de sens ? On pourrait effectivement le penser mais l’informatique est un domaine où la loi de Murphy s’applique avec une efficacité déconcertante. Un site peut fonctionner un jour et ne plus fonctionner le lendemain sans raison apparente et si vous n’avez pas de contrat de maintenance vous être alors tributaire du bon vouloir de votre agence pour que cette dernière puisse répondre à votre demande.</p>
            <p>Cependant la TMA permet aussi de corriger des points que l’on n’avait pas vus lors de la phase de recette, cela permet aussi de modifier, changer et faire évoluer le site. Un site internet contrairement à un objet physique définit évolue en permanence. C’est sa force et sa faiblesse. Pour exploiter ce potentiel pleinement un contrat de TMA doit être mis en place.</p>
            <p>Dans certains contrats de TMA il est possible de mettre en place des évolutions. Cela va bien sûr avec le nombre de jours/homme prévu dans le contrat de TMA mais cette souplesse permet d’adapter le site au marché et de pouvoir réagir vite lors de la détection d’anomalies et de baisse de performances. Attention cependant certaines fonctionnalités vont demander de passer par une phase de définition des besoins. Nous recommandons alors à nos clients de repasser en mode projet et de faire réaliser un devis. Cela permet de ne pas grever le budget TMA et de pouvoir aussi faire valider par la direction des dépenses importantes liées à une demande nouvelle. Dans tous les cas il faudra réaliser des spécifications fonctionnelles détaillées pour expliciter au mieux le besoin auprès des équipes.</p>
            <div className='content__block__insight'>
                <h5>Insight</h5>
                <p>Notre conseil lors de la rédaction du contrat de TMA est de privilégier les contrats qui permettent de disposer d’un crédit d’heures. Tant que le crédit n’est pas épuisé il est reporté sur la période suivante. Ce mode opératoire et ce qui permet le plus de souplesse et permet d’être au plus juste sur ce qui est consommé.</p>
            </div>
            <h5>Quand commence la Tierce Maintenance Applicative (TMA) ?</h5>
            <p>La Tierce Maintenance Applicative (TMA) commence généralement après la période de garantie. Cependant dans de nombreux projets cette dernière commence en même temps que la mise en production du projet.</p>
            <p>En effet la TMA, comme vu précédemment inclut la mise à jour du socle applicatif ce qui n’est pas le cas d’une période de garantie qui elle n’a que pour objectif de venir corriger des points qui étaient fonctionnels lors de la mise en production du site et ne le sont plus.</p>
            <p>Le commencement de votre TMA dépend de votre projet et de sa sensibilité. On peut la faire commencer après la période de garantie dans la plupart des cas.</p>
            <div className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h5>Combien de temps dure-t-elle ?</h5> 
            <p>La durée du contrat de TMA va dépendre du type de contrat au départ. Dans le cadre d’un appel d’offres public la durée de la TMA va être celle du marché. Généralement on constate une durée de TMA de 12 à 16 mois dans le cadre des appels d’offres. La durée peut être augmentée mais cela va bien sûr augmenter le marché et donc le seuil budgétaire du marché.</p>
            <p>Pour les consultations privées il n’y a pas de questions de durée réellement. Généralement la TMA reste en place jusqu’à la prochaine refonte du projet. Sauf si bien sûr des problèmes surviennent et que la relation se dégrade. C’est une situation qui peut arriver et c’est pour cela que l’on encadre sévèrement la sortie dans tous les appels d’offres ou consultations que nous réalisons. Il est important de prévoir la sortie de contrat et donc la phase de réversibilité pour que votre projet puisse être repris par une autre agence dans les meilleures conditions possibles.</p>
            <h5>Piloter et anticiper les corrections</h5>
            <p>Quand nous intervenons lors de la tierce maintenance applicative nous avons à cœur de piloter au mieux les corrections à réaliser. Cela signifie que l’on va organiser les différents sprints de corrections afin d’être le plus efficace possible. Ainsi ce pilotage passe par la priorisation des corrections : nous déterminons avec le client les correctifs qui doivent être appliqués de manières urgentes et ceux pouvant attendre. Nous nous appuyons souvent sur les web analytics (les statistiques de consultation du site internet) pour décider des priorités. C’est notre capacité en gestion de projet qui est alors solliciter pleinement ici afin d’organiser, planifier, budgéter l’ensemble de ces demandes et ainsi les anticiper au mieux.</p>     
            <h3>Pourquoi se faire accompagner lors de la TMA ?</h3>
            <h5>Disposer d’une ressource dédiées à la question du numérique</h5>
            <p>Pour une grande partie de nos clients notre rôle s’arrête une fois la mise en ligne du site réalisé. Cependant pour certains clients ne disposant pas de ressources spécifiques en interne (c’est-à-dire d’une personne dédiée au numérique) nous pouvons poursuivre notre mission par un accompagnement durant la phase de TMA.</p>
            <p>Assez souvent nous intervenons aussi en facilitateur pour permettre de faire avancer certaines corrections en apportant notre expérience sur le sujet traité. À plusieurs reprises nous avons pu résoudre des problèmes importants car nous les avions déjà rencontrés et avons ainsi pu soumettre des hypothèses de travail et de résolution à l’agence en charge du projet.</p>
            <p>Une grande partie de la maintenance d’un projet numérique va reposer sur l’anticipation. Un site internet ou une application ou un intranet repose sur un applicatif (CMS, Framework etc..) qui évolue et il est important d’anticiper ces évolutions. Notre objectif est de pouvoir organiser au mieux les évolutions notamment de CMS en définissant avec l’agence et le client un processus de mise à jour dans ces cas-là. Nous nous assurons ainsi que le site Internet soit à jour en termes de sécurité et de fonctionnalité.</p>
            <div className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h5>Analyser, comprendre et agir</h5>
            <p>Mais là où notre rôle est le plus important c’est lors des réunions stratégiques avec le client. En effet, comme nous intervenons pour des structures ne disposant pas nécessairement en interne de personne dédié aux problématiques du numérique nous jouons ce rôle-là pour vous.</p>
            <p>Nous sommes en veille permanente et notre but est de s’appuyer sur l’ensemble des indicateurs mis en place pour analyser, comprendre et ensuite agir. Nous conduisons aussi plusieurs actions :</p>
            <ul>
                <li>test de performance du site : on surveille comme le lait sur le feu pour s’assurer que le site soit réactif. Chaque millisecondes de plus peut impacter l’expérience utilisateur (et contrarier Google)</li>
                <li>surveillance des outils analytics pour déceler des évolutions négatives ou positives notamment concernant le trafic du site web</li>
                <li>lecture et préconisations suite à un rapport de référencement du site. Les agences de SEO ne sont pas toujours très simples à suivre et un interprète est souvent nécessaire</li>
            </ul>
            <p>En participant à différentes réunions et en étant intégré dans votre paysage nous sommes le plus à même de pouvoir vous proposer des solutions et ainsi de faire évoluer votre dispositif numérique.</p>
        </section>
        <section  className='content__block__row'>
                <article className='content__block__row__container__sticky'>
                    <h5>Retour d’expérience</h5>
                    <p>Nous accompagnons la Mission Locale de Paris depuis plusieurs années et participons ainsi à toutes les réunions où le numérique à une place à tenir.</p>
                    <p>Ainsi nous avons pu dernièrement participer à la rédaction du plan stratégique de développement numérique de la MLP.</p>
                    <p>Il y a pour la MLP un énorme enjeu d’intégration du numérique dans la relation avec le jeune accompagné et nous avons donc pu y réfléchir avec les jeunes, les conseillers et la direction.</p>
                    <div className='content__article__popup'>
                        <div className='content__article__popup__container'>
                            <img src={`${import.meta.env.VITE_IMAGE_PATH}/emmanuel_camara.png`} alt="img manu"/>
                        </div>
                        <div className='content__article__popup__container'>
                            <p>La mise en place des solutions se fera dans la durée et avec notre présence car la MLP nous renouvelle d’année en année sa confiance.</p>
                        </div>
                    </div>
                </article>
                <article className='content__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
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

export default AccompagnementPostProjet