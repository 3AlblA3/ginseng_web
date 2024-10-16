import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';

function Footer() {

    return (
      <footer>
        <section className='last_popup'>
          <div className='content__article__popup'>
            <div className='content__article__popup__container'>
              <img src="emmanuel_camara.png" alt="img manu"/>
            </div>
            <div className='content__article__popup__container'>
              <p>Combien de leads vous rapportent votre profil Linkedin chaque semaine actuellement ?</p>
              <Link to="/contact" className='content__article__popup__container__link'>En savoir plus</Link>
            </div>
          </div>  
        </section>
        <div className="footer__up">
          <section className="footer__up__section">
            <div className="footer__up__section__row">
              <img src="logo_blue_only.PNG" alt="logo ginseng web" className="footer__up__section__title__logo"/> 
              <h3 className="footer__up__section__title__h3">Ginseng Web</h3>
            </div>
            <p>44 rue Jean Mermoz 78600 Maisons-Laffitte<br/>
            RER A arrêt Maisons-Laffitte</p>
            <p>01 84 79 06 60</p> 
            <p><Link to="/contact">Contact</Link></p>
            <div className="footer__up__section__row">
            <Link to="/contact"><img src="linkedin.png" alt="logo linkedin" className="footer__up__section__row__img"/></Link> 
            <Link to="/contact"><img src="gmail.png" alt="logo gmail" className="footer__up__section__row__img"/></Link>
            </div>
          </section>
          <section className="footer__up__section">
            <h3>Agence</h3>
            <Link to ="/agence">L'agence</Link>            
            <Link to ="/nousChoisir">Pourquoi nous choisir</Link> 
            <Link to ="/methodologie" >Notre méthodologie</Link>
            <Link to ="/blog">Blog</Link>
          </section>
          <section className="footer__up__section">
            <h3>Cas Clients</h3>
            <Link to ="/" >Télécom</Link>            
            <Link to ="/" >Droit</Link> 
            <Link to ="/" >Etat et organismes publics</Link>
            <Link to ="/" >Commerce</Link>
          </section>
        </div>
        <div className="footer__down">
          <section className="footer__down__section">
            <p>2024 Ginseng Web</p>
          </section>
          <section className="footer__down__section">
            <Link to ='/mentions' className="footer__down__section__link">Mentions Légales</Link>
            <p>|</p>
            <Link to ='/conditions' className="footer__down__section__link">Conditions générales</Link>
            <p>|</p>
            <Link to ='/mentions' className="footer__down__section__link">Plan du site</Link>
          </section>
        </div>
      </footer>
    )
  }
  
export default Footer;
  