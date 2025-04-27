import {
  faCheck,
  faBriefcase,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardStyles from "./Card/Card.module.css";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CardRow() {
  const navigate = useNavigate();

  const handleClickOne = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=543434501551";
  };

  const handleClickTwo = () => {
    navigate("/seguros");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickThree = () => {
    navigate("/presupuestar");
  };

  return (
    <section id="services">
      <div className={`flex content-center color-dark-grey top-padding-sm`}>
        <h1>Servicios</h1>
      </div>
      <section className="section2 ">
        <Card
          title="ASESORIA JURIDICA"
          icon={
            <FontAwesomeIcon
              icon={faScaleBalanced}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Disponemos asistencia jurídica para posesiones, usucapión, divorcios, mediación y más. Aseguramos eficiencia y calidad de atención."
          buttonText={
            <div className="flex space-around">
              <p>Saber &nbsp;</p>
              <FaPlus size={20} />
            </div>
          }
          btnOnClick={handleClickOne}
        />
        <Card
          title="GESTORIA"
          icon={
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Realizamos trámites en todo el país, a distancia y presencial. Contamos con un grupo de profesionales para llevar a cabo todo tipo de tramites."
          buttonText={
            <div className="flex space-around">
              <p>Saber &nbsp;</p>
              <FaPlus size={20} />
            </div>
          }
          btnOnClick={handleClickThree}
        />
        <Card
          title="SEGUROS"
          icon={
            <FontAwesomeIcon
              icon={faCheck}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Seguros integrales para automóviles, viviendas y más, para garantizar la tranquilidad y seguridad de vos y tu familia en todo momento."
          buttonText={
            <div className="flex space-around">
              <p>Saber &nbsp;</p>
              <FaPlus size={20} />
            </div>
          }
          btnOnClick={handleClickTwo}
        />
        <Card
          title="CREDITOS PRENDARIOS"
          icon={
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              size="2xl"
              className={`${cardStyles.card__icon}`}
            />
          }
          text="Créditos prendarios accesibles y flexibles, diseñados para tus necesidades financieras con todo tipo de opciones adaptadas a vos."
          buttonText={
            <div className="flex space-around">
              <p>Saber &nbsp;</p>
              <FaPlus size={20} />
            </div>
          }
          btnOnClick={handleClickOne}
        />
      </section>
    </section>
  );
}
