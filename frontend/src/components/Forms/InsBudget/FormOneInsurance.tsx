import { useState } from "react";
import styles from "./FormOneInsurance.module.css";
import Swal from "sweetalert2";
import formStyles from "../Form.module.css";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3_FORM;

const FormOneInsurance = () => {
  const [vehicleType, setVehicleType] = useState({ car: false, moto: false });

  // Función para permitir solo una selección entre Auto y Moto
  const handleVehicleSelection = (type: "car" | "moto") => {
    setVehicleType((prev) => ({
      car: type === "car" ? !prev.car : false,
      moto: type === "moto" ? !prev.moto : false,
    }));
  };

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
              name="Solicitud de Presupuesto de Seguro"
              id="budget"
              value="Formulario de presupuesto"
            />
            <label htmlFor="cobertura">Cobertura que le interesa</label>
            <select title="select" name="Cobertura" id="cobertura">
              <option value="Opción">Elige una opcion</option>
              <option value="Contra Terceros">Contra terceros</option>
              <option value="Otro">Otro</option>
            </select>
            <label htmlFor="company">
              ¿Tiene alguna empresa de referencia?
            </label>
            <input
              title="company"
              type="text"
              name="Empresa"
              id="company"
              placeholder="Empresa"
            />
            <label htmlFor="">¿Que tipo de vehiculo es?</label>
            <div className={`${styles.checkbox}`}>
              <div className="flex">
                <input
                  title="vehicle_type"
                  type="checkbox"
                  id="car"
                  name="Auto"
                  checked={vehicleType.car}
                  onChange={() => handleVehicleSelection("car")}
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="car">Auto</label>
              </div>
              <div className="flex">
                <input
                  title="vehicle_type"
                  type="checkbox"
                  id="moto"
                  name="Moto"
                  checked={vehicleType.moto}
                  onChange={() => handleVehicleSelection("moto")}
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="moto">Moto</label>
              </div>
            </div>
            <label htmlFor="dominio">Dominio (patente)</label>
            <input
              type="text"
              name="Dominio"
              id="dominio"
              placeholder="dominio"
            />
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="tuemail@email.com"
            />
            <label htmlFor="use">Uso del vehiculo</label>
            <select title="select" name="select" id="use">
              <option value="Opcion">Elige una opcion</option>
              <option value="Comercial">Comercial</option>
              <option value="Particular">Particular</option>
              <option value="Otro">Otro</option>
            </select>
            <label htmlFor="phone">Telefono de contacto</label>
            <input
              type="tel"
              title="phone"
              id="phone"
              name="Telefono"
              placeholder="+54 (343) 00000000"
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

export default FormOneInsurance;
