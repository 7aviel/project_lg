import Swal from "sweetalert2";
import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import { useState } from "react";
import formStyles from "../Forms/Form.module.css";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3_FORM;

const ShipBudget = () => {
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
              name="Solicitud de Presupuesto de Embarcacion"
              id="budget"
              value="Formulario de presupuesto"
            />
            <label htmlFor="matricula">Matricula</label>
            <input
              type="text"
              placeholder="Ejemplo: PARA03125"
              name="Matricula"
              id="matricula"
              required
            />
            <label htmlFor="buyerData">
              Datos de contacto comprador (como figura en DNI)
            </label>
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="tuemail@email.com"
              required
            />
            <label htmlFor="">Telefono de contacto</label>
            <input
              type="tel"
              title="phone"
              placeholder="+54 (343) 00000000"
              required
            />
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="Nombre y Apellido"
              id="nombre"
              required
              placeholder="nombre y apellido"
            />
            <label htmlFor="dni">DNI</label>
            <input
              type="tel"
              title="dni"
              id="dni"
              name="DNI"
              placeholder="DNI"
              required
            />
            <label htmlFor="province">Provincia</label>
            <input
              type="text"
              name="Provincia"
              title="province"
              id="province"
              placeholder="provincia"
              required
            />
            <label htmlFor="town">Localidad</label>
            <input
              type="text"
              name="Localidad"
              title="town"
              id="town"
              placeholder="localidad"
              required
            />
            <label htmlFor="address">Domicilio</label>
            <input
              type="text"
              name="Domicilio"
              title="address"
              id="address"
              placeholder="domicilio"
              required
            />

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

export default ShipBudget;
