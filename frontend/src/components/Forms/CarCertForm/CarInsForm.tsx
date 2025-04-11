import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const CarInsForm = () => {
  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: formData, // Envía directamente el FormData con imágenes y texto
      });

      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <section className={styles.bg}>
      <div className="card-section flex space-around">
        <div className="card">
          <form onSubmit={sendToBackend} encType="multipart/form-data">
            <label htmlFor="">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
              required
            />
            <label htmlFor="">Teléfono de contacto</label>
            <input
              type="tel"
              name="phone"
              title="phone"
              placeholder="+54 (343) 00000000"
              required
            />
            <label htmlFor="">Medio de pago</label>
            <select name="payment" title="option" required>
              <option value="">Elige una opción</option>
              <option value="debito">Débito</option>
              <option value="credito">Crédito</option>
              <option value="otro">Otro</option>
            </select>
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Foto de cédula (Frente y Dorso)</label>
            </div>
            <input
              type="file"
              name="cedulaImage"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Foto del DNI (Frente y dorso)</label>
            </div>
            <input
              type="file"
              name="dniImage"
              title="dni"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">
                4 fotos del vehículo desde diferentes ángulos + rueda de auxilio
              </label>
            </div>
            <input
              type="file"
              name="vehicleImages"
              title="vehicle"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Foto del tubo de GNC</label>
            </div>
            <input
              type="file"
              name="gncTubeImage"
              title="gncTube"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="">Oblea del GNC vigente</label>
            </div>
            <input
              type="file"
              name="gncObleaImage"
              title="gncOblea"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
            />

            <div className="flex space-around">
              <button type="submit" className={`${styles.btn}`}>
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
