import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import CustomMap from "../CustomMap/CustomMap";
import { FaCopyright, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {
  logo: string;
};

const FooterComponent = ({ logo }: Props) => {
  const handleClickOne = () => {
    window.location.href = "mailto:vilcheariel1@gmail.com";
  };
  const handleClickTwo = () => {
    window.location.href = "https://www.linkedin.com/in/ariel-vilche/";
  };

  return (
    <footer className={`${styles.footer} flex space-evenly`}>
      <div className="flex center-items">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="logo" className="logo__img" />
        </Link>
        <h1 className="logo__title">Gestoría y Seguros</h1>
      </div>
      <div>
        <CustomMap />
      </div>
      <div className="flex content-center center-items flex-column">
        <p className={`${styles.developer}`}>
          Sitio diseñado y desarrollado por Ariel Vilche&nbsp;&nbsp;
          <span>
            <a onClick={handleClickOne}>
              <MdEmail />
            </a>
          </span>
          &nbsp;&nbsp;
          <span>
            <a onClick={handleClickTwo}>
              <FaLinkedinIn />
            </a>
          </span>
        </p>
        <p className={styles.developer}>
          Gestoría y seguros Luisa Giampietri. Todos los derechos
          reservados&nbsp;&nbsp;
          <span>
            <FaCopyright />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
