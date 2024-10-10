import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {

  // Gestion de l'ouverture / fermeture du menu mobile

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null); // Close any open submenu when toggling the main menu
  };
  
  const toggleAgencyMenu = () => toggleMenu('agency');
  const toggleAccompagnementMenu = () => toggleMenu('accompagnement');
  const toggleExpertisesMenu = () => toggleMenu('expertises');
  const toggleCasClientsMenu = () => toggleMenu('casClients');

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.header__section__menu__deroulant') && !e.target.closest('.mobile__menu__content')) {
        setActiveMenu(null);
      }
    }
  

    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);


  return (
        
        <header>
          <div className="header__section">
            <Link to="/" className="header__section__title"><img src="logo_blue_only.PNG" alt="logo ginseng web" className="header__logo"/>
            <h1>Ginseng Web</h1></Link>
          </div>
          <div className="header__desktop">
          <div className="header__section">
            <div className={`header__section__menu__deroulant ${activeMenu === 'agency' ? 'open' : ''}`}>
              <h3 className="header__section__menu__deroulant__p" onClick={toggleAgencyMenu}>L'agence</h3>
              <ul className="header__section__menu__deroulant__p__sous">
                <div className="header__section__menu__deroulant__p__sous__div">
                  <li><Link to="/agence_presentation" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">L'agence - présentations</Link></li>
                  <li><Link to="/agence_temoignages" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Les témoignages</Link></li>
                  <li><Link to="/agence_tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Tarifs</Link></li>
                </div>
              </ul>
            </div>
            <div className={`header__section__menu__deroulant ${activeMenu === 'accompagnement' ? 'open' : ''}`}>
                <h3 className="header__section__menu__deroulant__p" onClick={toggleAccompagnementMenu}>Accompagnement digital</h3>
                <ul className="header__section__menu__deroulant__p__sous">
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Avant le projet</h3>
                    <li><Link to="/accompagnement_analyseExistant" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Analyse de l'existant</Link></li>
                    <li><Link to="/accompagnement_accompagnementTechnique" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement technique</Link></li>
                    <li><Link to="/accompagnement_definitionCible" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Définition des cibles</Link></li>
                    <li><Link to="/accompagnement_cadrageProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Cadrage du projet</Link></li>
                    <li><Link to="/accompagnement_cahierCharges" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Rédaction du cahier des charges ainsi qu’un planificateur de projet</Link></li>
                  </div>
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Pendant le Projet</h3>
                    <li><Link to="/accompagnement_supportEquipe" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Support de l'équipe projet</Link></li>
                    <li><Link to="/accompagnement_AccompagnementUX" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement UX-UI</Link></li>
                    <li><Link to="/accompagnement_accompagnementOperationnel" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement opérationnel</Link></li>
                    <li><Link to="/accompagnement_accompagnementPostProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement post-projet</Link></li>
                  </div>
                </ul>
            </div>
            <div className={`header__section__menu__deroulant ${activeMenu === 'expertises' ? 'open' : ''}`}>
                <h3 className="header__section__menu__deroulant__p" onClick={toggleExpertisesMenu}>Expertises</h3>
                <ul className="header__section__menu__deroulant__p__sous">
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Audit</h3>
                    <li><Link to="/analyseExistant" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit ergonomique</Link></li>
                    <li><Link to="/accompagnementTechnique" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit concurrentiel</Link></li>
                    <li><Link to="/definitionCible" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit technique</Link></li>
                    <li><Link to="/cadrageProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit referencement naturel</Link></li>
                  </div>
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Production</h3>
                    <li><Link to="/agence" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Gestion de projet</Link></li>
                    <li><Link to="/temoignages" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Recueil de besoins </Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Création des personae</Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Gabarits ergonomiques</Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Tests utilisateurs</Link></li>
                  </div>
                </ul>
            </div>
            <div className={`header__section__menu__deroulant ${activeMenu === 'casClients' ? 'open' : ''}`}>
                <h3 className="header__section__menu__deroulant__p" onClick={toggleCasClientsMenu}>Cas Clients</h3>
                <ul className="header__section__menu__deroulant__p__sous">
                <div className="header__section__menu__deroulant__p__sous__div">
                <li><Link to="/agence" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Exemple 1</Link></li>
                <li><Link to="/temoignages" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Exemple 2</Link></li>
                <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Exemple 3</Link></li>
                </div>
                </ul>
            </div>
            <div className="header__section__menu__deroulant">
            <Link to="/blog" className="header__section__menu__deroulant__p__sous__link" style={{textDecoration:"none"}}><h3 className="header__section__menu__deroulant__p">Blog</h3></Link>
            </div>
          </div>
          </div>
          <div className="header__div__right">
        <div className="header__section">
          <h3 className="header__section__phone">01 86 52 22 99</h3>
          <Link to="/contact" style={{textDecoration:"none"}}><h3 className="contact">Contact</h3></Link>
        </div>
        <div className="header__section__mobile">
          <img
            className="header__section__menu__mobile__img"
            src="menu.png"
            alt="menu mobile"
            onClick={toggleMobileMenu}
          />
          <div className={`mobile__menu__overlay ${isMobileMenuOpen ? 'open' : ''}`}>
            {isMobileMenuOpen && (
               <div className="mobile__menu__content">
               <div className="mobile__menu__header">
                 <h2>Menu</h2>
                 <button className="mobile__menu__close" onClick={toggleMobileMenu}>X</button>
               </div>
               <div className="mobile__menu__item">
                 <h3 className="mobile__menu__content__p" onClick={() => toggleMenu('agency')}>L'agence</h3>
                 {activeMenu === 'agency' && (
                   <ul className="mobile__menu__content__p__sous">
                     <li><Link to="/agence_presentation">L'agence - présentations</Link></li>
                     <li><Link to="/agence_temoignages"> Les témoignages</Link></li>
                     <li><Link to="/agence_tarifs">tarifs</Link></li>
                   </ul>
                 )}
               </div>
               <div className="mobile__menu__item">
                 <h3 className="mobile__menu__content__p" onClick={() => toggleMenu('accompagnement')}>Accompagnement digital</h3>
                 {activeMenu === 'accompagnement' && (
                   <ul className="mobile__menu__content__p__sous">
                     <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Avant le projet</h3>
                    <li><Link to="/accompagnement_analyseExistant" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Analyse de l'existant</Link></li>
                    <li><Link to="/accompagnement_accompagnementTechnique" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement technique</Link></li>
                    <li><Link to="/accompagnement_definitionCible" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Définition des cibles</Link></li>
                    <li><Link to="/accompagnement_cadrageProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Cadrage du projet</Link></li>
                    <li><Link to="/accompagnement_cahierCharges" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Rédaction du cahier des charges ainsi qu’un planificateur de projet</Link></li>
                  </div>
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Pendant le Projet</h3>
                    <li><Link to="/accompagnement_supportEquipe" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Support de l'équipe projet</Link></li>
                    <li><Link to="/accompagnement_accompagnementUX" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement UX-UI</Link></li>
                    <li><Link to="/accompagnement_accompagnementOperationnel" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement opérationnel</Link></li>
                    <li><Link to="/accompagnement_accompagnementPostProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Accompagnement post-projet</Link></li>
                  </div>
                   </ul>
                 )}
               </div>
               <div className="mobile__menu__item">
                 <h3 className="mobile__menu__content__p" onClick={() => toggleMenu('expertises')}>Expertises</h3>
                 {activeMenu === 'expertises' && (
                   <ul className="mobile__menu__content__p__sous">
               <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Audit</h3>
                    <li><Link to="/analyseExistant" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit ergonomique</Link></li>
                    <li><Link to="/accompagnementTechnique" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit concurrentiel</Link></li>
                    <li><Link to="/definitionCible" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit technique</Link></li>
                    <li><Link to="/cadrageProjet" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Audit referencement naturel</Link></li>
                  </div>
                  <div className="header__section__menu__deroulant__p__sous__div">
                    <h3 className="header__section__menu__deroulant__p__sous__div__title">Production</h3>
                    <li><Link to="/agence" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Gestion de projet</Link></li>
                    <li><Link to="/temoignages" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Recueil de besoins </Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Création des personae</Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Gabarits ergonomiques</Link></li>
                    <li><Link to="/tarifs" style={{textDecoration:"none"}} className="header__section__menu__deroulant__p__sous__link">Tests utilisateurs</Link></li>
                  </div>
                   </ul>
                 )}
               </div>
               <div className="mobile__menu__item">
                 <h3 className="mobile__menu__content__p" onClick={() => toggleMenu('casClients')}>Cas clients</h3>
                 {activeMenu === 'casClients' && (
                   <ul className="mobile__menu__content__p__sous">
                     <li><Link to="/agence">Exemple 1</Link></li>
                     <li><Link to="/temoignages">Exemple 2</Link></li>
                     <li><Link to="/tarifs">Exemple 3</Link></li>
                   </ul>
                 )}
               </div>
              <Link className="mobile__menu__content__p" to="/blog">Blog</Link>
              </div>
            )}
          </div>
        </div>
      </div>
        </header>
  )
}

export default Header

