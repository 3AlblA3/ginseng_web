import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './temoignages.css'

function Temoignages() {
    return(
        <>
       <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Merci à vous</h4>
                <h2>Témoignages clients : Pourquoi choisir notre agence Ginseng Web</h2>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__block__row__container__text'>
                <h3>Une approche collaborative : vous et nous</h3>
                <p>Notre approche repose sur une conviction simple : la collaboration est la clé de la réussite. En travaillant étroitement avec vos équipes, nous visons à optimiser votre projet et à obtenir des résultats concrets. Notre motivation ? Votre satisfaction et l'aboutissement de ce projet.</p>
                <p>En nous associant à vos équipes, nous visons un seul objectif : faire de votre projet un succès. Et, il faut le dire, le travail bien fait !</p>
                <div className='content__article__bubble'>
                    <img src="https://picsum.photos/100/150" alt="img manu"/>
                <p>Les promesses d'un accompagnement personnalisé sont légion dans notre secteur. Nous préférons vous laisser juger par vous-même, à travers les retours de nos clients.</p>                
                </div>
            </article>
            <article className='content__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </article>
        </section>
        <section className='content__block__row'>
            <div className='banner__row'>
                <div className='banner__row__container'>
                    <h3>Titre de la vidéo?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, incidunt accusantium dicta excepturi voluptas similique recusandae iure, numquam sapiente ullam neque ipsum? Autem blanditiis praesentium assumenda exercitationem, alias quaerat at?</p>
                </div>
                <div className='banner__row__container'>
                    <img className='banner__row__container__img' src="https://picsum.photos/500/400" alt="image" />
                </div>
            </div>
        </section>
        <section className='content__block__row'>
            <article className='content__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </article>
            <article className='content__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </article>
            <article className='content__temoignage'>
                <h3>Témoignage</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti provident perferendis ratione ad illo dicta accusantium ducimus quam alias, deserunt explicabo exercitationem? Ea illo ad, perferendis praesentium iusto soluta?"</p>
                <h4>Marie-Hélène C. Directrice adjointe</h4>
                <button>Voir la référence</button>
            </article>
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

export default Temoignages