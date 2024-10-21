import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../elements.css'

function CoutSite () {


    return(
        <>
        <section className='banner__intro'>
            <div className='banner__intro__container'>
                <h4>Combien coûte vraiment un site internet en 2024 ?</h4>
                <h2> Un budget sur mesure pour vos projets web</h2>
            </div>
        </section>
        <section className='content__block__column'>
                <p>Découvrez combien coûte la réalisation d'un site internet en 2023. De nombreux facteurs influencent le prix : fonctionnalités, design, technologie. Trouvez le budget adapté à vos besoins et objectifs. </p>
                <h3>Une question qui revient souvent   </h3>
                <p>Depuis l'ouverture de Ginseng Web en 2018, une question revient inlassablement sur les lèvres de nos clients : "Combien coûte un site internet ?" </p>
                <p>C'est une question légitime, mais aussi complexe, tant les possibilités offertes par le web sont vastes et évoluent rapidement. Les technologies, les designs, les fonctionnalités, les attentes des utilisateurs... tout change à une vitesse vertigineuse. Il est donc normal que le coût d'un site internet ne soit pas fixe, mais plutôt un élément qui se définit au cas par cas, en fonction de nombreux paramètres.   </p>
                <h3> Les facteurs influençant le coût d'un site internet : quels sont les éléments qui font varier le prix ?</h3>
                <h5>La complexité du projet </h5>
                <p>Le coût d'un site internet est directement lié à sa complexité. Un simple site vitrine de quelques pages ne nécessitera pas les mêmes ressources qu'une plateforme e-commerce complexe avec un catalogue de milliers de produits, un panier d'achat, des gestions de stocks et des passerelles de paiement.</p>
                <p>Plus votre projet est ambitieux, plus le développement demandera du temps et des compétences spécifiques, ce qui se répercutera inévitablement sur le prix final.</p>
                <h5>Les fonctionnalités spécifiques</h5>
                <p>Vous rêvez d'un espace personnel pour vos clients, où ils pourront accéder à des informations exclusives ?</p>
                <p>Ou peut-être d'une boutique en ligne qui leur permettra de commander vos produits en quelques clics ?</p>
                <p>Chaque fonctionnalité supplémentaire que vous souhaitez ajouter à votre site web impactera directement son coût. Un espace membre, par exemple, nécessitera la mise en place d'un système d'authentification sécurisé et de gestion des profils utilisateurs. Quant à une boutique en ligne, elle demandera le développement d'un panier d'achat, la gestion des stocks et l'intégration de passerelles de paiement. Plus votre site sera personnalisé et doté de fonctionnalités avancées, plus le coût de développement augmentera.</p>
                <h3>Les différentes options pour créer un site internet</h3>
                <h5>Créer son site soi-même</h5>
                <p>Vous êtes plutôt bricoleur ? De nombreux outils en ligne vous permettent de créer votre site web sans avoir de connaissances techniques particulières. Des plateformes comme Wix ou Squarespace offrent des interfaces intuitives et des modèles préconçus pour vous aider à mettre en ligne votre projet rapidement.</p>
                <p>Cependant, pour des fonctionnalités plus complexes comme un espace membre ou une boutique en ligne, vous risquez de buter sur les limites de ces outils. Personnaliser votre site et le faire évoluer dans le temps peut également s'avérer plus compliqué.</p>
                <h3>Combien ça coûte en pratique ?</h3>
                <h5>Des fourchettes de prix indicatives</h5>
                <p>Difficile de donner un prix exact pour la création d'un site web, car cela dépend de nombreux facteurs. Cependant, pour vous donner une idée, un simple site vitrine pourra être réalisé pour quelques centaines d'euros, tandis qu'une boutique en ligne complexe avec plusieurs centaines de produits pourra coûter plusieurs milliers d'euros. Un site avec un espace membre et un blog se situera généralement entre ces deux extrêmes. Il est important de noter que ces prix sont donnés à titre indicatif et peuvent varier en fonction de la complexité du projet, des technologies utilisées et des prestataires auxquels vous faites appel.</p>
                <h3>Conclusion</h3>
                <h5>L'importance d'un audit préalable</h5>
                <p>L'importance d'un audit préalable</p>
                <p>Avant de vous lancer dans la création de votre site web, il est essentiel de réaliser un audit de vos besoins. Cet audit permettra de définir clairement les objectifs de votre projet, d'identifier les fonctionnalités indispensables et d'établir un cahier des charges précis. C'est comme si vous deviez construire une maison : avant de poser la première brique, il faut établir des plans détaillés pour éviter les mauvaises surprises.</p>           
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

export default CoutSite