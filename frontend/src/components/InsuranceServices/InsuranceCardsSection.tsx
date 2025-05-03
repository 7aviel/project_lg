import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./InsuranceCardsSection.module.css";
import cardStyles from "../Card/Card.module.css";
import {
  faMotorcycle,
  faCarSide,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InsuranceCardsSection = () => {
  const navigate = useNavigate();

  const handleClickOne = () => {
    return navigate("/cotizar-seguro");
  };

  const handleClickTwo = () => {
    return navigate("/alta-auto");
  };

  const handleClickThree = () => {
    return navigate("/alta-moto");
  };

  return (
    <section id="insurance">
      <div className={`${styles.title}`}>
        <h1>Seguros</h1>
      </div>
      <div className="section2">
        <Card
          icon={
            <FontAwesomeIcon
              icon={faMoneyBill1Wave}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Te enviamos una cotización de acuerdo al seguro que necesites."
          buttonText="Presupuestar"
          btnOnClick={handleClickOne}
        />
        <Card
          icon={
            <FontAwesomeIcon
              icon={faCarSide}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Realizamos el procedimiento de alta en seguros para automotores"
          buttonText="Solicitar Alta Auto"
          btnOnClick={handleClickTwo}
        />
        <Card
          icon={
            <FontAwesomeIcon
              icon={faMotorcycle}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Realizamos el procedimiento de alta en seguros para motocicletas"
          buttonText="Solicitar Alta Moto"
          btnOnClick={handleClickThree}
        />
      </div>
    </section>
  );
};

export default InsuranceCardsSection;
