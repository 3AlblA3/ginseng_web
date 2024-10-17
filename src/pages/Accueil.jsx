import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/accueil.css'
import AutoplayCarousel from '../components/AutoplayCarousel';

function Accueil() {
  

  const [selectedCategory, setSelectedCategory] = useState('Droitico');

  // définitions des variables des menus

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

  const [activeQuestion, setActiveQuestion] = useState(null);

          
  // Définition de notre tableau d'objets des questions à affichers
  const questions = [
    { title: "Combien de temps dure la phase d'immersion", content:(<>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas perspiciatis officiis vero, amet, earum iure inventore tempora fugiat dicta porro, perferendis est reiciendis corporis! Excepturi officia perferendis quia explicabo?</p>
      </>
    )},
    { title: 'Est-ce obligatoire de faire tout les audits?', content: (<>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quaerat velit aut aliquam quas amet blanditiis sint accusamus. Voluptates ut voluptatum quae, molestias dolor ipsa quidem reprehenderit at fugiat mollitia?</p>
      </>) },
    { title: 'Quels sont les outils que vous utilisez, y-a-t-il des frais supplémentaires associés?', content: (<>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates temporibus deleniti, aspernatur atque mollitia repellendus nihil minima. Magnam consectetur nemo voluptatibus aliquid in est et, cum, commodi officiis suscipit voluptatum.</p>
  </>) }
  ];

  // affichage des questions par index

  const toggleQuestion= (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <section>
        <div className='accueil__section__background'>
          <div className='accueil__section__background__title'>
            <div className='accueil__section__background__title__container'>
              <h4>Pour répondre à tous vos objectifs</h4>
              <h2>Ginseng Web vous accompagne dans vos projets digitaux</h2>
              <Link to="/agence_presentation" className="button__blue">Notre agence</Link>
            </div>
          </div>
          <div className='accueil__section__background__description'>
            <div className='accueil__section__background__description__container'>
              <p>
              Nous sommes une agence web à taille humaine, spécialisée dans l’accompagnement digital. Nous vous aidons à imaginer (amoe refonte de site) et réaliser (amoa) votre projet web.
              </p>
              <Link to="/agence_temoignages" className="button__blue">Pourquoi nous choisir?</Link>
            </div>
            <div className='accueil__section__background__description__popup'>
              <div className='content__article__popup'>
                <div className='content__article__popup__container'>
                  <img src="emmanuel_camara.png" alt="img emmanuel"/>
                </div>
                <div className='content__article__popup__container'>
                  <p>Tel les icebergs, les projets ont toujours une partie émergente et une partie immergée…</p>
                  <Link to="/accompagnement_analyseExistant" className='content__article__popup__container__link'>En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='accueil__section__confiance'>
          <h4>Nos différents clients</h4>
          <h3>Ils nous font confiance...</h3>
          <div className='accueil__section__confiance__carousel'>
            <AutoplayCarousel />
          </div>
        </div>
      </section>
      <section className='accueil__section__accompagnement__row'>
        <article className='accueil__section__accompagnement__container__white'>
          <h4>Avant le projet (AMOE)</h4>
          <h3>On vous aide à définir votre besoin</h3>
          <p>Pour rédiger un cahier des charges d’une refonte web (ou autre projet) plusieurs étapes d’échanges entre vous et nous sont nécessaires.
          </p>
          <div className='accueil__section__accompagnement__container__white__row'>
            <Link to='/projet' className='button__white'>Vous avez un projet</Link>
            <Link to='/methodologie' className='button__blue'>Voir notre méthodologie</Link>
          </div>
          <div className='accueil__section__accompagnement__container__white__popup'>
            <div className='content__article__popup'>
              <div className='content__article__popup__container'>
                <img src="emmanuel_camara.png" alt="img manu"/>
              </div>
              <div className='content__article__popup__container'>
                <p>Des questions ? Appelez-nous au 01 86 52 11 06 ou contactez-nous via le formulaire !</p>
                <Link to="/contact" className='content__article__popup__container__link'>Nous contacter</Link>
              </div>
            </div>
          </div>
        </article>
        <div className='accueil__section__accompagnement__black__wrapper'>
          <article className="accueil__section__accompagnement__container__black__content">
            <Link to='/analyse' className='accueil__section__accompagnement__container__black__link'>
              <h3>Analyse de l'existant</h3>
              <span><p>Recenser les fonctionnalités et les enjeux techniques</p><img src="fleche_droite_white.png" alt="fleche white"/></span>
            </Link>
            <Link to='/accompagnement' className='accueil__section__accompagnement__container__black__link'>
              <h3>Audit technique</h3>
              <span><p>Lister vos fonctionnalités et enjeux techniques</p><img src="fleche_droite_white.png" alt="fleche white"/></span>
            </Link>
            <Link to='/accompagnement' className='accueil__section__accompagnement__container__black__link'>
              <h3>Définition de vos cibles</h3>
              <span><p>Lister vos fonctionnalités et enjeux techniques</p><img src="fleche_droite_white.png" alt="fleche white"/></span>
            </Link>
            <Link to='/' className='accueil__section__accompagnement__container__black__link'>
              <h3>Cadrage du projet</h3>
              <span><p>De l'arborescence du site internet à la formation des utilisateurs</p><img src="fleche_droite_white.png" alt="fleche white"/></span>
            </Link>
            <Link to='/' className='accueil__section__accompagnement__container__black__link'>
              <h3>Rédaction cahier des charges (CCTP) et lancement de l'appel d'offres</h3>
              <span><p>Etablir le document clef de votre appel d'offres</p><img src="fleche_droite_white.png" alt="fleche white"/></span>
            </Link>
          </article>
          <div className='accueil__section__accompagnement__container__black'>
          </div>
        </div>
      </section>
      <section className='accueil__section__accompagnement__row'>
        <div className='accueil__section__accompagnement__black__wrapper'>
          <div className='accueil__section__accompagnement__container__black'></div>
          <article className="accueil__section__accompagnement__container__black__content">
            <Link to='/accompagnement' className='accueil__section__accompagnement__container__black__link__2th'>
              <h3>Création UX-UI</h3>
              <span><p>Matérialiser les parcours utilisateurs</p><img src="fleche_droite_black.png" alt="fleche black"/></span>
            </Link>
            <Link to='/' className='accueil__section__accompagnement__container__black__link__2th'>
              <h3>Accompagnement opérationnel</h3>
              <span><p>Du développement du site web aux tests</p><img src="fleche_droite_black.png" alt="fleche black"/></span>
            </Link>
            <Link to='/' className='accueil__section__accompagnement__container__black__link__2th'>
              <h3>Maintenance Evolutive</h3>
              <span><p>Etre présent durant la maintenance de votre site internet</p><img src="fleche_droite_black.png" alt="fleche black"/></span>
            </Link>
          </article>
        </div>
        <article className='accueil__section__accompagnement__container__white'>
          <h4>Pendant le projet (AMOA)</h4>
          <h3>Votre service web-marketing externalisé et même après</h3>
          <p>Nous serons présents sur l’ensemble des réunions pour vous apporter nos conseils d’expert et veiller au respect du cahier des charges web ou CCTP
          </p>
          <div className='accueil__section__accompagnement__container__white__row'>
            <Link to='/projet' className='button__blue'>Vous avez un projet</Link>
            <Link to='/methodologie' className='button__white'>Voir notre méthodologie</Link>
          </div>
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
                <Link to='/cas' className='button__blue'>
                  Voir le cas client
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className='accueil__section__projet'>
        <div className='accueil__section__projet__container'>
          <h3>Explorez nos derniers projets</h3>
          <div className='accueil__section__projet__container__imgs'>
            <div className='accueil__section__projet__container__imgs__row'>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Agence_MO2_Site_architecte.jpg" alt="Agence_MO2_Site_architecte" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Agence MO2</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Celine_Loudet_Landing.jpg" alt="Celine_Loudet_Landing" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Agence Céline Loudet</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="DMH_page_propriete.jpg" alt="DMH_page_propriete"/>
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>DMH</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Dubai_Muslim_Homes_Site_immo.jpg" alt="Dubai_Muslim_Homes_Site_immo" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Dubaï Muslim Homes</p>
                </div>
              </div>
            </div>
            <div className='accueil__section__projet__container__imgs__row'>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Ets_Paumier.jpg" alt="Ets_Paumier" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>ETS Paumier</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Ipnoze_site.jpg" alt="Ipnoze_site" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Ipnoze</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Le_Cactus_Francais_Site_ecommerce.jpg" alt="Le_Cactus_Francais_Site_ecommerce"/>
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Le Cactus Français</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Multipresse.jpg" alt="Multipresse" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Multipresse</p>
                </div>
              </div>
            </div>
            <div className='accueil__section__projet__container__imgs__row'>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="NKS_Beauty_site_ecommerce.jpg" alt="NKS_Beauty_site_ecommerce" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>NKS</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Stores_Plaisance_pop_up.jpg" alt="Stores_Plaisance_pop_up" />
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Stores Plaisance PopUp</p>
                </div>
              </div>
              <div className='accueil__section__projet__container__imgs__content'>
                <img src="Stores_Plaisance_Site_vitrine_complet.jpg" alt="Stores_Plaisance_Site_vitrine_complet"/>
                <div className='accueil__section__projet__container__imgs__hover-content'>
                  <p>Stores Plaisance site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className='accueil__section__projet__container__bottom__text'>Maîtrise des fonctionnalités BtoB pour une expérience e-commerce sur mesure</h3>
      </section>
      <section className='content__block__row'>
        <div className="content__question__container">
          <h3 >Vous avez d'autres questions?</h3>
          {/* Affichage des questions par une fonction map */}
          {questions.map((question, index) => (
            <div key={index}>
              <div className="content__block__audits__row__title" onClick={() => toggleQuestion(index)}>
                <p>{question.title}</p>
                <span>{activeQuestion === index ? '▲' : '▼'}</span>
              </div>  
              <div className={`content__block__audits__row__content ${activeQuestion === index ? 'active' : ''}`}>
                {question.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    <section className='accueil__section__blog'> 
      <div className='accueil__section__blog__header'>
        <h5>Avant le projet</h5>
        <div>
          <h3>Découvrez nos articles de blog</h3>
          <Link to='/blog' className='button__blue'>Je lance mon projet</Link>
        </div>      
      </div>
      <div className='accueil__section__blog__content'>
        <div className='accueil__section__blog__content__container'>
          <div className='accueil__section__blog__content__container__text'>
            <p>Questions sur le web</p>
            <h3>Refonte de site web: pourquoi faire un cahier des charges?</h3>
          </div>
        </div>
        <div className='accueil__section__blog__content__container'>
          <div className='accueil__section__blog__content__container__text'>
            <p>Questions sur le web</p>
            <h3>Quelles technologie pour votre projet?</h3>
          </div>
        </div>
        <div className='accueil__section__blog__content__container'>
          <div className='accueil__section__blog__content__container__text'>
            <p>Questions sur le web</p>
            <h3>Quel prix pour un site web?</h3>
          </div>
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
  );
}

export default Accueil;
