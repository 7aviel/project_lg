import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../InsBudget/FormOneInsurance.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import formStyles from "../Form.module.css";

const MotoCertForm = () => {
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

  const validateNumberOfFiles = (formData: FormData): boolean => {
    const fileLimits: { [key: string]: number } = {
      cedulaImage: 2,
      dniImage: 2,
      motoImages: 5,
    };

    for (const [fieldName, files] of formData.entries()) {
      if (files instanceof FileList) {
        const maxCount = fileLimits[fieldName as string] || Infinity;

        if (files.length > maxCount) {
          Swal.fire({
            title: "Demasiados archivos",
            text: `El campo "${fieldName}" solo permite un máximo de ${maxCount} archivos.`,
            icon: "warning",
            buttonsStyling: false,
          });
          return false;
        }
      }
    }

    return true; // Todos los campos cumplen con el límite
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
            return false;
          }
        }
      }
    }
    return true;
  };

  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    if (!validateFiles(formData) && !validateNumberOfFiles(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/moto/send-moto", {
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
      <div className="card-section flex space-around">
        <div className={formStyles.card}>
          <form onSubmit={sendToBackend} encType="multipart/form-data">
            <label htmlFor="">Correo Electronico</label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
            />
            <label htmlFor="">Telefono de contacto</label>
            <input
              type="tel"
              title="phone"
              name="phone"
              placeholder="+54 (343) 00000000"
            />
            <label htmlFor="">Medio de pago</label>
            <select name="payment" title="option">
              <option value="opcion">Elige una opcion</option>
              <option value="Débito">Débito</option>
              <option value="Crédito">Crédito</option>
              <option value="Otro">Otro</option>
            </select>
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto de cedula (Frente y Dorso)
              </label>
            </div>
            <input
              type="file"
              name="cedulaImage"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                Foto del DNI (Frente y dorso)&nbsp;&nbsp;&nbsp; &nbsp;
              </label>
            </div>
            <input
              type="file"
              name="dniImage"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 2)}
            />
            <div className="flex center-items space-evenly">
              <FontAwesomeIcon icon={faCamera} />
              <label htmlFor="" className={formStyles.textIcon}>
                4 fotos de la moto desde diferentes ángulos más foto del chasis
              </label>
            </div>
            <input
              type="file"
              name="motoImages"
              title="image"
              accept="image/png, image/gif, image/jpeg"
              multiple
              required
              onChange={(e) => handleFileChange(e, 5)}
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

export default MotoCertForm;
