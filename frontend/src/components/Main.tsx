import SectionHome from "./SectionHome";
import CardRow from "./CardRow";
import WhatsappIcon from "./WhatsappIcon";
import Contact from "./Contact/Contact";
import TopButton from "./TopButton/TopButton";
import AboutComponent from "./AboutSection/AboutComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import logo from "../assets/images/logo.svg";
import Accordion from "./Accordion/Accordion";

const faqData = [
  {
    question: "¿Que documentacion debo tener para una transferencia?",
    answer:
      "La documentacion obligatoria para realizar una transferencia es la siguiente: Título de propiedad del automotor, Cédula de identificación del automotor, DNI o cédula de identidad, Formulario 08 completo y firmado.",
  },

  {
    question: "¿Donde están ubicados?",
    answer:
      "Nos ubicamos en calle Almte. Guillermo Brown 490, Ciudad de Paraná, Entre Ríos Argentina",
  },
  {
    question: "¿Que tipos de trámites realizan?",
    answer:
      "Todo tipo de tramites y gestiones, desde automotores, embarcaciones seguros y mucho más. Si necesitas asesoramiento para un trámite en particular, ¡Contáctanos!",
  },
];

export default function Main() {
  return (
    <main>
      <WhatsappIcon />
      <TopButton />
      <SectionHome />
      <AboutComponent />
      <CardRow />
      <Contact />
      <Accordion data={faqData} />
      <FooterComponent logo={logo} />
    </main>
  );
}
