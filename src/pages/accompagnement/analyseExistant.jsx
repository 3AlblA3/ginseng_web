import React, { useState, useEffect } from 'react';import { Link } from "react-router-dom";
import './analyseExistant.css'

function AnalyseExistant() {

  const [activeAudit, setActiveAudit] = useState(null);

          
            // Sample audit data
            const audits = [
              { title: 'Audit ergonomique', content:(<><p>Quels aspects de l’expérience utilisateur méritent d’être préservés ? <br/>
                Où se situent les obstacles qui freinent la fluidité des interactions ? <br/>
                Et, surtout, quelles pistes d'amélioration s'ouvrent à nous pour améliorer l’efficacité globale ?</p>
                <p>Un audit ergonomique ne se limite pas à l’interface utilisateur, il inclut aussi une évaluation approfondie de l’accessibilité. Notre rôle est d'analyser dans quelle mesure cette dimension est cruciale pour votre projet, et de l’intégrer dans le cahier des charges si nécessaire. L’accessibilité touche autant à la structure du site qu'à la manière dont les contenus sont présentés, et il est essentiel d’en tenir compte pour offrir une expérience inclusive à tous.</p>
                <p>Dans tout projet de refonte numérique, l’un des défis majeurs est l’accompagnement au changement, tant pour vos équipes que pour vos utilisateurs finaux. Nous intégrons cette dimension dès le début, en identifiant les éléments clés de votre interface, ceux qui créent de la valeur et doivent être maintenus. Par exemple, si nous découvrons que votre moteur de recherche est particulièrement apprécié, nous veillerons à en conserver l'essence dans la future version du site.</p></>) },
              { title: 'Audit editorial', content: (<><p>L'audit des contenus a pour objectif de saisir ce qui fait la richesse de vos ressources et d’en préserver les éléments les plus impactants. L'enjeu est de capitaliser sur ce qui fonctionne et de l'intégrer de manière stratégique lors de la refonte du site. C'est aussi l'occasion idéale pour faire un tri : certains contenus ont peut-être perdu de leur pertinence avec le temps.</p>
                <p>Cette étape est particulièrement cruciale pour les plateformes ayant accumulé une vaste bibliothèque de contenus. L’audit permet de revoir en profondeur l’organisation des informations, afin de rendre plus fluide et cohérente la navigation via l’arborescence du site, et ainsi aborder la refonte avec une base solide et structurée.</p>
                </>) },
              { title: 'Audit SEO', content: (<><p>Dans le cadre d'une refonte web, comprendre et maîtriser votre référencement naturel est essentiel pour préserver votre positionnement. Notre mission ? Analyser les points forts et les faiblesses de votre SEO actuel afin de les traduire efficacement dans le cahier des charges et ainsi éviter toute perte de visibilité.</p>
                <p>Contrairement à un audit SEO classique axé sur l’amélioration immédiate des positions, notre approche, dans le cadre d’une refonte, vise à préserver les acquis. Nous n’utilisons pas seulement des outils comme SEMrush pour traquer les problèmes techniques, mais nous nous concentrons sur la structure existante qui fonctionne. L'objectif est clair : garder intact ce qui vous assure déjà un bon référencement.</p>
                <p>Lors de cet audit, nous identifions les pages stratégiques, les éléments clés de votre structure SEO (notamment les balises sémantiques HTML) et nous les documentons précisément pour une transition en douceur lors de la refonte. Préserver votre SEO est crucial pour maintenir, voire améliorer, votre visibilité dans les moteurs de recherche.</p>
                <p>Notre expertise consiste à encadrer rigoureusement cette transition SEO. Nous prévoyons des actions essentielles comme la gestion des redirections (les fameuses 301) et la restructuration des contenus pour garantir un SEO optimisé, sans rupture de performance.</p>
            </>) },
              { title: 'Audit technique', content: (<><p>Grâce à l’expérience de notre équipe, notamment celle de nos développeurs, nous sommes en mesure de plonger au cœur de votre infrastructure pour en comprendre les rouages.</p>
                <p>L’audit technique que nous réalisons ne se limite pas à évaluer la qualité du code ou à vérifier l’efficacité des plugins utilisés – cela fait l’objet d’analyses plus spécifiques. Ici, notre objectif est de décrypter l'architecture globale de votre projet : </p>
                <p>Lors de cet audit, nous identifions les pages stratégiques, les éléments clés de votre structure SEO (notamment les balises sémantiques HTML) et nous les documentons précisément pour une transition en douceur lors de la refonte. Préserver votre SEO est crucial pour maintenir, voire améliorer, votre visibilité dans les moteurs de recherche.</p>
                <p>Notre expertise consiste à encadrer rigoureusement cette transition SEO. Nous prévoyons des actions essentielles comme la gestion des redirections (les fameuses 301) et la restructuration des contenus pour garantir un SEO optimisé, sans rupture de performance.</p>
                <p>Sur quoi repose votre infrastructure actuelle ? <br/>
            Comment vos systèmes interagissent-ils entre eux ?</p>
            <p>Au cours de cette phase, nous développons des schémas relationnels qui permettent de visualiser les interactions entre vos différents systèmes d’information. Ce travail minutieux nous permet de repérer les améliorations possibles et, souvent, d’identifier des solutions qui vous feront gagner un temps précieux. Ce moment est clé dans l’accompagnement digital, car c’est ici que des propositions d’optimisation concrètes voient le jour. <br/>
            L’objectif final ? Poser des bases solides pour votre futur projet numérique. En comprenant parfaitement le socle technique de l’existant, nous préparons le terrain pour un développement fluide et optimisé.</p>
            </>)},
              { title: 'Audit concurentiel', content: (<><p>En plus de l’analyse de votre propre écosystème digital, il est essentiel d’examiner ce que font vos concurrents ou des sites comparables dans votre secteur.</p>
                <p>Comment structurent-ils l’information ? <br/>
                Quelles solutions mettent-ils en place pour répondre aux besoins des utilisateurs ? <br/>
                Comment optimisent-ils l’accès aux contenus et la navigation ?</p>
                <p>L’audit concurrentiel, ou benchmark, nous permet de décortiquer les pratiques des acteurs de votre marché qui partagent des problématiques similaires aux vôtres. Cette analyse comparative offre des idées précieuses pour améliorer votre site web, ajuster votre stratégie digitale, et parfois même identifier les pièges à éviter.</p>
                <p>S’inspirer, innover, se différencier</p>
                <p>L’objectif de cet audit est d’explorer ce qui fonctionne ailleurs pour inspirer des optimisations concrètes et des évolutions pour votre projet. Mais il ne s’agit pas simplement de reproduire : il s’agit de comprendre les tendances du marché, de saisir les opportunités d'innovation, et de développer une approche différenciante qui vous permettra de vous démarquer de vos concurrents.</p>
                <strong>En étudiant les stratégies de vos pairs, nous vous aidons à identifier des solutions créatives et performantes pour enrichir l’expérience utilisateur et atteindre vos objectifs de manière plus efficace.</strong>
            </>) },
            ];
          
            const toggleAudit = (index) => {
              setActiveAudit(activeAudit === index ? null : index);
            };

    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Avant le projet</h4>
                <h2>Analyse de l'existant : recenser les fonctionnalités et les enjeux techniques</h2>
            </div>
        </section>
        <section className='content__block__intro'>
            <div className='content__block__intro__container'>
                <h3>Phase d’immersion : s’approprier votre environnement et vos enjeux</h3>
                <p>Chaque projet d’accompagnement digital débute par une analyse complète de la situation existante. Ce travail s’articule autour de plusieurs phases, chacune ayant pour objectif de dresser un état des lieux précis et de formuler des pistes d’action adaptées.</p>
            </div>
            <div className='content__block__intro__offset__img'>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='content__block__row__container__text'>
                <h3>Phase d’immersion : s’approprier votre environnement et vos enjeux</h3>
                <p>La phase d’immersion constitue le point de départ de tout projet digital. Cette étape fondatrice permet à notre équipe de comprendre en profondeur votre organisation, afin de poser les bases du projet.</p>
                <p>Qu’il s’agisse de la rédaction d’un cahier des charges pour la refonte d’un site internet ou d’un projet de transformation numérique, cette immersion est essentielle pour appréhender les défis spécifiques de votre structure. Cela s’applique également pour le développement ou l’optimisation d’applications digitales.</p>
                <p>Durant cette période, l’équipe de projet prend le temps de s’approprier l’environnement métier du client, de comprendre ses enjeux commerciaux, techniques et stratégiques. Cela permet de définir une vision claire des besoins et des attentes. Cette immersion est primordiale pour éviter les incompréhensions futures et pour assurer que toutes les spécificités du projet soient bien prises en compte dès le départ.</p>
            </div>
            <div className='content__block__row__container__percentage'>
                <h3>10%</h3>
                <p>Temps investi dans la phase d'immersion.</p>
                <h3>80%</h3>
                <p>Taux de réussite des projets avec une immersion réussie, contre 50 % sans bonne phase d'immersion.</p>
            </div>
        </section>
        <section className='content__block__row'>
            <div className='content__block__insight__small__container'>
                <div>
                    <p>Qui participe?</p>
                    <p>Qui valide?</p>
                </div>
            </div>
            <div className='content__block__insight__small__container'>
                <div>
                    <p>Qui participe?</p>
                    <p>Qui valide?</p>
                </div>
            </div>
            <div className='content__block__insight__big__container'>
                <div>
                    <h3>Comment communiquer entre les services concernés ?</h3>
                    <p>Pour garantir le bon déroulement du projet, il est essentiel de clarifier, dès le début, les rôles et responsabilités de chacun, ainsi que les étapes cruciales de validation. Mettre en place des points réguliers avec les équipes de direction pour leur offrir une visibilité continue sur l’avancement du projet fait partie intégrante de notre approche méthodologique.</p>
                </div>
            </div>
        </section>
        <section className='content__block__row'>
        <div className="content__block__audits">
          <h3>Audits et analyses: explorer et orienter pour mieux répondre aux attentes de vos utilisateurs</h3>
          {audits.map((audit, index) => (
            <div key={index}>
              <div className="content__block__audits__row__title" onClick={() => toggleAudit(index)}>
                <div className="content__block__audits__row__number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <p>{audit.title}</p>
                <span>{activeAudit === index ? '▲' : '▼'}</span>
              </div>  
              <div className={`content__block__audits__row__content ${activeAudit === index ? 'active' : ''}`}>
                {audit.content}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='content__block__row'>
        <div className='banner__column'>
          <h3>Pioneering projects for Intelligent solutions</h3>
          <div className='banner__column__img__container'>
            <div className='banner__column__img__sticky'>
              <div className='banner__column__img__bubble'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='banner__column__img'>
              <div className='banner__column__img__bubble'>
                <p>DeepVision: Enhancing image recognition with neural networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='accueil__section__blog'> 
      <div className='accueil__section__blog__header'>
        <div className='accueil__section__blog__header__title'>
          <h4>Avant le projet</h4>
          <h3>Découvrez nos articles de blog</h3>
        </div>
        <Link to='/blog' className='accueil__section__blog__header__link'>En lire d'avantage</Link>
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
        <h3>Les beaux projets commencents toujours par un premier échange</h3>
        <Link to='/contact' className='accueil__section__contact__container__link'>Nous contacter</Link>
      </div>  
    </section >
        </>
    )
}

export default AnalyseExistant

