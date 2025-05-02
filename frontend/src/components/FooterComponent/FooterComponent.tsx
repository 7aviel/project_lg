import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { NavHashLink } from "react-router-hash-link";
type Props = {
  logo: string;
};

const FooterComponent = ({ logo }: Props) => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={`${styles.footer} flex space-evenly`}>
      <div className={`${styles.footer__link}`}>
        <NavHashLink smooth to="/#services">
          Servicios
        </NavHashLink>
        <NavHashLink smooth to="/#contacts">
          Contacto
        </NavHashLink>
        <NavHashLink smooth to="/#about">
          Nosotros
        </NavHashLink>
        <NavHashLink to={"/seguros"} onClick={moveToTop}>
          Seguros
        </NavHashLink>
      </div>
      <div className="flex center-items">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="logo" className="logo__img" />
        </Link>
        <h1 className="logo__title">Gestoria y Seguros</h1>
      </div>
      <div>
        <h1>MAP HERE</h1>
      </div>
    </footer>
  );
};

export default FooterComponent;
