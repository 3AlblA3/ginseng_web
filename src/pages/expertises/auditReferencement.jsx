import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AuditReferencement () {

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
                <h4>Audit référencement naturel</h4>
                <h2>Optimiser votre site pour les moteurs de recherche</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Vous avez dit SEO ?</h3>
                <p>Derrière cet acronyme se cache différentes interprétations : la signification littérale est Search Engine Optimisation mais cela regroupe en fait tout ce qui touche au référencement naturel. L’objectif principal du SEO est de respecter et comprendre l’algorithme de Google pour arriver à positionner un site internet dans les premiers résultats sur la requête qui vous intéresse (comme audit référencement naturel par exemple). Cet audit est souvent sollicité dans le cadre d’une mission de rédaction d’un CCTP et le lancement d’un appel d’offre car la visibilité d’un site internet est essentiel.</p>
                <p>Nous avons toujours eu pour préoccupation de développer des sites qui répondent aux exigences imposées par Google (qui a le monopole de la recherche sur Internet en France avec 91% des parts de marché – source : BDM) pour bénéficier d’un bon SEO, et obtenons de très bons résultats pour nos clients.  </p>
                <p>Cette expertise nous permet aussi de prendre en compte lors de nos projets d’accompagnement en stratégie numérique les aspects du référencement naturel très tôt ce qui est essentiel dans les projets de refonte notamment. C’est lors de la phase d’analyse de l’existant – première phase de notre méthodologie – que nous réalisons ce type d’audit de référencement web.</p>
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
                    <h3>Comment le référencement naturel fonctionne-t-il ?</h3>
                    <p>Les moteurs de recherche possèdent des robots, des scripts informatiques en réalité, qui viennent crawler votre site, garder en mémoire les informations récupérées et les classer par pertinence. Ce travail des robots se nomme l’indexation d’un site et il est plus ou moins fréquent selon la notoriété du site.</p>
                    <p>Lorsqu’une personne effectue une requête, le moteur de recherche va regarder et analyser sa base de données et ressortir les résultats qui lui semblent les plus pertinents, et tout ça en quelques millièmes de secondes.</p>
                    <p>Au fil des années, la fréquence d’indexation des sites et de mise à jour de l’index de Google est passée de mensuel à du quasi-temps réel au fur et à mesure que la puissance de calcul progressait. Un site internet voit ainsi régulièrement le passage des robots d’indexation et il est important que techniquement aucun obstacle ne soit présent sur votre site pour que cette dernière se passe dans les meilleures conditions.</p>
                    <p><strong>Vous l’aurez compris, l’enjeu est d’arriver en haut de la première page !</strong></p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Quels critères sont pris en compte par Google ?</h3>
            <h5>Des critères qui évoluent au gré des mises à jour de l’algorithme.</h5>
            <p>La liste des critères est multiple et fait l’objet d’évolutions régulières. Un site optimisé selon les critères de 2019 ne l’est plus forcément en 2023. Certains critères sont révélés par Google et il est recommandé de suivre à la lettre les directives du Maître du Web. D’autres critères sont découverts par des apprentis sorciers (autrement dit des professionnels du référencement web) qui tentent des expériences afin de démontrer que tel élément est pris en compte et que tel autre ne l’est pas. Là réside toute la difficulté du SEO : les acteurs sont en permanence en train d’essayer de comprendre comment Google fonctionne. Et ce dernier fait tout pour que cela soit difficile et brouille les pistes.</p>
            <p>Les critères sont généralement séparés dans deux catégories : la technique (le code du site et toute la partie serveur) et le contenu (davantage effectué par le client).</p>
            <div className='content__block__img'>
                <img src={`${import.meta.env.VITE_IMAGE_PATH}/banner_ph.png`} alt="banner placeholder"/>
            </div>
            <h3>Optimiser le référencement naturel par rapport aux cibles</h3>
            <p>Voici quelques exemples de critères techniques : (que l’on peut aussi regarder lors d’un audit technique)</p>
            <ul>
                <li>Structure du code : notamment le bon enchaînement des balises Hn</li>
                <li>Accessibilité du site (de plus en plus pris en compte)</li>
                <li>Temps de chargement des pages (implique la gestion du poids des images qui fait partie du contenu).</li>
                <li>L’optimisation du site sur mobile</li>
                <li>La mise en cache de certaines ressources</li>
                <li>...</li>
            </ul>
            <p>Pour la partie contenu, les robots regarderont entre autres :</p>
            <ul>
                <li>La structure de la page : si les balises Hn sont renseignées de façon pertinente</li>
                <li>Le ratio texte/image</li>
                <li>Les balises titres, descriptions et les attributs alternatifs des images</li>
                <li>Les mots-clés identifiés</li>
                <li>Le netlinking entre les pages avec notamment la mise en place d’un silo de contenus.</li>
                <li>…</li>
            </ul>
            <p>C’est à travers la prise en compte de l’ensemble de ces critères (ainsi que bien d’autres) que l’optimisation du référencement naturel du site peut se faire. Mais cette optimisation doit avoir du sens par rapport aux besoins de vos cibles. Attirer des visiteurs qui n’ont aucun intérêt pour votre activité ne nous semble pas pertinent.</p>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
                <div className='banner__row__container'>
                    <h3>Quelles stratégies mettre en place pour acquérir un bon référencement naturel ?</h3>
                    <p>Pour arriver à un résultat optimum nous travaillons mains dans la main avec nos clients pour se poser les bonnes questions :</p>
                    <ul>
                        <li>Quels sont les mots-clefs qui m’identifient et identifient mon activité ? Suis-je performant sur ces mots ? Si ce n’est pas le cas quelles sont les raisons qui peuvent expliquer cela ?</li>
                        <li>Ces mots sont-ils trop génériques (« parquet » a ainsi plusieurs significations tandis que « pose de parquet » est très explicite et correspond à la cible de notre client) ?</li>
                        <li>Existe-t-il des freins techniques au référencement de mon site ?</li>
                        <li>Mes concurrents sont-ils très efficaces en SEO (Search Engine Optimisation ou référencement naturel) ?</li>
                        <li>Puis-je consacrer un budget à la mise en place d’une stratégie de référencement : création de contenus, audit technique SEO poussé et suivi sur le long terme ?</li>
                        <li>Quelles sont les pages les plus importantes pour mon activité ?</li>
                    </ul>
                    <p>Dans notre process d’accompagnement, la réflexion sur l’arborescence est réalisé durant la phase de cadrage du projet.</p>
                    <p>Saviez-vous que 80 % des internautes abandonnent une commande à cause du formulaire de création de compte (étude Benchmark Group, 2009) ?</p>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Nos audits techniques SEO et audit de contenu</h3>
            <p>L’audit que nous réalisons s’adapte à votre projet web (le référencement n’ayant pas d’intérêt pour un intranet ou extranet qui nécessitent un accès privé). En effet un audit du référencement naturel d’un site n’aura pas la même teneur et profondeur selon que votre projet est lié à une refonte de site ou non.</p>
            <p>Ainsi un audit de site web SEO en dehors de tout projet de refonte va devoir être exhaustif et balayer l’ensemble des éléments du site aussi bien d’un point de vue éditorial que d’un point de vue sémantique. Ce type d’audit peut être assez long et pour certains recourir à un certain nombre d’outils techniques afin de contrôler différents éléments du code ou de l’hébergement du site. Lors de ce dernier un audit de positionnement est réalisé pour déterminer les positions du site sur un ensemble de mots clefs en référencement naturel. Une analyse du trafic web est faite en corrélation pour déterminer quels sont les termes à conserver, à travailler et à abandonner.</p>
            <p>À l’inverse lorsque nous réalisons un audit du référencement naturel d’un site dans le cadre de la rédaction d’un cahier des charges ou d’un CCTP l’aspect technique est moins prépondérant. En effet comme le socle technique va changer il n’est pas opportun de contrôler ce dernier. L’analyse portera donc en priorité sur certains aspects du référencement d’un site : la structuration de l’information, la sémantique html d’une page, les liens internes et externes du site… Nous allons surtout solliciter notre expertise pour encadrer de manière drastique l’ensemble de la procédure de refonte au niveau SEO. Une vérification de l’ensemble des éléments vitaux d’une bonne refonte sera réalisée : plan de redirection, prise en compte des 404, plan du site, mise en place des éléments dans la search console etc… Cet audit pourra éventuellement être couplé d’un audit ergonomique pour une analyse complète de votre site existant en terme d’organisation des contenus.</p>
            <p>À l’issue de l’audit nous réalisons un document de synthèse complet qui permettra de mener les actions adéquates et de s’assurer que le SEO du site ne soit pas oublié durant la refonte de ce dernier. Sur certains projets il peut être nécessaire de solliciter une expertise en rédaction web seo ce qui sera alors inclut dans le cahier des charges. C’est souvent un coût important qu’il convient d’anticiper et toutes les agences ne disposent pas de ces compétences. En effet le conseil en stratégie digitale et webmarketing est une compétence appréciée mais assez rare dans les agences de taille intermédiaire.</p>
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

export default AuditReferencement