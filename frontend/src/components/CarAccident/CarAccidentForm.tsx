import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import { useState } from "react";
import formStyles from "../Forms/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
const CarAccidentForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className={`${styles.bg}`}>
      <div className="card-section flex space-around">
        <div className={formStyles.card}>
          <form encType="multipart/form-data">
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
              name="denunciaPolicial"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
              required
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
              name="denunciaPolicial"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
              required
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
              name="denunciaPolicial"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items ">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Fotos de los Daños:
              </label>
            </div>
            <input
              type="file"
              name="denunciaPolicial"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
              required
            />
            <label htmlFor="damage">Detalles de los daños</label>
            <input
              type="text"
              name="damage"
              id="damage"
              placeholder="Daños"
              required
            />
            <label htmlFor="damage">Detalle de los daños</label>
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

export default CarAccidentForm;
