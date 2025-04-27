import {
  faCheck,
  faBriefcase,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardStyles from "./Card/Card.module.css";

export default function CardRow() {
  return (
    <section id="services" className="section2 ">
      <Card
        icon={
          <FontAwesomeIcon
            icon={faScaleBalanced}
            size="2xl"
            className={`${cardStyles.card__icon}`}
          />
        }
        text="Contamos con la asistencia de un estudio jurídico para posesiones, usucapion, divorcios, mediación, etc."
      />
      <Card
        icon={
          <FontAwesomeIcon
            icon={faBriefcase}
            size="2xl"
            className={`${cardStyles.card__icon}`}
          />
        }
        text="Realizamos tramites en todo el pais y contamos con un grupo de profesionales para llevar a cabo todo tipo de tramites"
      />
      <Card
        icon={
          <FontAwesomeIcon
            icon={faCheck}
            size="2xl"
            className={`${cardStyles.card__icon}`}
          />
        }
        text="Seguros de auto, casa, y todo tipo de aseguraciones para que vos y tu familia esten tranquilos"
      />
    </section>
  );
}
