import SectionHome from "./SectionHome";
import CardRow from "./CardRow";
import WhatsappIcon from "./WhatsappIcon";
import Contact from "./Contact/Contact";

export default function Main() {
  return (
    <main>
      <WhatsappIcon />
      <SectionHome />
      <CardRow />
      <CardRow />
      <Contact />
    </main>
  );
}
