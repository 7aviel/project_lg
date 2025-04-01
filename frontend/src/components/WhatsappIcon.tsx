import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsappIcon = () => {
  return (
    <WhatsAppWidget
      companyName="LG Gestoria y Seguros"
      replyTimeText="Típicamente responde en un día"
      message={`¡Hola! 👋🏼 \n\n¿Que podemos hacer por vos?`}
      inputPlaceHolder="Escribe un mensaje"
      sendButtonText="Enviar"
      phoneNumber="543434402547"
    />
  );
};

export default WhatsappIcon;
