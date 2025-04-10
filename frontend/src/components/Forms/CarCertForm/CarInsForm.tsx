import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const CarInsForm = () => {
  return (
    <section className={styles.bg}>
      <div className="card-section flex space-around">
        <div className="card">
          <form action="">
            <label htmlFor="">Correo Electronico</label>
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
              <label htmlFor="">
                Foto del DNI (Frente y dorso) &nbsp; &nbsp;
              </label>
            </div>
            <div>
              <input
                type="file"
                name="image"
                title="image"
                id="dni"
                accept="image/png, image/gif, image/jpeg"
                multiple
                required
              />
            </div>
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">
                4 fotos del vehículo desde diferentes ángulos más foto de rueda
                de auxilio
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

            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">
                Foto del tubo de GNC &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">
                Oblea del GNC vigente&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default CarInsForm;
