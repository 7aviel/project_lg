import InsuranceSectionOne from "../components/InsuranceSectionOne/InsuranceSectionOne";
import InsuranceCardsSection from "../components/InsuranceServices/InsuranceCardsSection";
import Navbar from "../components/Navbar";
import TopButton from "../components/TopButton/TopButton";
import WhatsappIcon from "../components/WhatsappIcon";

const InsurancePage = () => {
  return (
    <>
      <Navbar />
      <WhatsappIcon />
      <TopButton />
      <InsuranceSectionOne />
      <InsuranceCardsSection />
    </>
  );
};
export default InsurancePage;
