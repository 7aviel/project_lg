import SectionHome from "./SectionHome";
import CardRow from "./CardRow";
import WhatsappIcon from "./WhatsappIcon";
import Contact from "./Contact/Contact";
import TopButton from "./TopButton/TopButton";

export default function Main() {
  return (
    <main>
      <WhatsappIcon />
      <TopButton />
      <SectionHome />
      <CardRow />
      <CardRow />
      <Contact />
    </main>
  );
}
