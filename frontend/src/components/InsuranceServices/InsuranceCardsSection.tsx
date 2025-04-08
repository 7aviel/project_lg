import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./InsuranceCardsSection.module.css";
import {
  faMotorcycle,
  faCarSide,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

const InsuranceCardsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/cotizar-seguro");
  };

  return (
    <section>
      <div className={`${styles.title}`}>
        <h1>¿Que necesitas hacer?</h1>
      </div>
      <div className="section2">
        <Card
          icon={faMoneyBill1Wave}
          text="Te enviamos una cotización de acuerdo al seguro que necesites."
          buttonText="Presupuestar"
          btnOnClick={handleClick}
        />
        <Card
          icon={faCarSide}
          text="Realizamos el procedimiento de alta en seguros para automotores"
          buttonText="Solicitar Alta Auto"
        />
        <Card
          icon={faMotorcycle}
          text="Realizamos el procedimiento de alta en seguros para motocicletas"
          buttonText="Solicitar Alta Moto"
        />
      </div>
    </section>
  );
};

export default InsuranceCardsSection;
