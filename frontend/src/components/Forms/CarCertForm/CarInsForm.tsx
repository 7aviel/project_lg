import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import formStyles from "../Form.module.css";
import ReCAPTCHA from "react-google-recaptcha";
const API_URL = import.meta.env.VITE_API_URL;
const RECAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_KEY;

const CarInsForm = () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB por archivo
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const handleCaptcha = (token: string | null) => {
    if (token) {
      setCaptchaValid(true);
      setCaptchaError("");
    } else {
      setCaptchaValid(false);
      setCaptchaError("Debes completar el captcha.");
    }
  };

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

    if (!captchaValid) {
      setCaptchaError("Debes completar el captcha.");
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);

    if (!validateFiles(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/auto/send-auto`, {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const paymentSelected =
      (event.target as HTMLFormElement).payment.value !== "opcion";

    if (!paymentSelected) {
      Swal.fire({
        title: "Selección requerida",
        text: "Debes seleccionar un medio de pago.",
        icon: "warning",
        buttonsStyling: false,
      });
      return;
    }

    sendToBackend(event);
  };

  return (
    <section className={styles.bg}>
      <div className="flex space-around">
        <div className={formStyles.card}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <div className={` flex center-items `}>
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
            <input
              type="hidden"
              name="cedulaDescription"
              value="Foto de cedula"
            />
            <div className="flex center-items">
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
            <input type="hidden" name="idDescription" value="Foto de DNI" />
            <div className="flex center-items ">
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
            <input
              type="hidden"
              name="vehicleDescription"
              value="Fotos del vehiculo"
            />
            <div className="flex center-items ">
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
            <input
              type="hidden"
              name="gncTubeDescription"
              value="Foto del tubo GNC"
            />
            <div className="flex center-items ">
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
            <input
              type="hidden"
              name="gncObleaDescription"
              value="Foto de GNC vigente"
            />
            <div
              className={`flex flex-column center-items space-around ${styles.padding__top}`}
            >
              <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleCaptcha} />
              {!captchaValid && <p>{captchaError}</p>}
              <div className="flex space-around">
                <button title="btn" className={`${styles.btn}`}>
                  {isLoading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CarInsForm;
