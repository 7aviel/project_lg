import styles from "../Forms/InsBudget/FormOneInsurance.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import formStyles from "../Forms/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;
const RECAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_KEY;

const WheelRobberyForm = () => {
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

  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaValid) {
      setCaptchaError("Debes completar el captcha.");
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);

    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/wheel-robbery/send-wheel-robbery`,
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
            <label htmlFor="wheel">¿Que rueda fue robada?</label>
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
                Denuncia policial
              </label>
            </div>
            <input
              type="file"
              name="denunciaPolicial"
              title="denuncia"
              accept="image/png, image/jpeg"
              multiple
              onChange={(e) => handleFileChange(e, 5)}
              required
            />
            <input
              type="hidden"
              name="descripcionDenunciaPolicial"
              value="Denuncia Policial"
            />
            <label htmlFor="details">
              Relato por escrito de cómo ocurrió el siniestro
            </label>
            <textarea
              name="mensaje"
              id="details"
              placeholder="Detalle aquí"
              required
            ></textarea>
            <div className="flex flex-column center-items space-around">
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

export default WheelRobberyForm;
