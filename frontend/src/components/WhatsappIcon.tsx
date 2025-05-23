import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsappIcon = () => {
  return (
    <WhatsAppWidget
      companyName="Luisa Giampietri"
      replyTimeText="Típicamente responde en unos minutos"
      message={`¡Hola! 👋🏼 \n\n¿Que podemos hacer por vos?`}
      inputPlaceHolder="Escribe un mensaje"
      sendButtonText="Enviar"
      phoneNumber="543434501551"
    />
  );
};

export default WhatsappIcon;
