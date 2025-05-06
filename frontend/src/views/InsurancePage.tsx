import FooterComponent from "../components/FooterComponent/FooterComponent";
import InsuranceSectionOne from "../components/InsuranceSectionOne/InsuranceSectionOne";
import InsuranceSectionTwo from "../components/InsuranceSectionTwo/InsuranceSectionTwo";
import InsuranceCardsSection from "../components/InsuranceServices/InsuranceCardsSection";
import Navbar from "../components/Navbar";
import TopButton from "../components/TopButton/TopButton";
import WhatsappIcon from "../components/WhatsappIcon";
import logo from "../assets/images/logo.svg";
import Accordion from "../components/Accordion/Accordion";

const downloadImages = async () => {
  const imageUrls = [
    "https://i.postimg.cc/QVLfbm4q/IMG-20250502-WA0007.jpg",
    "https://i.postimg.cc/dQ7v50N7/IMG-20250502-WA0008.jpg",
    "https://i.postimg.cc/kMkCzdLT/IMG-20250502-WA0009.jpg",
  ];

  for (let i = 0; i < imageUrls.length; i++) {
    try {
      const response = await fetch(imageUrls[i]);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `instructivo-${i + 1}.jpg`; // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error al descargar la imagen ${i + 1}:`, error);
    }
  }
};

const handleClick = () => {
  window.open(
    "https://www.sancristobal.com.ar/pas/lg-gestoria-y-seguros",
    "_blank"
  );
};

const faqData = [
  {
    question: "¿Trabaja con San Cristobal seguros?",
    answer: (
      <>
        ¡Sí! Puedes cotizar tu seguro <a onClick={handleClick}>aquí</a>.
      </>
    ),
  },

  {
    question: "¿Cómo debo tomar las fotos para el seguro?",
    answer: (
      <>
        Puedes descargar nuestro instructivo{" "}
        <a onClick={downloadImages}>aquí</a>
      </>
    ),
  },
  {
    question: "¿Que documentacion debo tener para una transferencia?",
    answer:
      "La documentacion obligatoria para realizar una transferencia es la siguiente: Título de propiedad del automotor, Cédula de identificación del automotor, DNI o cédula de identidad, Formulario 08 completo y firmado.",
  },
];

const InsurancePage = () => {
  return (
    <>
      <Navbar />
      <WhatsappIcon />
      <TopButton />
      <InsuranceSectionOne />
      <Accordion data={faqData} />
      <InsuranceCardsSection />
      <InsuranceSectionTwo />
      <FooterComponent logo={logo} />
    </>
  );
};
export default InsurancePage;
