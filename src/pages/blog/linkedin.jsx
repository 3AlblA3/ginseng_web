import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function Linkedin () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h2>Pour la rentrée, exploitez tout le potentiel de votre profil LinkedIn !</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <h5>Dans ce blog, nous allons explorer quelques règles pour optimiser votre profil, comment communiquer sur LinkedIn pour faire connaître votre marque, et enfin, comment Ginseng Web peut vous aider dans toutes les phases de ce processus.</h5>
            <p>La rentrée est souvent synonyme de nouveaux départs, de nouvelles opportunités et de nouvelles ambitions. Pour beaucoup d’entre nous, c’est le moment de mettre à jour notre profil LinkedIn, ce précieux outil de networking qui peut nous aider à décrocher de nouvelles opportunités professionnelles ou à faire connaître notre marque. Dans ce blog, nous allons explorer quelques règles pour optimiser votre profil, comment communiquer sur LinkedIn pour faire connaître votre marque, et enfin, comment Ginseng Web peut vous aider dans toutes les phases de ce processus.</p>
            <h3>Optimisation de votre profil LinkedIn</h3>
            <h5>Photo de profil et photo de couverture</h5>
            <p>Votre photo de profil est la première chose que les gens voient, alors assurez-vous qu’elle soit professionnelle et qu’elle vous représente bien. Une photo de couverture qui est en lien avec votre secteur d’activité ou qui montre quelque chose d’intéressant sur vous ou votre entreprise peut également aider à attirer l’attention.</p>
            <h5>Titre et résumé</h5>
            <p>Votre titre est ce qui apparaît juste en dessous de votre nom, alors assurez-vous qu’il soit clair, concis et qu’il reflète votre poste actuel ou le poste que vous recherchez. Votre résumé est l’occasion de raconter votre histoire, d’expliquer ce qui vous passionne et ce que vous recherchez. Assurez-vous d’inclure des mots-clés pertinents pour votre secteur d’activité.</p>
            <h5>Expériences, formations et compétences</h5>
            <p>Listez toutes vos expériences professionnelles pertinentes, vos formations et vos compétences. Cela aide à montrer que vous avez l’expérience et les qualifications nécessaires pour le poste que vous recherchez ou pour les services que vous proposez.</p>
            <h3>Communiquer sur LinkedIn pour faire connaître sa marque</h3>
            <h5>Publiez régulièrement du contenu pertinent</h5>
            <p>Publiez régulièrement des articles, des mises à jour et des informations pertinentes pour votre secteur d’activité. Cela peut aider à établir votre expertise et à attirer l’attention de ceux qui sont intéressés par votre domaine.</p>
            <h5>Interagissez avec les autres</h5>
            <p>Réagissez aux publications d’autres personnes, partagez-les si elles sont pertinentes et participez à des discussions. Cela peut aider à élargir votre réseau et à vous faire remarquer.</p>
            <h5>Utilisez des messages privés de manière judicieuse</h5>
            <p>N’hésitez pas à envoyer des messages privés pour entrer en contact avec des personnes qui vous intéressent, mais faites-le de manière judicieuse. Personnalisez vos messages et expliquez pourquoi vous souhaitez entrer en contact avec cette personne en particulier.</p>
            <h3>Comment Ginseng Web peut vous aider</h3>
            <p>Chez Ginseng Web, nous comprenons l’importance d’avoir une page LinkedIn optimisée et une stratégie de communication efficace. Nous pouvons vous aider à optimiser votre page entreprise, à créer du contenu pertinent et à élaborer une stratégie de communication qui vous aidera à atteindre vos objectifs et à prospecter efficacement sur LinkedIn.</p>
            <p>Que vous soyez à la recherche d’un nouveau poste, que vous souhaitiez promouvoir votre entreprise ou que vous cherchiez à élargir votre réseau, Ginseng Web est là pour vous aider à chaque étape du processus. Contactez-nous dès aujourd’hui pour en savoir plus sur nos services et comment nous pouvons vous aider à exploiter tout le potentiel de votre profil LinkedIn pour cette rentrée !</p>
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

export default Linkedin