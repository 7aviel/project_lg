import styles from "../Forms/InsBudget/FormOneInsurance.module.css";

import formStyles from "../Forms/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const CarAccidentForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/car-accident/send-car-accident`,
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
            <label htmlFor="fullName">Nombre y apellido</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nombre completo"
              required
            />
            <label htmlFor="company">Compañía del asegurado</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="empresa"
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

            <label htmlFor="">Provincia</label>
            <input
              type="text"
              name="Provincia"
              placeholder="Provincia"
              required
            />
            <label htmlFor="town">Localida</label>
            <input
              type="text"
              id="town"
              name="Localidad"
              placeholder="Localidad"
              required
            />
            <label htmlFor="street_address">Calle y altura</label>
            <input
              type="text"
              placeholder="Calle y altura"
              name="Calle"
              id="street_address"
              required
            />
            <label htmlFor="time">Dia, fecha y hora del evento</label>
            <input type="datetime-local" name="Fecha" id="time" required />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Persona que conducía el vehículo asegurado al momento del
                siniestro (foto de licencia).
              </label>
            </div>
            <input
              type="file"
              name="fotoDeLicencia"
              accept="image/png, image/jpeg"
              placeholder="Foto de licencia"
              multiple
              required
            />
            <input
              type="hidden"
              name="descripcionFotoDeLicencia"
              value="Descripción de la foto de licencia"
            />
            <label htmlFor="dominio">
              Datos del Vehículo Asegurado: Dominio.
            </label>
            <input
              type="text"
              name="dominio"
              id="dominio"
              placeholder="dominio"
              required
            />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Detalle del Otro Vehículo: Datos que posea de la otra persona
                (fotos de la documentación).
              </label>
            </div>
            <input
              type="file"
              name="fotoDocumentacionOtro"
              accept="image/png, image/jpeg"
              placeholder="Foto documentacion"
              multiple
              required
            />
            <input
              type="hidden"
              name="descripcionFotoDocumentacionOtro"
              value="Fotos de la documentacion de la otra persona"
            />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Detalle del Otro Vehículo: Datos del vehículo (fotos de
                documentación, cédula y seguro).
              </label>
            </div>
            <input
              type="file"
              name="cedulaYSeguro"
              accept="image/png, image/jpeg"
              placeholder="Documentacion otro vehiculo"
              multiple
              required
            />
            <input
              type="hidden"
              name="descripcionCedulaYSeguro"
              value="Cedula, seguro del otro vehiculo"
            />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Fotos de los Daños:
              </label>
            </div>
            <input
              type="file"
              name="daniosFotos"
              accept="image/png, image/jpeg"
              placeholder="Fotos de daños"
              multiple
              required
            />
            <input
              type="hidden"
              name="descripcionDaniosFotos"
              value="Fotos de los daños"
            />
            <label htmlFor="damage">Detalle de los daños</label>
            <textarea
              name="detalles"
              id="damage"
              placeholder="Detalle aquí"
              required
            ></textarea>
            <label htmlFor="details">
              Relato por escrito de cómo ocurrió el siniestro
            </label>
            <textarea
              name="mensaje"
              id="details"
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

export default CarAccidentForm;
