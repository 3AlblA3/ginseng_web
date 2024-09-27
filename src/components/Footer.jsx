import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';

function Footer() {

    return (
      <footer>
        <div className="footer__up">
          <section className="footer__up__section">
            <div className="footer__up__section__row">
              <img src="Ginseng_logo.png" alt="logo ginseng web" className="footer__up__section__title__logo"/> 
              <h3 className="footer__up__section__title__h3">Ginseng Web</h3>
            </div>
            <p>43 rue de Beaubourg 75003 Paris <br/>
            M° Rambuteau (ligne 11) ou Les Halles</p>
            <p>01 88 99 56 05</p> 
            <p>Contact</p>
            <div className="footer__up__section__row">
              <img src="linkedin.png" alt="logo linkedin" className="footer__up__section__row__img"/> 
              <img src="gmail.png" alt="logo gmail" className="footer__up__section__row__img"/> 
            </div>
          </section>
          <section className="footer__up__section">
            <h3>Agence</h3>
            <Link to ="/agence" className="footer__up__section__link">L'agence</Link>            
            <Link to ="/nousChoisir" className="footer__up__section__link">Pourquoi nous choisir</Link> 
            <Link to ="/methodologie" className="footer__up__section__link">Notre méthodologie</Link>
            <Link to ="/blog" className="footer__up__section__link">Blog</Link>
          </section>
          <section className="footer__up__section">
            <h3>Cas Clients</h3>
            <Link to ="/" className="footer__up__section__link">Fédérations et interprofessions</Link>            
            <Link to ="/" className="footer__up__section__link">Associations</Link> 
            <Link to ="/" className="footer__up__section__link">Etat et organismes publics</Link>
            <Link to ="/" className="footer__up__section__link">Edition</Link>
            <Link to ="/" className="footer__up__section__link">Entreprises privées</Link>
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
  