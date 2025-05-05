import Swal from "sweetalert2";
import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import { useState } from "react";
import formStyles from "../Forms/Form.module.css";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3_FORM;

const CancelInsuranceForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Función para enviar datos con Web3Forms
  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos.");
      }

      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Nos pondremos en contacto contigo pronto.",
        icon: "success",
        buttonsStyling: false,
      });

      (event.target as HTMLFormElement).reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Intentalo de nuevo",
        icon: "error",
        buttonsStyling: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.bg}`}>
      <div className="card-section flex space-around">
        <div className={formStyles.card}>
          <form onSubmit={sendToBackend} encType="multipart/form-data">
            <input
              type="hidden"
              name="Solicitud de anulacion de poliza"
              id="accident"
              value="Formulario de anulacion de poliza"
              required
            />
            <label htmlFor="fullName">Nombre y apellido</label>
            <input
              type="text"
              name="Nombre completo"
              id="fullName"
              placeholder="Nombre completo"
              required
            />
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
              required
            />
            <label htmlFor="company">Compañía del asegurado</label>
            <input
              type="text"
              name="Empresa del asegurado"
              id="company"
              placeholder="empresa"
              required
            />

            <label htmlFor="tel">Teléfono de contacto</label>
            <input
              type="tel"
              id="tel"
              name="Telefono"
              title="phone"
              placeholder="+54 (343) 00000000"
              required
            />
            <label htmlFor="poliza">Baja de poliza</label>
            <input
              type="text"
              placeholder="Poliza que desea anular"
              name="Poliza a anular"
              id="poliza"
              required
            />
            <label htmlFor="domain">Dominio</label>
            <input
              type="text"
              name="Dominio"
              id="domain"
              placeholder="Dominio"
              required
            />
            <label htmlFor="reason">¿Cuál es el motivo?</label>
            <input name="Motivo" id="reason" placeholder="Escriba aquí"></input>
            <div className="flex space-around">
              <button title="btn" className={`${styles.btn}`}>
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CancelInsuranceForm;
