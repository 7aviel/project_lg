import logo from "../assets/images/icon_logo.svg";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a href="#">
            <img src={logo} width="15%" height="80%" alt="logo_icon" />
          </a>
          Gestoria y Seguros
        </li>
        <li>Sobre Nosotros</li>
        <li>Servicios</li>
        <li>Contactanos</li>
      </ul>
    </nav>
  );
}
