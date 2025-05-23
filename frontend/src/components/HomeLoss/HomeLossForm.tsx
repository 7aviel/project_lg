import Swal from "sweetalert2";
import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import { useState } from "react";
import formStyles from "../Forms/Form.module.css";

const HomeLossForm = () => {
  const WEB3FORMS_ACCESS_KEY = "90991a55-8abf-4519-929b-80edb7e5155c"; // Reemplaza con tu clave de Web3Forms
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
              name="Solicitud de denuncia"
              id="accident"
              value="Formulario de Siniestro en el hogar"
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
            <label htmlFor="tel">Teléfono de contacto</label>
            <input
              type="tel"
              id="tel"
              name="phone"
              title="phone"
              placeholder="+54 (343) 00000000"
              required
            />
            <label htmlFor="dni">DNI del titular del seguro</label>
            <input type="tel" placeholder="DNI" name="DNI" id="dni" required />

            <label htmlFor="accidentTime">
              Dia, fecha y hora del siniestro
            </label>
            <input
              type="datetime-local"
              name="Fecha"
              id="accidentTime"
              required
            />
            <label htmlFor="object">¿Que objeto fue afectado?</label>
            <input
              type="text"
              name="Objeto afectado"
              id="object"
              placeholder="Escribir"
              required
            />
            <label htmlFor="damage">En caso de haber daños, ¿Cuales son?</label>
            <textarea
              name="Mensaje"
              id="damage"
              placeholder="Detalle aquí"
              required
            ></textarea>
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

export default HomeLossForm;
