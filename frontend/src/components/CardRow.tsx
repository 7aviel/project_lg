import {
  faCheck,
  faBriefcase,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";

export default function CardRow() {
  return (
    <section id="services" className="section2 ">
      <Card
        icon={faScaleBalanced}
        text="Contamos con la asistencia de un estudio jurídico para posesiones, usucapion, divorcios, mediación, etc."
      />
      <Card
        icon={faBriefcase}
        text="Realizamos tramites en todo el pais y contamos con un grupo de profesionales para llevar a cabo todo tipo de tramites"
      />
      <Card
        icon={faCheck}
        text="Seguros de auto, casa, y todo tipo de aseguraciones para que vos y tu familia esten tranquilos"
      />
    </section>
  );
}
