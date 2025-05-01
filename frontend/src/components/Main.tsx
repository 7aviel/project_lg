import SectionHome from "./SectionHome";
import CardRow from "./CardRow";
import WhatsappIcon from "./WhatsappIcon";
import Contact from "./Contact/Contact";
import TopButton from "./TopButton/TopButton";
import AboutComponent from "./AboutSection/AboutComponent";
import img from "../assets/images/logo.svg";

export default function Main() {
  return (
    <main>
      <WhatsappIcon />
      <TopButton />
      <SectionHome />
      <CardRow />
      <Contact />
      <AboutComponent imgSrc={img} />
    </main>
  );
}
