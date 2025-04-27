import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import formStyles from "../Form.module.css";

const CarInsForm = () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB por archivo
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    maxCount: number
  ) => {
    const files = event.target.files;

    if (files && files.length > maxCount) {
      Swal.fire({
        title: "Demasiados archivos",
        text: `Solo puedes subir un máximo de ${maxCount} archivos.`,
        icon: "warning",
        buttonsStyling: false,
      });

      // Limpia el campo si excede el límite
      event.target.value = "";
    }
  };

  const validateFiles = (formData: FormData): boolean => {
    for (const files of formData.values()) {
      if (files instanceof FileList) {
        for (const file of files) {
          if (file.size > MAX_FILE_SIZE) {
            Swal.fire({
              title: "Archivo demasiado grande",
              text: `El archivo "${file.name}" supera el tamaño máximo permitido de 5 MB.`,
              icon: "error",
              buttonsStyling: false,
            });
            return false; // Detiene el proceso inmediatamente
          }
        }
      }
    }
    return true; // Todos los archivos cumplen con el tamaño
  };

  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    if (!validateFiles(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auto/send-auto", {
        method: "POST",
        body: formData,
      });

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
    <section className={styles.bg}>
      <div className="flex space-around">
        <div className={formStyles.card}>
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
              <option value="opcion">Elige una opción</option>
              <option value="debito">Débito</option>
              <option value="credito">Crédito</option>
              <option value="otro">Otro</option>
            </select>
            <div className={` flex center-items space-evenly`}>
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto de cédula (Frente y Dorso)
              </label>
            </div>
            <input
              type="file"
              name="cedulaImage"
              title="image"
              accept="image/png, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto del DNI (Frente y dorso)
              </label>
            </div>
            <input
              type="file"
              name="dniImage"
              title="dni"
              accept="image/png, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                4 fotos del vehículo desde diferentes ángulos + rueda de auxilio
              </label>
            </div>
            <input
              type="file"
              name="vehicleImages"
              title="vehicle"
              accept="image/png,  image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 5)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto del tubo de GNC
              </label>
            </div>
            <input
              type="file"
              name="gncTubeImage"
              title="gncTube"
              accept="image/png,  image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Oblea del GNC vigente
              </label>
            </div>
            <input
              type="file"
              name="gncObleaImage"
              title="gncOblea"
              accept="image/png, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex space-around">
              <button
                type="submit"
                className={`${styles.btn}`}
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CarInsForm;
