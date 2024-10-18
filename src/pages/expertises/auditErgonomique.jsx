import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function AuditErgonomique () {

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
                <h4>Audit ergonomique</h4>
                <h2>Comprendre ce qui peut entraver le parcours de l'utilisateur</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>L’ergonomie web, comment la définir ?</h3>
                <p>L’ergonomie peut se définir comme étant « la mise en œuvre d’un ensemble de règles et usages en vue d’améliorer l’utilisabilité du site.</p>
                <p>L’utilisabilité mesure la facilité avec laquelle les utilisateurs peuvent interagir avec un outil informatique. Dans le cas d’un site web ou d’une application, c’est la façon dont vos utilisateurs peuvent découvrir, parcourir, explorer et interagir avec votre contenu. Ainsi un scaphandre et la bouteille de plongée inventée par Cousteau ont la même utilité : respirer sous l’eau. Mais la bouteille a une utilisabilité bien meilleure (exemple de J.F. Nogier, T. Bouillot, J. Leclerc, Ergonomie des interfaces, ed. Dunod 2011).</p>
                <p>L’audit de l’ergonomie d’un site consiste à analyser ce dernier pour en comprendre les points forts et les éléments qui peuvent bloquer la navigation. Intégrer les résultats de cet audit dans la rédaction du cahier des clauses techniques particulières (CCTP) permet de focaliser les objectifs d’une refonte sur des enjeux centrés utilisateur.</p>
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
                    <h3>Connaître vos cibles</h3>
                    <p>Dans le cadre de notre mission de conseil en stratégie digitale et webmarketing nous mettons en place une méthodologie qui place l’utilisateur au centre et s’attache à regarder si l’utilisabilité du site ou de l’application est réelle.</p>
                    <p>Ce travail commence toujours par brosser le portrait de l’utilisateur du dispositif numérique (avec l’outil des personae). Ainsi lors d’ateliers nous abordons avec vous les questions suivantes :</p>
                    <ul>
                        <li>Qui est votre cible et que vient-elle faire sur votre dispositif numérique ?</li>
                        <li>Votre positionnement et votre valeur ajoutée sont-ils clairement identifiables pour l’internaute ?</li>
                        <li>La navigation est-elle fluide ? Intuitive ? Vient-elle faciliter la visite de l’internaute ou au contraire la perturber ?</li>
                        <li>Vos contenus et vos rubriques sont-ils efficaces ?</li>
                        <li>La structuration de vos pages est-elle suffisamment claire ?</li>
                        <li>Vos boutons d’action sont-ils reconnaissables et mis en évidence ?</li>
                    </ul>
                </div>  
            </div>
        </section>
        <section className='content__block__column'>
            <h3>À quoi sert un audit ergonomique ?</h3>
            <p>Avoir à cœur de satisfaire l’utilisateur de son site (ou application ou extranet) est pour nous un objectif indispensable. L’utilisateur doit être au centre de tout projet numérique. En effet c’est en permettant à ses utilisateurs de naviguer simplement et agréablement sur le site et de faciliter l’accès à l’information que ces derniers reviendront et parleront positivement de leur expérience.</p>
            <p>Nous réalisons des audits ergonomiques lorsqu’une refonte de site est envisagée ou en vue de faire évoluer un site existant pour l’adapter au mieux aux attentes de ses visiteurs. Dans le cadre d’un accompagnement digital (lors de la phase d’analyse de l’existant) il permet de comprendre directement quels sont les freins actuels au parcours utilisateur.</p>
            <p>Lors d’un audit ergonomique nous inspectons le site ou l’application à la recherche de tout élément pouvant entraver le parcours de l’utilisateur : non-respect des conventions, principes ergonomiques non appliqués ou plus généralement non prise en compte de la satisfaction de l’utilisateur.</p>
            <p>Conduit par notre équipe experte au design d’interface utilisateur, l’audit ergonomique garantit une amélioration importante de l’utilisabilité et de la fréquentation de votre site. Il contribue également à réduire les coûts de suivi, de maintenance et de relation client.</p>
            <p>L’audit a un impact direct sur la satisfaction et la fidélisation de vos visiteurs et sur le taux de conversion de votre site.</p>
        </section>
        <section className='content__block__row'>
            <div className='content__block__insight'>
                <h5>Insight</h5>
                <p>L’utilisation d’un burger menu sur un site utilisable depuis un ordinateur de bureau n’est pas recommandée (Source : Nielsen Norman Group) . L’usage du burger est principalement à destination des utilisateurs naviguant sur un mobile (et encore son usage sur mobile est remis en question). Sur un écran d’ordinateur, les principales entrées seront masquées ce qui appauvrit la découvrabilité du menu et donc l’expérience utilisateur.</p>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <img className="banner__row__container__img"  src="https://picsum.photos/500/400" alt="placeholder"/>
                </div>
                <div className='banner__row__container'>
                    <h3>L’utilisabilité de votre site : les écueils à éviter</h3>
                    <ul>
                        <li>Une arborescence erronée : les rubriques reflètent une logique interne qui n’est pas adaptée à votre visiteur ; il ne sait pas où trouver ce qu’il cherche et n’est pas incité à découvrir vos produits, services ou contenus.</li>
                        <li>Une interface non optimisée : les éléments de navigation sont mal placés, les formulaires sont hermétiques, le site suscite la méfiance de l’internaute (design dépassé, absence de mentions légales, etc.)</li>
                    </ul>
                    <p>Dans notre process d’accompagnement, la réflexion sur l’arborescence est réalisé durant la phase de cadrage du projet.</p>
                    <p>Saviez-vous que 80 % des internautes abandonnent une commande à cause du formulaire de création de compte (étude Benchmark Group, 2009) ?</p>
                </div>  
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Le déroulement de l’audit</h3>
                <p>L’audit ergonomique va se concentrer sur les éléments de l’interface qui permette à l’utilisateur d’interagir avec le site dans un premier temps. Nos experts vont s’appuyer sur la littérature existante, les études de cas et leurs formations pour déceler des points pouvant poser un problème. Au cours de nos années d’expérience nous avons audité de nombreuses interfaces. Nous en avons tiré des enseignements, qui, couplés à la mise en place de certains outils (comme Content Square, par exemple) ont permis d’améliorer nettement les performances d’un devis, d’un formulaire de prise de contact, d’un menu ou encore de l’engagement plus généralement de l’internaute cible.</p>
                <p>Cependant nous n’allons pas conduire l’audit de la même façon selon ce que vous souhaitez faire. Nous distinguons ainsi deux situations : un audit réalisé dans le cadre d’une amélioration continue ou un audit réalisé dans le cadre d’une refonte d’un site.</p>
            </article>
            <article className='content__block__img'>
                <img src="miro.png" alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='content__block__insight'>
                <h5>Le saviez-vous ?</h5>
                <p>Les audits ergonomiques qu nous réalisons repose sur des normes et des critères issus de travaux de recherche et d’expérimentations (entre autres) :</p>
                <ul>
                    <li>Les critères de Bastien & Scapin – identification des difficultés d’ergonomie</li>
                    <li>Les heuristiques de Jacob Nielsen</li>
                    <li>Les lois de la Gestalt – notamment les principes de proximité et de similarité</li>
                    <li>La loi de Miller – capacité de traitement de l’information (charge cognitive voir l’exemple du pot de confiture)</li>
                </ul>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Audit dans le cadre d’une amélioration continue</h3>
                <div className='content__article__popup'>
                    <div className='content__article__popup__container'>
                        <img src="emmanuel_camara.png" alt="img manu"/>
                    </div>
                    <div className='content__article__popup__container'>
                        <p>Nous préférons vous laisser juger par vous-même, à travers les retours de nos clients.</p>
                        <Link to="/contact" className='content__article__popup__container__link'>En savoir plus</Link>                        </div>
                </div>
            </article>
            <article className='content__block__row__container__text'>
                <p>Lorsque nous conduisons un audit de l’ergonomie d’un site internet dans le cadre d’une amélioration continue nous regardons sur les pages clefs du site les éléments qui peuvent induire en erreur un utilisateur (un bouton mal nommé ou pas visible – la proximité de deux éléments rendant l’action confuse etc…) ou retarder sa prise de décision ou la stopper.</p>
                <p>L’objectif est de mettre en place rapidement des changements minimaux afin de pouvoir influer par exemple sur le taux de conversion d’un site. Ce type d’audit intervient généralement la plupart du temps pour des sites e-commerce car les gains sont alors réels. Augmenter le taux de conversion de 0.1 ou 0.2 permet d’augmenter les ventes en conséquence.</p>
                <p>Dans le cadre de ce type d’audit (et d’accompagnement opérationnel) nous nous appuyons beaucoup sur des outils tiers comme Content Square ou Clarity afin notamment de disposer de cartes de chaleurs. L’objectif est de détecter rapidement les points d’améliorations possibles dans le parcours d’achat de l’internaute notamment. Les tests utilisateurs sont aussi un des outils essentiels à utiliser lors dans cette situation.</p>
            </article>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Audit dans le cadre d’une mission d’AMOE en vue d’une refonte</h3>
                <div className='content__article__popup'>
                    <div className='content__article__popup__container'>
                        <img src="emmanuel_camara.png" alt="img manu"/>
                    </div>
                    <div className='content__article__popup__container'>
                        <p>Ce type d'audit fait pleinement partie de notre méthodologie de projet lors de nos accompagnements AMOE (avant le projet)</p>
                        <Link to="/contact" className='content__article__popup__container__link'>En savoir plus</Link></div>
                </div>
            </article>
            <article className='content__block__row__container__text'>
                <p>Lors d’un audit de l’expérience utilisateur (audit de l’ergonomie) réalisé lors d’une mission de refonte de site (quand nous accompagnons un client dans la rédaction de son appel d’offres ou de son CCTP) les institutions ou organismes que nous accompagnons veulent opérer un changement radical. La décision de refondre a été prise. L’audit ne consiste pas à chercher comment optimiser l’existant mais se focalise alors sur les éléments qu’il convient de conserver.</p>
                <p>En effet lors de la refonte d’un site internet il est important de prendre en considération l’expérience utilisateur actuelle et si cette dernière est satisfaisante lors de l’utilisation du site ou des outils que ce dernier met à disposition il est primordial non seulement de conserver mais surtout de valoriser cela.</p>
                <p>Lors de ce type d’audit nous analysons les différentes pages clefs du site en ayant en tête les personae réalisé, les études lues, les entretiens réalisés et les statistiques analysées.</p>
                <p>Cet audit est aussi l’occasion d’interroger l’équipe projet sur certains choix opérés pour en comprendre la raison et discuter alors de l’importance de l’emplacement de tel élément ou de l’absence de tel autre.</p>
                <p>En parallèle, nous réalisons un questionnaire auprès des utilisateurs pour recueillir leur avis sur les fonctionnalités existantes et leur besoin sur le site.</p>
                <p>Dans tous les cas à l’issue de ce travail, un rapport d’audit complet vous est remis et présenté en détail, de façon claire et accessible. Il comprend pour chaque point relevé :</p>
                <ul>
                    <li>Les diagnostics du site web et les préconisations,</li>
                    <li>Des structures de page commentées,</li>
                    <li>Le cas échéant, des propositions concernant l’arborescence de votre contenu.</li>
                </ul>
                <p>L’audit peut être complété, dans un second temps, par la réalisation de gabarits ergonomiques afin de mettre en place l’ensemble des préconisations faites. Cela fait partie aussi de la méthodologie mise en place dans l’accompagnement de projet web par Ginseng Web.</p>
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

export default AuditErgonomique