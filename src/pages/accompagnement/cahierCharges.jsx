import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './cahierCharges.css'

function CahierCharges () {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        { title: "Travail des contenus", content:(<>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas perspiciatis officiis vero, amet, earum iure inventore tempora fugiat dicta porro, perferendis est reiciendis corporis! Excepturi officia perferendis quia explicabo?</p>
          </>
        )},
        { title: 'Test utilisateurs', content: (<>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quaerat velit aut aliquam quas amet blanditiis sint accusamus. Voluptates ut voluptatum quae, molestias dolor ipsa quidem reprehenderit at fugiat mollitia?</p>
          </>) },
        { title: 'Gabarits ergonomiques', content: (<>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates temporibus deleniti, aspernatur atque mollitia repellendus nihil minima. Magnam consectetur nemo voluptatibus aliquid in est et, cum, commodi officiis suscipit voluptatum.</p>
      </>) },
      { title: 'Gestion de projet', content: (<>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates temporibus deleniti, aspernatur atque mollitia repellendus nihil minima. Magnam consectetur nemo voluptatibus aliquid in est et, cum, commodi officiis suscipit voluptatum.</p>
    </>) }
      ];
    
      const toggleQuestion= (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
      };

    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Avant le projet</h4>
                <h2>Rédaction du cahier des charges (CCTP)</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <p>C’est à travers le travail sur l’arborescence, les gabarits et les contenus que votre projet commence à prendre vie, se transformant peu à peu en une réalité tangible. On voit le site se dessiner, prêt à accueillir ses utilisateurs.</p>
            <h3>Cahier des charges : un document clé, mais souvent un casse-tête à rédiger</h3>
            <p>La création d’un cahier des clauses techniques particulières (CCTP), ou cahier des charges, est un passage incontournable pour démarrer un projet de refonte/création de site web ou de développement d’une application mobile. Pourtant, cet exercice peut rapidement s'avérer complexe et exigeant.</p>
            <p>Parce que vos équipes se retrouvent souvent face à des aspects techniques et stratégiques qui dépassent leur domaine d’expertise, ou simplement parce qu’elles manquent de temps pour s’y consacrer pleinement. La rédaction d’un CCTP nécessite de consulter de nombreux départements, de recueillir les attentes de chacun, de comprendre les besoins des utilisateurs finaux, puis de traduire toutes ces informations en un document clair et cohérent. Cela demande une analyse approfondie, une synthèse rigoureuse, et beaucoup de temps, ce qui en fait une étape particulièrement chronophage.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <p>Le placement de chaque élément, le choix des termes, et le nombre de rubriques sont autant de facteurs déterminants pour que vos utilisateurs, définis à travers vos personae, puissent naviguer aisément sur le site. Chaque décision, aussi subtile soit-elle, influence directement l’expérience de vos visiteurs.</p>
            <p>L’analyse de l’existant et l’audit de référencement web apportent également des éclairages précieux pour façonner une arborescence qui soit non seulement intuitive, mais aussi optimisée pour les moteurs de recherche. Un dispositif de navigation ne se limite pas au simple menu principal. Il inclut une série d’éléments qu’il faut soigneusement intégrer lors de la création de l’arborescence : le menu principal et ses sous-rubriques déroulantes, bien sûr, mais aussi un menu de navigation secondaire (souvent placé en haut de page), un menu contextuel (présent à l’intérieur des pages) et le footer, ce pied de page qui accompagne vos utilisateurs sur toutes les sections du site. Chacun de ces éléments joue un rôle crucial dans l’expérience utilisateur globale.</p>
        </section>
        <section className='content__block__row'>
            <article className='content__block__img'>
                <img src="miro.png" alt="miro"/>
            </article>
            <article className='content__block__row__container__sticky'>
                <h3>Construire ensemble l’arborescence de votre projet</h3>
                <p>L'arborescence est la clé de l'organisation de votre site, et cette organisation doit avant tout être pensée du point de vue de vos utilisateurs, non de celui de l’équipe projet. C'est pourquoi nous recommandons de travailler sur l'architecture du site une fois que les personae ont été créés, sur la base du recueil des besoins et de vos connaissances. Ce travail fondamental doit être réalisé avant la conception des gabarits ergonomiques et se nourrir des études préliminaires, notamment l’analyse des sites concurrents.</p>
                <p>Une fois finalisée, l’arborescence est formalisée de manière schématique, ce qui permet de la partager facilement, notamment lors de l’appel d’offres, et d’assurer que tout le monde soit aligné sur la structure du futur site.</p>
            </article>
        </section>
        <section className='content__block__column'>
            <h3>Prévoir la gestion des contenus : un défi incontournable</h3>
            <h5>Un gabarit de page c’est quoi ?</h5>
            <p>Le gabarit ergonomique (ou wireframe) sert de fondation à la structure d'une page en définissant l'emplacement de tous les éléments qui y seront intégrés. À ce stade, aucune intention graphique n'intervient : l'ergonomie est le seul guide. Chaque décision est prise en fonction de la logique d’usage, avec pour objectif de rendre l’expérience intuitive pour vos personae. Les éléments doivent être placés de manière cohérente, afin d'offrir un accès simple, rapide et pertinent à l’information recherchée.</p>
            <div className='content__block__img'>
                <img src="banner_ph.png" alt="banner placeholder"/>
            </div>
            <h5>Ça y est, le projet devient concret.</h5>
            <p>Nous échangeons avec vous sur le placement stratégique de chaque élément, en pesant les avantages et les implications de ces choix. C’est également à ce moment que les éléments commencent à prendre forme visuellement, facilitant ainsi la projection de toute l’équipe vers ce que sera le futur site.</p>
            <p>Durant cette étape, nous mettons à profit l’expertise que nous avons développée à travers la réalisation de nombreux sites et applications. Cela nous permet de vous conseiller sur certains principes essentiels, comme l’utilité d’un slider ou l’adoption de conventions ergonomiques reconnues. L’objectif reste toujours le même : offrir une expérience optimale à vos personae, qui sont au centre de toutes nos réflexions.</p>
        </section>
        <section className='content__question'>
        <div className="content__question__container">
          <p>A disposition de vos projets</p>
          <h3>Découvrez nos expertises</h3>
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
        <section className='content__block__column'>
            <h3>Soumettre les éléments aux futurs visiteurs : les tests utilisateurs</h3>
            <h5>Quel intérêt pour des tests utilisateurs ?</h5>
            <p>Nous apprécions particulièrement l’étape où nous sollicitons les retours des utilisateurs de votre site. Que ce soit lors de la définition des cibles pour comprendre leurs attentes et besoins, ou plus tard pour valider la structure des gabarits et l’arborescence, ces interactions sont cruciales pour s’assurer que le projet répond aux attentes des utilisateurs réels.</p>
            <p>Les tests utilisateurs peuvent se dérouler de plusieurs manières :</p>
            <ul>
                <li>Via un panel interne à votre entreprise</li>
                <li>Ou à travers un outil externe utilisant un panel représentatif de vos cibles</li>
            </ul>
            <p>Dans les deux cas, nous travaillons main dans la main avec vous pour concevoir plusieurs scénarios d’usage, chacun avec des objectifs précis à atteindre.</p>
            <p>Ces tests nous permettent d’observer attentivement les réactions des utilisateurs face aux différents écrans, d’identifier les obstacles qu’ils rencontrent, et de comparer leurs comportements aux attentes initiales. C’est un moyen efficace de vérifier si les besoins des visiteurs ont été correctement anticipés et intégrés au projet. En outre, ces tests nous donnent des indications précieuses sur l’accès à l’information. Par exemple, nous pouvons détecter si un élément est correctement placé ou, à l’inverse, s’il passe inaperçu et nécessite un repositionnement pour optimiser l’expérience utilisateur.</p>
        </section>

        </>
    )
}


export default CahierCharges
