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
    <section>
      <div className={`${styles.title}`}>
        <h1>¿Que necesitas hacer?</h1>
      </div>
      <div className="section2">
        <Card
          icon={faMoneyBill1Wave}
          text="Te enviamos una cotización de acuerdo al seguro que necesites."
          buttonText="Presupuestar"
          btnOnClick={handleClickOne}
        />
        <Card
          icon={faCarSide}
          text="Realizamos el procedimiento de alta en seguros para automotores"
          buttonText="Solicitar Alta Auto"
          btnOnClick={handleClickTwo}
        />
        <Card
          icon={faMotorcycle}
          text="Realizamos el procedimiento de alta en seguros para motocicletas"
          buttonText="Solicitar Alta Moto"
          btnOnClick={handleClickThree}
        />
      </div>
    </section>
  );
};

export default InsuranceCardsSection;
