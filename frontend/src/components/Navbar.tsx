import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains("backdrop")) {
      setIsMenuOpen(false);
    }
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={`flex space-between center-items ${
        color ? "header-bg-light" : ""
      }`}
    >
      <div className="flex center-items">
        <img src={logo} alt="logo" className="logo__img" />
        <h1 className="logo__title">Gestoria y Seguros</h1>
      </div>

      <button
        title="btn"
        type="button"
        className="mobile-bar"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl" />
      </button>

      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <button type="button" title="btn">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="mobile-bar"
            icon={faXmark}
            size="xl"
          />
        </button>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
        <a href="#about">Sobre Nosotros</a>
        <a href="#insurance">Seguros</a>
        <button type="button">Presupuestar</button>
      </nav>
    </header>
  );
}
