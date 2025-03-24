import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú si se hace clic fuera
  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains("backdrop")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="flex space-between center-items">
      <h4>LOGO AQUI</h4>

      {/* Ícono de menú animado */}
      <button title="btn" className="mobile-bar" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl" />
      </button>

      {/* Fondo oscuro cuando el menú está abierto */}
      <div
        className={`backdrop ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
          <a href="#about">Sobre Nosotros</a>
          <button type="button">Presupuestar</button>
        </nav>
      </div>
      <nav className="navbar">
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
        <a href="#about">Sobre Nosotros</a>
        <button type="button">Presupuestar</button>
      </nav>
    </header>
  );
}
