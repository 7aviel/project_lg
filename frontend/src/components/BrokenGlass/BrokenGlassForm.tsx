import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import formStyles from "../Forms/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useState } from "react";

const BrokenGlassForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/broken-glass/send-broken-glass",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.statusText}`);
      }

      const result = await response.json();
      Swal.fire({
        title: "¡Correo enviado!",
        text: result.message,
        icon: "success",
        buttonsStyling: false,
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el correo. Intenta nuevamente.",
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
            <label htmlFor="street_address">Calle y altura del evento</label>
            <input
              type="text"
              placeholder="Calle y altura"
              name="Calle"
              id="street_address"
              required
            />
            <label htmlFor="town">Localidad del evento</label>
            <input
              type="text"
              id="town"
              name="Localidad"
              placeholder="Localidad"
              required
            />
            <label htmlFor="time">Dia, fecha y hora del evento</label>
            <input type="datetime-local" name="Fecha" id="time" required />
            <label htmlFor="wheel">¿Que cristal fue dañado?</label>
            <input
              type="text"
              name="Rueda"
              id="wheel"
              placeholder="Escribir"
              required
            />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto del cristal dañado
              </label>
            </div>
            <input
              type="file"
              name="cristalRoto"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
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

export default BrokenGlassForm;
