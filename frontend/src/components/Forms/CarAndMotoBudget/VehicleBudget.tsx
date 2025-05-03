import { useState } from "react";
import styles from "../InsBudget/FormOneInsurance.module.css";
import Swal from "sweetalert2";
import formStyles from "../Form.module.css";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3_FORM;

const VehicleBudget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicleType, setVehicleType] = useState({ car: false, moto: false });
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({
    titulo: false,
    cedula: false,
    chapa: false,
    verificacion: false,
    neither: false,
  });

  // Función para permitir solo una selección entre Auto y Moto
  const handleVehicleSelection = (type: "car" | "moto") => {
    setVehicleType((prev) => ({
      car: type === "car" ? !prev.car : false,
      moto: type === "moto" ? !prev.moto : false,
    }));
  };

  // Función para manejar la selección de elementos
  const handleItemsSelection = (item: string) => {
    if (item === "neither") {
      setSelectedItems({
        titulo: false,
        cedula: false,
        chapa: false,
        verificacion: false,
        neither: true,
      });
    } else {
      setSelectedItems((prev) => ({
        ...prev,
        neither: false,
        [item]: !prev[item],
      }));
    }
  };

  // Función para enviar datos con Web3Forms
  const sendToBackend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos.");
      }

      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Nos pondremos en contacto contigo pronto.",
        icon: "success",
        buttonsStyling: false,
      });

      (event.target as HTMLFormElement).reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Intentalo de nuevo",
        icon: "error",
        buttonsStyling: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.bg}`}>
      <div className="flex space-around">
        <div className={formStyles.card}>
          <form onSubmit={sendToBackend} encType="multipart/form-data">
            <input
              type="hidden"
              name="Solicitud de Presupuesto de Auto/Moto"
              id="budget"
              value="Formulario de presupuesto"
            />
            <label htmlFor="vehicleType">¿Qué tipo de vehículo es?</label>
            <div className={`${styles.checkbox}`}>
              <div className="flex">
                <input
                  type="checkbox"
                  id="car"
                  name="Auto"
                  checked={vehicleType.car}
                  onChange={() => handleVehicleSelection("car")}
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="car">Auto</label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  id="moto"
                  name="Moto"
                  checked={vehicleType.moto}
                  onChange={() => handleVehicleSelection("moto")}
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="moto">Moto</label>
              </div>
            </div>
            <label htmlFor="dominio">Dominio (patente)</label>
            <input
              type="text"
              name="dominio"
              id="dominio"
              placeholder="dominio"
              required
            />
            <label htmlFor="elements">
              ¿Tiene en su poder alguno de los siguientes elementos?
            </label>
            <div className="flex">
              <input
                type="checkbox"
                name="titulo"
                id="titulo"
                checked={selectedItems.titulo}
                onChange={() => handleItemsSelection("titulo")}
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="titulo">Título</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="cedula"
                id="cedula"
                checked={selectedItems.cedula}
                onChange={() => handleItemsSelection("cedula")}
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="cedula">Cédula</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="chapa"
                id="chapa"
                checked={selectedItems.chapa}
                onChange={() => handleItemsSelection("chapa")}
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="chapa">Ambas chapas</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="verificacion"
                id="verificacion"
                checked={selectedItems.verificacion}
                onChange={() => handleItemsSelection("verificacion")}
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="verificacion">Verificación</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="Ninguno"
                id="neither"
                checked={selectedItems.neither}
                onChange={() => handleItemsSelection("neither")}
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="neither">Ninguno</label>
            </div>
            <label htmlFor="price">Precio de compra/venta</label>
            <input
              type="tel"
              name="Precio en AR$"
              placeholder="Precio en AR$"
              required
            />
            <label htmlFor="contact">
              Datos de contacto comprador (Como figura en DNI)
            </label>
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="nombre y apellido"
              placeholder="Nombre y Apellido"
              required
            />
            <label htmlFor="">DNI</label>
            <input type="tel" name="DNI" placeholder="DNI" required />
            <label htmlFor="">Provincia</label>
            <input
              type="text"
              name="Provincia"
              placeholder="Provincia"
              required
            />
            <label htmlFor="">Localidad</label>
            <input
              type="text"
              name="Localidad"
              placeholder="Localidad"
              required
            />
            <label htmlFor="">Domicilio</label>
            <input
              type="text"
              name="Domicilio"
              placeholder="Domicilio"
              required
            />
            <label htmlFor="">Correo Electronico (Comprador)</label>
            <input
              type="email"
              name="Email"
              placeholder="tuemail@email.com"
              required
            />
            <label htmlFor="">Telefono de contacto (Comprador)</label>
            <input
              type="tel"
              name="Telefono"
              placeholder="+54 (343) 00000000"
              required
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

export default VehicleBudget;
