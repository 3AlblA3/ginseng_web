import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.header__section__deroulant')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);


  return (
        <header>
          <section className="header__section">
            <Link to="/"><img src="Ginseng_logo.png" alt="logo ginseng web" className="header__logo"/></Link>
            <h1 className="header__section__title">Ginseng Web</h1>
          </section>
          <section className="header__section">
            <Link to="/agence" style={{textDecoration:"none"}} className="header__section__menu">L'agence</Link>
            <Link to="/accompagnement" style={{textDecoration:"none"}} className="header__section__menu">Accompagnement digital</Link>
            <Link to="/Expertises" style={{textDecoration:"none"}} className="header__section__menu">Expertises</Link>
            <Link to="/casClients" style={{textDecoration:"none"}} className="header__section__menu">Cas clients</Link>
            <Link to="/blog" style={{textDecoration:"none"}} className="header__section__menu">Blog</Link>
          </section>
          <section className="header__section">
            <h3 className="header__section__phone">01 86 52 22 99</h3>
            <Link to="/contact" style={{textDecoration:"none"}}><h3 className="contact">Contact</h3></Link>
          </section>
          <section className="header__section">
            <div className={`header__section__deroulant ${isMenuOpen ? 'open' : ''}`}>
              <img 
                className="header__section__menu__mobile__img"
                src="menu.png" 
                alt="menu mobile" 
                onClick={toggleMenu}/>
              <ul class="header__section__deroulant__sous">
                <li><Link to="/agence" style={{textDecoration:"none"}} className="header__section__deroulant__sous__link">L'agence</Link></li>
                <li><Link to="/accompagnement" style={{textDecoration:"none"}} className="header__section__deroulant__sous__link">Accompagnement digital</Link></li>
                <li><Link to="/Expertises" style={{textDecoration:"none"}} className="header__section__deroulant__sous__link">Expertises</Link></li>
                <li><Link to="/casClients" style={{textDecoration:"none"}} className="header__section__deroulant__sous__link">Cas clients</Link></li>
                <li><Link to="/blog" style={{textDecoration:"none"}} className="header__section__deroulant__sous__link">Blog</Link></li>
              </ul>
            </div>
          </section>
        </header>
  )
}

export default Header

