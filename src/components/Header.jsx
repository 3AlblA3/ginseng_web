import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {

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
        </header>
  )
}

export default Header

