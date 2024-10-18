import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AuditConcurrentiel () {

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
                <h4>Audit Concurrentiels</h4>
                <h2>S'inspirer et réfléchir à la façon dont s’adresser aux cibles</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Pourquoi réaliser un audit des concurrents ?</h3>
                <p>L’audit des concurrents : audit concurrentiel, benchmark UX ou audit de sites similaires est une expertise que nous proposons régulièrement dans notre accompagnement en vue de la rédaction d’un CCTP ou cahier des charges pour la refonte d’un site internet.</p>
                <p>L’audit des concurrents est généralement réalisé en amont des ateliers techniques sur les fonctionnalités et la phase de conception ergonomique et apportera des pistes de réflexion intéressantes tout au long du projet. L’audit peut par exemple, aider à la décision lors de la création des maquettes du site ou inspirer le travail des contenus.</p>
                <p>Comme son nom l’indique, l’audit des concurrents va nous permettre de faire une analyse des sites en concurrence directe avec vous. Toutefois même si vous n’avez pas à proprement parler de concurrents sur votre domaine d’activité, il est toujours intéressant d’analyser comment se comportent les sites qui évoluent dans le même domaine que vous, ou bien ayant des problématiques similaires voir des similarités en termes de cibles. Avant, il faudra bien entendu définir les cibles / personae de votre site internet.</p>
                <p>Notre rôle sera d’identifier les moyens mis en œuvre pour répondre à leur problématique, d’évaluer la pertinence de l’expérience utilisateur, de relever les bonnes pratiques et de s’inspirer de ce qu’il y a sur le marché. A partir de ces constats il est aussi plus facile d’identifier votre différence et de la mettre en avant lors de la réalisation des gabarits.</p>
            </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
                <div className='banner__row__container'>
                    <h3>Les éléments clés de l’audit concurrentiel</h3>
                    <p>Au cours de l’audit des concurrents ou benchmark, voici quelques questions que nous nous posons régulièrement :</p>
                    <ul>
                        <li>Comment le site prend-il en compte les différentes cibles auxquelles il s’adresse – existe-t-il des entrées différentes, des contenus différents, un menu dédié à une cible en particulier ?</li>
                        <li>Quelles sont les fonctionnalités mises en place pour répondre à leurs problématiques ? Seraient elles pertinentes pour votre projet ?</li>
                        <li>Quels sont les moyens mis en œuvre pour répondre aux besoins des cibles ? Sont-ils efficaces ? On regarde ici la bonne adéquation entre fonction et ressources.</li>
                        <li>Quels outils sont privilégiés pour communiquer ? L’information est-elle claire et compréhensible ?</li>
                        <li>Relève-t-on des éléments récurrents sur l’ensemble des sites analysés qui nécessiteront d’être repris sur le vôtre ?</li>
                    </ul>
                    <p>Le menu, l’organisation des pages, la densité de l’information, le vocabulaire utilisé, les images présentes, les schémas, les fonctionnalités, la recherche… sont autant d’éléments sur lesquels nous nous attardons. Chaque audit concurrentiel est différent et s’adapte complètement à votre projet et à vos problématiques.</p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Comment se déroule l’audit ?</h3>
            <p>En amont de l’audit des concurrents ou des sites similaires, nous validerons avec vous la liste des sites à analyser.</p>
            <p>Nous vous proposerons une sélection de site lors de la réunion de lancement qui a lieu lors d’un accompagnement AMOE et qui sera discuté et validé par l’équipe projet. Cette sélection est proposée dans le devis lors d’une mission d’audit décorrélée d’une AMOE. Dans le cadre d’une AMOE, l’audit rentre dans la phase appelé analyse de l’existant.</p>
            <p>Nous recommandons de sélectionner au maximum 3 à 5 sites. C’est la quantité que nous jugeons optimale pour acquérir des pistes de réflexion pertinente dans une durée et un budget relativement limitée (une bonne semaine d’analyse en moyenne).</p>
            <p>Durant la phase d’analyse, nous ne regarderons pas en détail l’ensemble des sites mais nous concentrons nos efforts sur les éléments et fonctionnalités clés qui pourront être utiles pour votre projet de refonte. Notre objectif ici n’est pas d’effectuer un audit complet du site concurrent qui pourra lui être plus utile qu’à vous, mais bien de déterminer les axes de réflexion pour votre projet de refonte.</p>
            <p>Il peut arriver sur certains projets d’analyser 3/4 sites et d’auditer en supplément 1 ou 2 sites sur une fonction en particulier. Dans ce cas-là notre attention se porte sur des sites plus éloignées de votre activité mais dont la notoriété ou l’usage en font des référents sur une fonctionnalité. Ainsi il peut être intéressant de regarder comment fonctionne par exemple la vente de billets sur une enseigne connu pour s’en inspirer lors de la refonte du système de billetterie d’un site événementiel.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>À l’issue de la phase d’analyse des sites concurrents, nous compilons les conclusions de l’audit dans un document de synthèse que nous vous présentons à l’occasion d’un atelier de restitution. Lors de cet atelier c’est l’occasion souvent de débattre de certains choix, de confirmer ou non certaines fonctionnalités souhaitées en un mot d’avancer dans le projet.</p>
            <p>Le livrable fourni fera état des bonnes pratiques concernant certaines fonctionnalités et des éléments à ne pas reproduire.</p>
            <p>Ainsi les conclusions tirées d’une étude des sites concurrents (et des discussions suite à leur présentation) donneront des axes de travail pour la conception UX de vos interfaces (les fameux gabarits ergonomiques).</p>
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

export default AuditConcurrentiel