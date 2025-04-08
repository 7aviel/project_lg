import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MotoCertForm = () => {
  return (
    <section className={styles.bg}>
      <div className="card-section flex space-around">
        <div className="card">
          <form action="">
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faEnvelope} />
              <label htmlFor="">Correo Electronico</label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
            />
            <label htmlFor="">Telefono de contacto</label>
            <input type="tel" title="phone" placeholder="+54 (343) 00000000" />
            <label htmlFor="">Medio de pago</label>
            <select name="select" title="option">
              <option value="opcion">Elige una opcion</option>
              <option value="comercial">Débito</option>
              <option value="individual">Crédito</option>
              <option value="Otro">Otro</option>
            </select>
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Foto de cedula (Frente y Dorso)</label>
            </div>
            <input
              type="file"
              name="image"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Foto del DNI (Frente y dorso) </label>
            </div>
            <input
              type="file"
              name="image"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">
                4 fotos de la moto desde diferentes ángulos más foto del chasis
              </label>
            </div>
            <input
              type="file"
              name="image"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />

            <div className="flex space-around">
              <button title="btn" className={`${styles.btn}`}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MotoCertForm;
