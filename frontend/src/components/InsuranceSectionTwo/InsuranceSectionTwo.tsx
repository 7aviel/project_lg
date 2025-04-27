import { faCarBurst } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import styles from "./InsuranceSectionTwo.module.css";
import cardStyles from "../Card/Card.module.css";
import { GiCarWheel, GiCrackedGlass } from "react-icons/gi";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronCircleRight } from "react-icons/fa";

const InsuranceSectionTwo = () => {
  return (
    <section>
      <div className={styles.section__title}>
        <h1>Denuncia de siniestros</h1>
      </div>
      <div className="section2">
        <Card
          title="SINIESTRO VIAL"
          icon={
            <FontAwesomeIcon
              icon={faCarBurst}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text={`Solicitar la denuncia de un siniestro vial.`}
          buttonText={<FaChevronCircleRight size={15} />}
        />
        <Card
          title="ROTURA DE CRISTAL"
          icon={
            <GiCrackedGlass size={35} className={`${cardStyles.card__icon}`} />
          }
          text="Solicitar denuncia de rotura de cristal"
          buttonText={<FaChevronCircleRight size={15} />}
        />
        <Card
          title="ROBO DE RUEDAS"
          icon={<GiCarWheel size={35} className={`${cardStyles.card__icon}`} />}
          text="Solicitar denuncia de robo de ruedas"
          buttonText={<FaChevronCircleRight size={15} />}
        />
        <Card
          title="SINIESTRO EN HOGAR"
          icon={
            <FaHouseCircleExclamation
              size={35}
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Solicitar denuncia de siniestro en el hogar"
          buttonText={<FaChevronCircleRight size={15} />}
        />
      </div>
    </section>
  );
};

export default InsuranceSectionTwo;
