import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function TestUtilisateur () {

    const [activeQuestion, setActiveQuestion] = useState(null);

          
    // Définition de notre tableau d'objets des questions à affichers
    const questions = [
      { title: "Déterminer les critères de sélection :", content:(<>
        <p>La première étape consiste à définir clairement les critères de sélection des testeurs en fonction de votre personne . Ces critères peuvent inclure l'âge, la localisation, le secteur d'activité, la familiarité avec les outils numériques, ou encore les centres d'intérêt. Par exemple, si vous souhaitez tester un site destiné aux amateurs de bandes dessinées, il sera essentiel de recruter des lecteurs de BD. Attention toutefois à ne pas être trop restrictif : plus vos critères seront précis, plus il sera difficile de trouver des testeurs correspondants. Il est donc important de prioriser ces critères pour cibler les plus pertinents.</p>        
        </>
      )},
      { title: "S'organiser et anticiper :", content: (<>
        <p>L'organisation est clé pour un recrutement efficace. Lancez vos campagnes de recrutement et planifiez les tests au bon moment – ​​évitez par exemple les périodes creuses comme le mois d'août. Prévoyez toujours plus de testeurs que nécessaire afin de compléter les désistements de dernière minute, et n'oubliez pas de relancer les participants avant les séances prévues. Un rappel de veille avec les coordonnées à contacter en cas de retard ou d'empêchement peut s'avérer très utile. Enfin, pour encourager la participation, choisissez un lieu de test facile d'accès (pour les tests en présentiel) ou envisagez une petite récompense pour remercier les participants de leurs retours précieux.</p>
        </>) },
      { title: "Recruter des utilisateurs représentatifs :", content: (<>
        <p>Il est crucial que les testeurs soient extérieurs à votre organisation pour obtenir des retours objectifs. Vous pouvez passer par une agence spécialisée pour recruter un panel d'utilisateurs, ou bien organiser vous-mêmes des campagnes de recrutement. Cela peut se faire via votre base de clients ou prospects, en diffusant des annonces sur votre site, vos réseaux sociaux ou des plateformes dédiées. Pour assurer la qualité des profils, nous recommandons d'utiliser des filtres de questionnaires afin de sélectionner les candidats correspondant aux critères définis. Attention à éviter de recruter uniquement dans votre cercle personnel, car cela pourrait fausser les résultats si les testeurs connaissent la personne en charge du projet.</p>
    </>) },
     { title: "Obtenir un panel satisfaisant :", content: (<>
        <p>Une étude de Nielsen et Landauer montre que 85 % des problèmes sont souvent détectés avec un groupe de 5 utilisateurs représentatifs de votre cible. Cependant, pour minimiser les risques, nous vous conseillons d'élargir votre panel à 10-12 utilisateurs par test. Ce nombre permet de couvrir un éventail plus large de comportements et d'attitudes, et garantit des retours plus fiables.</p>
    </>) }
    ];
  
    // affichage des questions par index
  
    const toggleQuestion= (index) => {
      setActiveQuestion(activeQuestion === index ? null : index);
    };

    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Notre expertise</h4>
                <h2>Mise en place des tests utilisateur</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__text'>
                <h3>En quoi consiste les tests utilisateurs web ?</h3>
                <p>Les tests utilisateurs, également appelés UX testing (tests de l'expérience utilisateur), sont parmi les outils les plus puissants pour améliorer l'efficacité d'une solution numérique, qu'il s'agisse d'un site web, d'une application ou d'un intranet. Ils sont au cœur de la démarche UX que nous intégrons lors de l'accompagnement opérationnel en phase d'Assistance à Maîtrise d'Ouvrage (AMOA). Chez Ginseng Web, nous nous assurons que chaque plateforme soit réellement pensée pour ses utilisateurs.</p>
                <p>Concrètement, les tests utilisateurs impliquent de mettre les utilisateurs cibles en situation réelle. Nous les observons pendant qu'ils accomplissent des tâches spécifiques sur le site ou l'application. Par exemple, si nous testons une boutique en ligne, l'une des tâches pourrait être de rechercher un produit, l'ajouter au panier et finaliser l'achat. Ces scénarios sont soigneusement conçus pour refléter les actions que les utilisateurs réalisaient dans leur quotidien.</p>
                <p>Il est important de ne pas confondre les tests utilisateurs avec d'autres types de tests. Par exemple, le test A/B consiste à présenter deux versions différentes d'une même page à des groupes distincts d'utilisateurs afin de déterminer laquelle est la plus performante. Les tests de charge, quant à eux, mesurent la capacité d'un site à gérer simultanément un grand nombre de visiteurs, tandis que les tests de navigation vérifient la fluidité du parcours utilisateur à travers le site. Chacun de ces tests a sa propre spécificité, mais les tests utilisateurs se concentrent sur l'expérience réelle de l'utilisateur et les ajustements nécessaires pour répondre à ses besoins.</p>
            </article>
            <article className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/miro.png`} alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
        <article className='content__block__img'>
          <img src={`${import.meta.env.VITE_IMAGE_PATH}/miro.png`} alt="miro"/>
        </article>
            <div className='content__block__row__container__text'>
                <h3>Soumettre votre projet à l’épreuve de ces cibles</h3>
                <p>L'objectif principal est d'évaluer l'interface numérique à travers les yeux des utilisateurs finaux. C'est comme si nous réalisions un "diagnostic médical" de votre site, où le patient serait l'utilisateur lui-même. Cela nous permet de recueillir des informations précieuses sur ce qui fonctionne bien et sur les points de blocage. Ces observations nous permettent ensuite d'affiner l'ergonomie et d'optimiser les fonctionnalités pour une expérience utilisateur fluide et satisfaisante.</p>
                <h5>Voici quelques aspects clés que nous évaluons :</h5>
                <p><strong>La performance :</strong> L'interface permet-elle à l'utilisateur d'atteindre son objectif de manière efficace et rapide ? Par exemple, un utilisateur cherchant à réserver une chambre d'hôtel doit-il passer par un chemin simple et logique, avec toutes les informations essentielles à portée de main ? Si les informations importantes comme le prix ou la disponibilité ne sont pas accessibles rapidement, cela peut freiner l'utilisateur dans sa démarche. Le test permet d'identifier ces éventuelles diminutions et de vérifier si les bonnes informations sont bien placées au bon moment.</p>
                <p><strong>La compréhension :</strong> L'interface est-elle intuitive et facile à comprendre pour l'utilisateur ? Pendant le test, nous observons si l'utilisateur commet des erreurs lors de son parcours, comme cliquer sur un mauvais bouton ou manquer une étape clé dans un processus d'achat. Mais surtout, nous regardons comment il réagit à ces erreurs. Par exemple, a t-il rapidement compris qu'il s'était trompé et at-il pu corriger la situation sans difficulté ? Ou bien, at-il dû chercher des solutions de contournement pour parvenir à ses fins ? Ces observations sont cruciales pour améliorer la clarté et la simplicité du site.</p>
                <p><strong>Le ressenti :</strong> Comment l'utilisateur se sent-il tout au long de son expérience ? C'est un aspect souvent négligé mais très révélateur. A t-il été frustré ou anxieux lorsque la page a mis du temps à charger ? S'est-il senti rassuré lorsqu'il a vu une option de support client clairement visible ? Un utilisateur qui semble stressé ou perdu signale souvent des problèmes d'ergonomie ou d'organisation des informations.</p>
            </div>
        </section>
        <section className='content__block__column'>
                <h3>Comment les tests utilisateurs peuvent ils rendre votre site plus efficace ?</h3>
                <p>Les tests utilisateurs sont un outil précieux pour optimiser l'efficacité de votre site web. En identifiant les points de friction qui gênent les utilisateurs, ils permettent d'apporter des améliorations ciblées avant même la mise en ligne. Bien que leur mise en place prenne du temps dans le processus de création d'une nouvelle interface, ces tests sont essentiels pour garantir que l'expérience utilisateur soit fluide et agréable, ce qui, à long terme, se traduit par un site plus performant .</p>
                <h5>Mettre à jour ce qui gêne les utilisateurs</h5>
                <p>Les tests utilisateurs sont une étape clé pour améliorer l'ergonomie et la fonctionnalité d'un site. Par exemple, imaginons un site de réservation en ligne où le processus de paiement est long et complexe. Sans tests, ces frictions ne seraient découvertes qu'après la mise en ligne, une fois que plusieurs utilisateurs auront déjà abandonné leur panier. Avec les tests, ces problèmes peuvent être identifiés et corrigés à l'avance, entraînant ainsi des pertes de conversions. Finalement, ce qui pourrait sembler être un investissement de temps devient un gain réel, tant sur le plan financier qu'en termes d'image de marque.</p>
        </section>
        <section className='content__block__row'>
            <div className='banner__column'>
                <h3>Les problèmes que les tests révèlent souvent :</h3>
                <ul>
                    <li>1: Une mauvaise hiérarchie de l'information : Si un utilisateur ne trouve pas facilement les informations qu'il cherche, comme un prix ou des détails sur un produit, il est probable qu'il quitte rapidement le site. Par exemple, sur un site e-commerce, si les descriptions produits sont mal organisées, cela crée une confusion et un abandon de panier potentiel.</li>
                    <li>2: Un problème de localisation : Les tests révèlent également des soucis de clarté sur ce que le site propose ou à qui il s'adresse. Un site d'une entreprise de services qui ne met pas clairement en avant ses offres ou ses cibles pourrait laisser les visiteurs perplexes et incertains de continuer à explorer.</li>
                    <li>3: Un manque de visibilité des actions.</li>
                    <li>4: Un manque d'information sur l'entreprise.</li>
                    <li>5: Une absence d'indication sur le statut des actions : L'utilisateur at-il bien finalisé son achat ? At-il reçu une confirmation ?</li>
                    <li>6: Une chaîne de validation trop complexe : Si le processus pour effectuer une commande ou une action est trop long ou compliqué, cela décourage les utilisateurs. Par exemple, sur un site où plusieurs étapes de validation sont nécessaires pour finaliser un achat, chaque étape supplémentaire augmente le risque d'abandon.</li>
                </ul>
                <p>En définitif, les tests utilisateurs permettent de diagnostiquer ces obstacles avant qu'ils n'affectent la performance du site. Rien ne remplace le retour direct des utilisateurs.</p>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='content__block__temoignage'>
                <h3>Insight</h3>
                <p>Il est essentiel de garder à l'esprit que ni vous, ni votre équipe, ni même l'agence en charge de votre projet numérique ne représente la cible finale de ce projet. Vous avez peut-être une vision claire de ce que vous souhaitez accomplir, mais ce n'est pas vous qui utiliserez le produit au quotidien. C'est pourquoi il est primordial de faire tester votre interface par des utilisateurs qui représentent la véritable audience cible. En effet, ce que vous trouvez intuitif ou évident peut ne pas l'être pour un utilisateur lambda. Par exemple, une équipe de développeurs peut concevoir une interface qu'elle juge simple et fluide, alors qu'en réalité, des utilisateurs moins habitués aux nouvelles technologies pourraient la trouver déroutante ou complexe. Tester auprès des utilisateurs réels permet de comprendre comment ils interagissent avec l'interface, quels obstacles ils rencontrent et quelles fonctionnalités leur sont véritablement utiles. Ces retours directs sont précieux, car ils permettent d'aligner le produit final sur les attentes et les besoins de ses véritables utilisateurs, garantissant ainsi une expérience utilisateur optimale et un taux de satisfaction plus élevé.</p>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__sticky'>
                <h3>Les tests utilisateurs avec Ginseng Web</h3>
                <p>Chez Ginseng Web, nous gérons l'intégralité du processus de tests utilisateurs pour vous. Nous sélectionnons un panel d'utilisateurs correspondant précisément à votre cible, afin de réaliser des tests rigoureux sur votre site ou application. À l'édition de ces tests, nous vous fournissons un compte rendu complet et détaillé. Ce rapport met en lumière les points critiques identifiés, ainsi que les recommandations d'améliorations.</p>
                <p>Notre mission est de trouver les solutions les plus efficaces aux problèmes rencontrés par vos utilisateurs. Cela peut se traduire par une réorganisation de l'arborescence, un repositionnement stratégique de certains éléments clés de l'interface, ou même une refonte complète du gabarit de certaines pages. Chaque action est pensée pour rendre l'expérience utilisateur plus intuitive, fluide et en adéquation avec les attentes de vos clients. Chez Ginseng Web, nous nous engageons à optimiser votre dispositif numérique afin d'améliorer son efficacité et sa performance globale.</p>
            </article>
            <article className='content__block__img'>
              <img src={`${import.meta.env.VITE_IMAGE_PATH}/miro.png`} alt="miro"/>
            </article>
        </section>
        <section className='content__block__row'>
        <div className="content__question__container">
          <h3>Qui sont les Testeurs?</h3>
          <h5>Nos recommandations pour recruter un panel d'utilisateurs-testeurs avec Ginseng Web</h5>
          <p>Chez Ginseng Web, nous vous accompagnons à chaque étape du processus de recrutement d'un panel d'utilisateurs-testeurs pour des tests utilisateurs efficaces. Voici 5 bonnes pratiques que nous recommandons pour garantir des tests pertinents et représentatifs. Bien entendu, si vous choisissez de travailler avec nous, nous serons à vos côtés pour vous conseiller et vous guider tout au long du processus.</p>
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
        </>
    )
}


export default TestUtilisateur
