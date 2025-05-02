import SectionHome from "./SectionHome";
import CardRow from "./CardRow";
import WhatsappIcon from "./WhatsappIcon";
import Contact from "./Contact/Contact";
import TopButton from "./TopButton/TopButton";
import AboutComponent from "./AboutSection/AboutComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import logo from "../assets/images/logo.svg";

export default function Main() {
  return (
    <main>
      <WhatsappIcon />
      <TopButton />
      <SectionHome />
      <AboutComponent />
      <CardRow />
      <Contact />
      <FooterComponent logo={logo} />
    </main>
  );
}
