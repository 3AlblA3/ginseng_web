import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function TestErgonomie () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h2>Tests utilisateurs pour améliorer l'ergonomie de votre site web  </h2>
            </div>
        </section>
        <section className='content__block__column'>
                <p> Améliorez l'ergonomie de votre site avec les tests utilisateurs de Ginseng Web : analyse UX et optimisation pour une meilleure expérience utilisateur. </p>
                <h3>Introduction </h3>
                <p>Vous avez mis du cœur à concevoir votre site web, et nous le comprenons. Mais avez-vous pensé à le regarder avec les yeux de vos visiteurs ? </p>
                <p>Boutons disparus, menus interminables, contenus incompréhensibles... autant d'obstacles qui freinent vos visiteurs.  </p>
                <p>Notre mission ? Vous aider à voir votre site comme vos clients le voient. Grâce à nos audits ergonomiques, nous mettons le doigt sur les points faibles de votre interface et vous proposons des solutions concrètes pour améliorer l'expérience utilisateur. Car un site web, c'est bien plus qu'un simple catalogue en ligne : c'est votre vitrine, votre ambassadeur. </p>
                <p>Des codes couleur incohérents pour les éléments interactifs, des contenus trop lourds ou trop chargés, ou encore l'impossibilité de finaliser une action pour diverses raisons... Autant de problèmes d'ergonomie que Ginseng Web est en mesure de repérer, d'analyser et de corriger. Et ce n'est pas tout : nous concevons également des sites web, pour un accompagnement complet ! </p>
                <h3>Le syndrome du créateur possessif : « C'est moi qui l'ai conçu, je le connais mieux que personne ! » </h3>
                <p>Pourquoi l'utilisateur remarquerait-il les défauts d'ergonomie de votre site si vous-même ne les percevez pas ? Tout comme on peut passer des heures devant le miroir pour ajuster chaque détail, votre site mérite un regard extérieur et impartial. C'est là qu'intervient Ginseng Web. </p>
                <p>Lors d'un audit ergonomique, nous devenons ce miroir : trop plongé dans la création de votre site, vous avez sans doute ignoré ces petits éléments qui frustrent l'expérience utilisateur (l'incontournable « UX »). À force d'analyser des sites et de parfaire nos connaissances, nous avons développé un œil d'expert en ergonomie numérique. Et comme on dit, c'est en forgeant qu'on devient forgeron. </p>
                <p>Pendant des heures, voire des jours, nous examinons chaque aspect de votre site : structure des pages, efficacité des interactions, clarté des formulaires... Rien n'échappe à notre expertise. Nous vous fournissons un rapport détaillé et visuellement riche, illustré par des exemples concrets tirés de votre propre site. </p>
                <p>Vous pensiez que tout était parfait ? Détrompez-vous. Une fois notre audit terminé, vous ne verrez plus votre site de la même façon : ce bouton dont la couleur change d'une page à l'autre, ces dix rubriques au nom créatif mais confus... Peut-être que tout cela n 'est finalement pas aussi efficace que vous le pensez. </p>
                <p>Ces observations, parfois dures à accepter, sont pourtant indispensables pour rendre votre site plus intuitif et performant. Chez Ginseng Web, notre objectif est clair : améliorer l'expérience de vos utilisateurs, même si cela implique de critiquer votre « bébé ». Après tout, nous visons le même mais : la satisfaction totale de vos visiteurs. </p>
                <h3>Les tests utilisateurs : le miroir implacable de votre site </h3>
                <p>Chez Ginseng Web, nous ne prétendons pas détenir la vérité absolue. C'est pourquoi nous réalisons des tests utilisateurs pour confronter votre site à sa véritable audience, avec l’aide de Testapic Après avoir défini les personas (types d'utilisateurs) et conçu des scénarios précis, nous sélectionnons des testeurs représentatifs de votre cible. Leurs réactions, leurs hésitations ou, à l'inverse, leur fluidité de navigation sont minutieusement enregistrées. </p>
                <p>Ces tests révèlent des informations précieuses : frustration, confusion, satisfaction... tout est passé au crible et analysé. Nous vous fournissons ensuite un rapport détaillé de ces expériences, mais si vous êtes assez courageux, nous pouvons également vous donner accès aux vidéos des tests. Attention, regarder des heures de navigation chaotiques peut être éprouvant ! </p>
                <p>Après cette étape, nous proposons de nouveaux gabarits pour repositionner les clés du site, afin que vos éléments s'y déplacent plus facilement. Parfois, cela implique de supprimer certaines fonctionnalités ou même de repenser complètement le design. Mais pas de panique : nous vous accompagnons tout au long du processus et vous recommandons les meilleurs experts en refonte de site.</p>
                <p>Avec Ginseng Web, votre site est entre de bonnes mains, prêt à être optimisé pour offrir la meilleure expérience utilisateur possible. </p>
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

export default TestErgonomie