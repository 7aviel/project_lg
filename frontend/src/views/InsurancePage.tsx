import FooterComponent from "../components/FooterComponent/FooterComponent";
import InsuranceSectionOne from "../components/InsuranceSectionOne/InsuranceSectionOne";
import InsuranceSectionTwo from "../components/InsuranceSectionTwo/InsuranceSectionTwo";
import InsuranceCardsSection from "../components/InsuranceServices/InsuranceCardsSection";
import Navbar from "../components/Navbar";
import TopButton from "../components/TopButton/TopButton";
import WhatsappIcon from "../components/WhatsappIcon";
import logo from "../assets/images/logo.svg";

const InsurancePage = () => {
  return (
    <>
      <Navbar />
      <WhatsappIcon />
      <TopButton />
      <InsuranceSectionOne />
      <InsuranceCardsSection />
      <InsuranceSectionTwo />
      <FooterComponent logo={logo} />
    </>
  );
};
export default InsurancePage;
