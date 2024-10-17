import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AccompagnementOperationnel () {

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
                <h2>Accompagnent opérationnel : du développement du site web aux tests</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <p>Un projet web (refonte site, création intranet ou application) demande plusieurs mois d’effort aussi bien pour vous que pour l’agence en charge de la réalisation. Après une sollicitation importante de vos équipes durant la phase de création des UX/UI, il est temps pour l’agence de lancer le développement de votre site web. Nous serons donc aussi présents durant cette phase opérationnelle pour un accompagnement stratégique et opérationnel.</p>
            <h3>Vous accompagner durant les différentes étapes du développement du site</h3>
            <h5>Faciliter les échanges avec l’équipe de développement</h5>
            <p>L’accompagnement opérationnel se découpe généralement en plusieurs sous-parties (lecture et correction des spécifications fonctionnelles, migration et vérification des contenus et phase de recette), et une attention particulière est à porter pour chacune d’entre elles.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Lors de nos différentes expériences, nous avons constaté que nous avons joué un rôle dans la fluidification des échanges entre l’équipe projet et l’équipe de développement notamment sur des points techniques et c’est particulièrement vrai quand le projet comporte la liaison avec des outils tiers (votre outil métier par exemple ou CRM/ERP). Nous intervenons comme un support de vos équipes projet jusqu’à la mise en ligne et parfois même après.</p>
            <p>Notre relation constante avec les différentes équipes nous permet de répondre aux questions, de lever les éventuels points de blocage et d’être force de proposition sur l’ensemble des sujets.Notre relation constante avec les différentes équipes nous permet de répondre aux questions, de lever les éventuels points de blocage et d’être force de proposition sur l’ensemble des sujets.</p>
        </section>
        <section>
            <div className='content__block__row'>
                <article className='content__block__row__container__sticky'>
                    <h3>Vous aider à préparer sereinement la migration des contenus avec vos équipes</h3>
                    <p>Pour encadrer le travail de migration des contenus, nous créons un document XLS pour un transfert le plus efficace possible, et nous vous accompagnons dans sa prise en main. L’objectif de ce travail de préparation est aussi de s’assurer que les contenus que l’on va migrer doivent l’être.Pour encadrer le travail de migration des contenus, nous créons un document XLS pour un transfert le plus efficace possible, et nous vous accompagnons dans sa prise en main. L’objectif de ce travail de préparation est aussi de s’assurer que les contenus que l’on va migrer doivent l’être.</p>
                    <p>En effet la refonte d’un site internet est souvent l’occasion de faire du tri. C’est une étape cruciale car on va devoir déterminer quels sont les contenus à conserver et pour cela plusieurs paramètres vont devoir être pris en compte : le contenu est-il encore d’actualité ? Le contenu doit-il être mis à jour ? Le contenu génère-t-il du trafic ? …</p>
                    <p>Cette étape est souvent pour vos équipes une étape génératrice de beaucoup d’inquiétudes. Les équipes ont l’impression d’être au pied d’une montagne difficilement accessible. Notre rôle ici est de faciliter l’ascension en balisant le terrain et en organisant les étapes de repos.      </p>
                </article>
                <article className='content__block__img'>
                    <img src="miro.png" alt="" />
                </article>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='banner__column'>
                <h3>Le saviez-vous ?</h3>
                <p>Lors du développement d’un site internet dans le cadre d’une refonte, les développeurs mettent en place l’ensemble des fonctionnalités et travaillent l’ergonomie pour l’adapter aux maquettes réalisées lors de la phase d’accompagnement UX.</p>
                <p>Le site est alors dépourvu de contenu. Ceux-ci sont généralement récupérés de votre ancien site et migrés dans celui en construction. Cependant l’architecture des pages a évolué et le nouveau site va apporter des nouveautés de structure (nouvelles parties dans une page, nouvelles fonctionnalités…) qu’il conviendra de prendre en compte lors de la migration.</p>
            </div> 
        </section> 
        <section className='content__block__column'>
            <h3>Les spécifications fonctionnelles : point de départ du développement du projet</h3>
            <h5>Qu’est ce que les spécifications fonctionnelles ?</h5>
            <p>La rédaction des spécifications fonctionnelles ou fiches fonctionnelles détaillées (FFD) ou cahier des charges fonctionnel est une étape importante. Il s’agit d’un document rédigé par l’agence de développement qui va préciser toutes les interactions, sources des données et fonctionnements souhaités pour le futur site.</p>
            <p>Pour chaque élément qui constitue votre site, voici quelques questions non exhaustives auxquelles les FFD devront répondre :</p>
            <ul>
                <li>Quelles actions au survol ou au clic sur cet élément ? L’idée ici est d’expliciter les éléments pour éviter les erreurs et donc de détailler ce qui se passe lors d’un clic si cela n’est pas clair.</li>
                <li>Quelles règles sont appliquées (pour la remontée des actualités en page d’accueil par exemple) ? Aléatoire, la plus récente en premier, uniquement celles sélectionnées ? On explicite les comportements attendus car ils dépendent de vos choix éditoriaux</li>
                <li>Quelle est la source de certains contenus ? Les contenus sont issus d’un outil tiers ? Quelle règle est appliquée, quelle fréquence de mise à jour ? Faut-il prévoir une modération ? On met en avant les éléments techniques pour que les règles de gestion soit claires pour les développeurs</li>
                <li>Cet élément est-il administrable ? Si oui par qui ? Dans quelle mesure et sur quelle latitude l’administration du contenu est possible ? On établie clairement les niveaux de droits, tous les administrateur du site n’ont pas la possibilité d’accéder à l’ensemble des pages.</li>
            </ul>
            <p>Bien que les spécifications fonctionnelles soient aussi à destination des développeurs, il est important que l’équipe projet les valide avant le lancement du développement. Ce document est en effet garant du respect des fonctionnements définit et confirmés lors de la phase UX (garantissant ainsi l’expérience utilisateur).</p>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h5>Notre valeur ajouté dans la relecture des spécifications fonctionnelles</h5>
                <p>Fort de notre expérience dans la gestion de projet web, nous avons été amenés pendant plusieurs années à écrire des fiches fonctionnelles détaillées lorsque Netemedia réalisait encore du développement de site et projet web. Nous sommes donc en mesure de vous accompagner et vous conseiller sur ce sujet.</p>
                <p>Nous effectuons des relectures des spécifications fonctionnelles en nous assurant que l’ensemble des éléments exposés sont compréhensibles par tous et que le fonctionnement proposé correspond aux besoins. A cette occasion nous réalisons avec le client certaines réunions spécifiques de relectures afin de s’assurer de la bonne compréhension de chaque comportement. Nous faisons à cette occasion des démonstrations depuis des back-offices existant ou des applications existantes.</p>
                <p>Nous nous assurons aussi que la partie référencement naturel soit traitée de manière efficace, notamment via un plan de redirection co-construit avec vous et ajusté après la mise en production du site (l’objectif est de minimiser l’impact sur vos positions lors d’une refonte).</p>
           </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="" />
            </article>
        </section>
        <section className='content__block__column'>
            <h3>Relever les tendances et les bonnes pratiques chez les concurrents</h3>
            <p>Cette pratique vise à étudier le contexte concurrentiel dans lequel le projet s’inscrit. À travers le benchmark UX (ou étude de la concurrence), nous allons évaluer la pertinence de l’expérience utilisateur sur les sites ayant la même cible que vous pour établir des recommandations concernant votre dispositif numérique. Les avantages du benchmark UX sont nombreux :</p>
            <ul>
                <li>relever les bonnes pratiques concernant les éléments précis d’une interface ou bien au contraire tirer des leçons des erreurs des concurrents. Le fil d’ariane d’un site internet est souvent sujet à débat par exemple mais il reste une bonne pratique à conserver.</li>
                <li>se faire une idée sur les possibilités et sur les tendances, qu’elles soient graphiques, ergonomiques ou fonctionnelles, bref s’inspirer de ce qu’il y a sur le marché sans chercher à copier</li>
                <li>permettre de se différencier des autres ou bien s’y aligner lorsque cela semble nécessaire (dans certains domaines des sites internet ont instauré des conventions ergonomiques qu’il convient de suivre)…</li>
            </ul>
            <p>Les conclusions tirées d’une étude des sites concurrents permettront donc d’améliorer la conception UX de vos interfaces, c’est d’ailleurs une étape que nous menons couramment lors des missions d’AMOE à travers les phases de l’audit des concurrents, mais également lors du benchmark graphique. Si vous ne l’avez pas réalisé en amont de votre projet, pas de panique, nous pouvons vous accompagner sur cette problématique lors de la phase de conception.</p>
            <p>Il nous arrive aussi de réaliser un mini-audit de la concurrence centré sur une fonctionnalité donnée en cours de projet afin de pouvoir proposer des solutions ou de disposer d’arguments pour prendre une décision éclairée.</p>            
        </section>
        <section className='content__block__column'>
            <h3>Ateliers de co-conception UX-UI : prototypage des pages clés puis mise en maquette</h3>
            <p>Nous sommes lors de cette étape au cœur de la conception UX.</p>
            <p>Design thinking, user stories… Différentes méthodes existent pour constituer le prototypage des pages clés, toutefois l’objectif reste le même : fixer les grands principes ergonomiques des pages, sans s’embarrasser des problématiques esthétiques. C’est après cette étape de prototypage que l’on procède à la mise en maquette des pages.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Si nous concevons certains de ces gabarits ergonomique lors de la phase d’AMOE, nous préférons laisser la main à l’agence en charge du développement du projet lors de nos missions d’AMOA. Nous vous accompagnons néanmoins de manière active lors de cette phase cruciale :</p>
            <ul>
                <li>Nous sommes présents sur l’ensemble des ateliers de conception, au cours desquels nous nous assurons du respect de la prise en compte des demandes exposées dans le cahier des charges. Nous accompagnons vos équipes pour concevoir un site en conformité avec l’expression de besoins et contribuons efficacement à l’avancée du projet.</li>
                <li>Nous veillons lors de la création des gabarits et des maquettes, à ce que les pages soient ergonomiques et facilitent le parcours des utilisateurs. Les objectifs des personae sont au cœur de cette phase. Nous prenons aussi en compte les problématiques d’accessibilité numérique car il est important de concevoir un internet inclusif.</li>
                <li>Nous prévoyons des temps avec vous hors projet pour réunir l’ensemble des retours et les formaliser. Lors de ces temps de réunions interne nous analysons avec vous les pages transmises par l’agence et nous sommes force de proposition sur les détails et les points d’ergonomie. Nous vérifions les interactions entre les écrans et l’harmonisation du design sur l’ensemble des pages, nous nous assurons que les pages sont compatibles avec les contraintes techniques (certains plugins ne permettent pas ou encore certaines solutions imposent un design particulier), nous contrôlons également la déclinaison des pages dans leur format responsive…</li>
            </ul>
        </section>
        <section className='content__block__column'>
            <h3>Tester la solution auprès des utilisateurs : recueillir leurs retours concrets sur l’ergonomie et les parcours utilisateurs</h3>
            <p>Même si elle n’est pas obligatoire, cette étape des tests utilisateurs est fortement recommandée pour évaluer l’utilisabilité et la qualité de l’UX et anticiper les éventuelles erreurs avant le développement de la solution. D’autant que 85 % des problèmes UX peuvent être résolus en testant 5 utilisateurs. (Source : Groupe Nielsen Norman) Cette métrique est cependant à prendre avec des réserves car un débat important à lieu entre experts autour de cette dernière.</p>
            <p>Cette étape peut être réalisée dès la phase du prototypage, si les écrans sont construits de manière interactive et fonctionnelle et permettent une navigation (les logiciels comme Figma ou Adobe XD qui permettent cela sont maintenant la norme dans les agences web). La conception des pages ne doit pas non plus être trop avancée puisqu’une phase itérative est à prévoir pour intégrer les retours et faire à nouveau tester la solution jusqu’à validation par les utilisateurs.</p>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Découvrez nos expertises</h3>
                    <p>Nous les mettons à disposition de vos projets</p>
                    <div className='content__article__popup'>
                        <div className='content__article__popup__container'>
                            <img src="emmanuel_camara.png" alt="img manu"/>
                        </div>
                        <div className='content__article__popup__container'>
                            <p>Nous aimons aider nos clients par le biais d'expertises maitrisées. Les voici !</p>
                            <Link to="/contact" className='content__article__popup__container__link'>Voir nos expertises</Link>
                        </div>
                    </div>
                </div>
                <div className='banner__row__container'>
                    <div className='banner__row__container__link'>
                        <span><h5>Spécifications fonctionelles</h5><img src="fleche_droite_white.png" alt="fleche white"/></span>
                        <p>Décrire les exigences et les fonctionnalités d'un projet</p>
                    </div>
                    <div className='banner__row__container__link'>
                        <span><h5>Gestion de projet</h5><img src="fleche_droite_white.png" alt="fleche white"/></span>
                        <p>Vous aider à organiser le déroulement du projet</p>
                    </div>
                </div>
                <div className='banner__row__container'>
                    <div className='banner__row__container__link'>
                    <span><h5>Travail des contenus</h5><img src="fleche_droite_white.png" alt="fleche white"/></span>
                        <p>Faire le point sur vos contenus et les préparer pour le futur sites</p>
                    </div>
                    <div className='banner__row__container__link'>
                    <span><h5>Test utilisateur</h5><img src="fleche_droite_white.png" alt="fleche white"/></span>
                        <p>Vérifier l'utilisabilité du site auprès d'un panel d'utilisateurs</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='content__block__column'>
            <h3>Dernière ligne droite : tests et mise en ligne du site</h3>
            <h5>Place à la recette du site : vérifier le bon fonctionnement</h5>
            <p>Quelques semaines ont pu s’écouler entre la validation des spécifications fonctionnelles et la phase de recette [livraison de votre site ou application dans un environnement protégé pour effectuer des tests]. Durant cette période, les équipes de l’agence sélectionnées n’ont pas chômé, ils ont mis en place les développements nécessaires à votre projet et ont généralement effectué une première phase de recette.</p>
            <p>C’est à ce moment que vous recevez l’URL de votre site et que vous pouvez pour la première fois le voir prendre vie ! Il s’agit de votre site internet, disponible depuis un environnement de test (aussi appelé environnement de dev) et qui n’est accessible que pour les personnes en ayant les accès. Autrement dit, vos clients et utilisateurs finaux n’y ont pas accès.</p>
            <p>Avant de le rendre accessible à tous, il est nécessaire de vérifier son fonctionnement, c’est ce qu’on appelle la phase de recette ou encore la phase de test, puis d’ajouter les derniers contenus. C’est une étape cruciale avant la mise en ligne qui sollicite beaucoup les équipes.</p>
            <p>Sur certains projets la phase de recette est scindée en plusieurs phases :</p>
            <ul>
                <li>Recette fonctionnelle. Cette recette a lieu sur un environnement de développement. Le contenu n’est pas nécessairement le bon. L’objectif ici est de tester les grandes fonctionnalités du site ou de l’application. Il arrive que sur cet environnement et durant cette phase l’ensemble des données soit supprimé pour les besoins du développement.</li>
                <li>Préparation à la mise en production. Une fois le fonctionnel validé un nouvel environnement est mis en place. Cet environnement de pre-production va recevoir les contenus validés et sera sans doute l’environnement final de production.</li>
            </ul>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <h5>Un accompagnement pour une phase de test efficace</h5>
            <p>Là aussi l’équipe Netemedia sera à vos côtés. Nous organiserons avec vos équipes la répartition des tâches et pouvons les conseiller pour améliorer leur productivité sur ce type de tache. Netemedia réalisera également toute une série de tests pour vérifier la conformité graphique (notamment l’intégration html/css) et fonctionnelle sur plusieurs terminaux (mobile/desktop et navigateurs). Plusieurs types de tests peuvent être réalisés à cette occasion : tests de réactivité, test de charge, test de sécurité, test d’accessibilité et de navigation etc.. Le périmètre est vaste et chronophage.</p>
            <p>Nous créons des scénarios d’usage et réalisons nous-même et avec votre équipe projet des tests utilisateurs (user testing ou UX testing). Le but des scénarios est de remplir un objectif qui pourrait être réalisé par un visiteur du site (par exemple : dans le cadre d’un site e-commerce, nous avons réalisé plusieurs scénarios de passage de commande avec différent mode de paiement et lieux de livraison pour vérifier la conformité des actions et des prix de livraison de plusieurs cas de figure).</p>
            <p>Grâce à notre connaissance des back-offices, nous vous aiderons à manipuler celui-ci si nécessaire. (L’agence en charge du développement vous formera en amont au back-office du site pour que vous puissiez être autonomes dessus).</p>
            <p>Les retours s’effectuent le plus fréquemment sous forme de tickets et via des échanges directs avec l’équipe de développement pour résoudre certaines erreurs. Nos capacités en gestion de projet vous aideront dans le suivi de l’avancement des différents retours et la hiérarchisation des priorités. Nous avons pu rencontrer plusieurs outils de gestion de tickets (Trello, Redmine, BugTracker, Jira, Monday…) au cours des années et connaissons ainsi les subtilités de ces derniers et les astuces pour en tirer le meilleur.</p>
            <h5>La mise en ligne de votre projet</h5> 
            <p>Votre projet de refonte touche à sa fin et votre site est fin prêt pour être visible de vos utilisateurs ! L’ensemble du périmètre fonctionnel a été développé et le procès-verbal a été signé déclenchant la mise en production (et la période de garantie).</p>
            <p>Une dernière étape est nécessaire : la mise en ligne de votre projet.</p>
            <p>Nous assistons l’agence en charge du développement pour assurer le bon déroulement de la mise en production. Notamment nous planifions l’ensemble des étapes nécessaires à la mise en production en nous assurant du rôle et de la responsabilité (RACI) de chaque partie lors de cette phase cruciale.</p>
            <p>Nous réalisons également des phases de contrôles et des tests pendant la période de garantie qui suit la mise en ligne (aussi appeler passage en prod) pour assurer la bonne conformité du site en production. Après la mise en ligne du site c’est souvent le moment de réaliser des améliorations notamment en ayant recours à un test A/B ou A/B testing (présenter à ses visiteurs une version A et une version B d’une même page pour déterminer laquelle est la plus performante ou pour tester l’utilisabilité du site).</p>
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

export default AccompagnementOperationnel