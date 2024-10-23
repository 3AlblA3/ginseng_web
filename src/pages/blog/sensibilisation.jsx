import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function Sensibilisation () {
    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h2>L’importance d’un site web bien conçu pour sensibiliser à des causes comme Octobre Rose</h2>
            </div>
        </section>
        <section className='content__block__column'>
            <h5>La sensibilisation à des causes importantes comme Octobre Rose nécessite une stratégie bien pensée et un site web bien conçu est au cœur de cette stratégie.</h5>
            <p>Dans un monde où la technologie domine, la présence en ligne est devenue essentielle pour toute organisation ou cause. Octobre Rose, la campagne annuelle de sensibilisation au cancer du sein, ne fait pas exception à cette règle. Un site web bien conçu peut jouer un rôle crucial dans la sensibilisation à cette cause et dans la mobilisation des ressources nécessaires pour soutenir la recherche et les soins. Dans cet article, nous explorerons l’importance d’un site web bien conçu pour sensibiliser à des causes comme Octobre Rose, en mettant en évidence des exemples de success story.</p>
            <h3>L’importance d’une présence en ligne</h3>
            <p>Aujourd’hui, la plupart des gens se tournent vers Internet pour obtenir des informations. Selon une étude récente, plus de 80% des consommateurs effectuent des recherches en ligne avant de prendre une décision d’achat ou de soutien. Ainsi, avoir un site web est essentiel pour toute cause ou organisation qui souhaite toucher un large public.</p>
            <h3>La conception du site web : un élément clé</h3>
            <p>Un site web bien conçu est non seulement esthétiquement plaisant, mais il est aussi fonctionnel, facile à naviguer et adapté aux mobiles. Pour une cause comme Octobre Rose, il est essentiel que le site web soit accessible à tous, qu’il fournisse des informations claires et précises sur la cause et qu’il encourage les visiteurs à agir.</p>
            <p>Visitez notre site pour plus d’informations sur la conception de sites web: <Link to="https://www.ginsengweb.fr/">ginsengweb.fr</Link></p>
            <h3>Exemples de success story</h3>
            <p>L’association Fondation ARC pour la recherche sur le cancer est un exemple d’organisation qui a vu une augmentation de la participation à ses événements annuels après avoir intégré les médias sociaux et les vidéos éducatives sur son site Web.</p>
            <p>L’association a créé une page Facebook et un compte Twitter pour partager des informations sur le cancer du sein et sur ses activités de sensibilisation. Elle a également créé une chaîne YouTube pour diffuser des vidéos éducatives sur la prévention et le dépistage du cancer du sein.</p>
            <p>Ces initiatives ont permis à l’association de toucher un public plus large et de sensibiliser davantage les gens au cancer du sein. Elles ont également contribué à augmenter la participation à ses événements annuels, tels que la Marche pour la vie et la Journée mondiale contre le cancer du sein.</p>
            <p>En 2022, la Marche pour la vie de la Fondation ARC a enregistré une participation record de 200 000 personnes. La Journée mondiale contre le cancer du sein a également connu une participation record, avec plus de 10 000 personnes présentes à l’événement parisien.</p>
            <p><Link to="https://octobrerose.fondation-arc.org/">Lien vers cette success story :</Link></p>
            <p>Le site web de la Ligue contre le cancer est un exemple de site web interactif et engageant sur le cancer du sein. Le site web comprend les éléments suivants :</p>
            <ul>
                <li>Une section sur les témoignages de survivantes</li>
                <li>Une section sur la prévention</li>
                <li>Une section pour faire un don</li>
            </ul>
            <h3>Comment un site web bien conçu peut-il aider ?</h3>
            <ul>
                <li><strong>Engagement des visiteurs</strong> : Un design attrayant et une navigation intuitive peuvent inciter les visiteurs à passer plus de temps sur le site, augmentant ainsi les chances qu’ils s’engagent.</li>
                <li><strong>Mobilisation des ressources</strong> : Un appel clair à l’action, comme un bouton de don, peut faciliter la mobilisation des ressources nécessaires pour soutenir la cause.</li>
                <li><strong>Éducation </strong>: Un site web peut servir de plateforme éducative, fournissant des informations précieuses sur la prévention, le dépistage et le traitement.</li>
            </ul>
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

export default Sensibilisation