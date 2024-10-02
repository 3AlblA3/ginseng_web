import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/AgencePresentation.css'


function AgencePresentation () {
    return(
        <>
        <section className='banner'>
            <h4>Notre Agence</h4>
            <h2>Un partenaire engagé à vos côtés pour faire grandir votre entreprise</h2>
        </section>
        <section className='content'>
            <article className='content__article'>
                <h3>Une agence à taille humaine, pour de vrai</h3>
                <p>À chaque étape de la croissance de votre entreprise, vous avez besoin d’actions et de stratégies spécifiques. C’est là que Ginseng Web intervient à vos côtés. Nous sommes une agence de webmarketing et de développement digital à votre service. Vous pouvez compter sur une équipe d’experts pour vous accompagner à accroitre les performances de votre stratégie digitale : Acquisition, Expérience Utilisateur et Data Marketing.</p>
                <p>Fondée en 2018, Ginseng Web est d’abord une agence de développement web puis, sous l’impulsion de clients toujours plus challenger et avec la validation de l’ensemble de l’équipe, l’agence a évolué au fil des années vers le conseil et l’accompagnement.</p>
                <p>Nous sommes une agence à taille humaine : vos interlocuteurs sont fixes et vous connaissent bien. Nous constituons pour chaque projet une équipe dédiée (qui vous suivra du début à la fin du projet) avec un chef de projet qui sera votre contact privilégié.</p>
            </article>
            <article className='content__article'>
                <img className='content__article__img' src="https://picsum.photos/500/700" alt="image" />
            </article>
            <article className='content__article'>
                <img className='content__article__img' src="https://picsum.photos/500/700" alt="image" />
            </article>
            <article className='content__article'>
                <h3>Une équipe qui vous suit tout au long du projet</h3>
                <p>Nous avons une approche éthique et humaine du digital. Un travail à 4 mains où l’utilisateur est toujours au cœur de notre démarche.</p>
                <p>Nous pouvons également solliciter notre réseau de consultants externes pour répondre à toutes vos problématiques : techniques, éditoriales, graphiques, de référencement naturel, ergonomiques… lorsque votre projet nécessite une expertise plus poussée que la nôtre dans un domaine particulier. Toutefois, nous assurons toujours la présence d’un membre de Ginseng Web à chaque étape de votre projet.</p>
                <p>Chaque projet étant unique, la présence d'un référent permet d'adapter les solutions proposées aux besoins spécifiques de chaque client. Cette continuité reflète notamment ce qui nous passionne dans notre travail : la relation humaine qui contribue à renforcer la confiance et à fidéliser nos clients.</p>
            </article>
        </section>
        <section className='banner__row'>
            <div className='banner__row__container'>
                <h3>Un portefeuille qui s’est développé au fil du temps</h3>
                <p>Au départ, Ginseng Web s’est spécialisée dans le développement et la réalisation de projet web : conception et refonte de sites.</p>
                <p>En exerçant d’abord en tant qu’agence web, Ginseng Web a pu développer une expertise concrète, qui nous permet notamment de vous faire des recommandations réalistes vis-à-vis de votre budget et votre planning, de vous proposer des solutions techniques pour répondre efficacement à vos problématiques, de faire appel à des prestataires de confiance pour atteindre vos objectifs …. bref de vous faciliter la vie.</p>
            </div>
            <div className='banner__row__container'>
                <img className='banner__row__container__img' src="https://picsum.photos/500/400" alt="image" />
            </div>
        </section>
        <section className='content'>
            <article className='content__article'>
                <h3>Du developpement au conseil</h3>
                <div className='content__article__bubble'>
                    <img src="https://picsum.photos/100/150" alt="img manu"/>
                    <p>Hello, moi c’est Emmanuel Camara, le co-fondateur de Ginseng Web, je vous parle ici de notre histoire.</p>
                </div>
            </article>
            <article className='content__article'>
                <p>En tant que co-fondateur de l’agence Ginseng Web, j’ai pris la décision il y a quelques années de réorienter notre activité vers le conseil. Cette évolution s’est imposée à moi après plusieurs années passées à créer et à refondre des sites internet. J’ai alors constaté un décalage entre l’importance que nous accordions à la phase de conception et les attentes réelles de nos clients en termes de budget et de délai.</p>
                <p>Ancien dirigeant dans les télécoms, je suis convaincu de l'importance de concilier vision commerciale et expertise technique. En effet, pour réussir dans le secteur du numérique, il est essentiel de comprendre les enjeux commerciaux de nos clients et d'adapter nos offres en conséquence.</p>
                <p>Pour moi, il était donc impensable de faire l’impasse sur les fondamentaux du web : la définition des cibles, la construction d’interfaces intuitives et l’expérience utilisateur. C’est pourquoi j’ai souhaité consacrer l’ensemble de mon énergie à accompagner nos clients dans ces domaines.</p>
                <p>Après avoir mené avec succès quelques missions d’accompagnement, notamment pour le groupement GASEL, j’ai décidé d’impliquer toute l’équipe Ginseng Web dans cette nouvelle orientation. Grâce à une méthodologie éprouvée et à une expertise solide acquises au fil des années, nous avons pu convaincre nos clients de nous faire confiance pour des projets de conseil plus stratégiques. Le soutien de ces premiers clients a été déterminant dans cette transition.</p>
            </article>
            <article className='content__article'>
                <div className='content__article__temoignage'>
                    <p>Témoignage 1</p>
                </div>
            </article>
            <article className='content__article'>
                <div className='content__article__temoignage'>
                    <p>Témoignage 2</p>
                </div>
            </article>
        </section>
        <section className='everest'>
            <div className='everest__bgWhite'>
                <div className='everest__bgWhite__header'>
                    <h4>Notre conviction</h4>
                    <h3>Mais pourquoi l'Everest?</h3>
                </div>
                <div className='everest__bgWhite__content'>
                    <div className='everest__bgWhite__content__text'>
                        <h3>01</h3>
                        <p>Vous êtes-vous déjà demandé ce qu’il se cache derrière le sommet enneigé de l’Everest ? Derrière cette image de victoire, il y a des mois, voire des années de préparation, des kilomètres parcourus, des obstacles surmontés, et une équipe soudée. Chez Ginseng Web, nous pensons qu’un projet web est comparable à l’ascension d’un tel sommet.</p>
                    </div>
                    <div className='everest__bgWhite__content__img'>
                        <img src="everest.jpg" alt="everest" />
                    </div>
                </div>
            </div>
            <div className='everest__bgBlue'>
                <div className='everest__bgBlue__content'>
                    <div className='everest__bgBlue__content__text'>
                        <h3>02</h3>
                        <p>Atteindre le sommet d’un projet web, c’est mettre en ligne un site fonctionnel et esthétique. Mais tout comme l’alpiniste qui contemple le paysage depuis le sommet de l’Everest, nous savons que ce résultat est le fruit d’un long cheminement. Il faut définir la stratégie, concevoir l’architecture, choisir les technologies, créer le design, développer, tester, et enfin déployer. Chaque étape est un défi à relever, une pente à gravir.</p> 
                    </div>
                </div>
                <div className='everest__bgBlue__content'>
                    <div className='everest__bgBlue__content__text'>
                        <h3>03</h3>
                        <p>En tant qu’accompagnateurs, nous sommes vos guides de haute montagne. Nous vous aidons à définir votre objectif, à préparer votre expédition, à surmonter les difficultés et à atteindre le sommet. Réunion de kick-off, audit fonctionnel, rédaction de cahiers des charges, création de wireframes et prototypes interactifs, développement sur-mesure... nous vous offrons un parcours sûr et efficace, pour que vous puissiez vous concentrer sur l’essentiel : profiter de la vue.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='equipe'>
            <h3>Tout comme vos projets, notre équipe est unique en son genre</h3>
            <div className='equipe__container'>
                <div className='equipe__container__content'>
                    <img src="https://picsum.photos/150/100" alt="equipe_photo" />
                    <h4>Emmanuel</h4>
                    <h5>Co-fondateur</h5>
                    <p>Emmanuel apporte son regard expérimenté pour identifier les solutions les plus pertinentes, tant sur le plan technique que fonctionnel. Il participe à toutes les phases du projet et contrôle tous les livrables qui vous seront transmis.</p>
                </div>
                <div className='equipe__container__content'>
                    <img src="https://picsum.photos/150/100" alt="equipe_photo" />
                    <h4>Anaïs</h4>
                    <h5>Co-fondateur</h5>
                    <p>Anaïs apporte son regard expérimenté pour identifier les solutions les plus pertinentes, tant sur le plan technique que fonctionnel. Lead développeur, elle participe à toutes les phases du projet et contrôle tous les livrables qui vous seront transmis.</p>                
                </div>
                <div className='equipe__container__content'>
                    <img src="https://picsum.photos/150/100" alt="equipe_photo" />
                    <h4>Areena</h4>
                    <h5>Chef de projet</h5>
                    <p>Areena vous fait profiter de ses compétences UX UI et éditoriales ainsi que les connaissances en gestion de projet. Elle manie les planning avec agilité, rédige les tableaux de bord et saura vous conseiller à chaque instant.</p>                
                </div>
                <div className='equipe__container__content'>
                    <img src="https://picsum.photos/150/100" alt="equipe_photo" />
                    <h4>Alexandre</h4>
                    <h5>Développeur</h5>
                    <p>Lead développeur, Alexandre intervient sur les projets de développement, lorsque les problématiques techniques requièrent sa vision expérimentée et son expertise chevronnée.</p>
                </div> 
                <div className='equipe__container__content'>
                    <img src="https://picsum.photos/150/100" alt="equipe_photo" />
                    <h4>Thomas</h4>
                    <h5>Concepteur design</h5>
                    <p>Thomas est le créatif de A à Z. Il conçoit et réalise tous vos visuels, vos vidéos et assure la maquette de vos projets web. Il garantit une production de livrables de haute qualité, toujours en adéquation avec vos attentes.</p>
                </div>       
            </div>
        </section>
        
        </>
    )

}

export default AgencePresentation