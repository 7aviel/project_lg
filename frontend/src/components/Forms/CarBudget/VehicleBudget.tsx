import styles from "../InsBudget/FormOneInsurance.module.css";
import emailjs from "@emailjs/browser"; // Importa EmailJS

const VehicleBudget = () => {
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Configura los datos del formulario y prepara la funcionalidad para enviar las imágenes y demás campos
    const formData = new FormData(event.target as HTMLFormElement);
    const emailData = {
      email: formData.get("email"),
      nombre: formData.get("nombre"),
      phone: formData.get("phone"),
      dni: formData.get("dni"),
      province: formData.get("province"),
      town: formData.get("town"),
      address: formData.get("address"),
      dominio: formData.get("dominio"),
      price: formData.get("price"),
      images: formData.get("images"), // Para enviar imágenes
    };

    emailjs
      .send(
        "service_ovjg8yl",
        "template_qs9eix5",
        emailData,
        "jav_XZjMDuLYwwLue"
      )
      .then(() => {
        alert("Formulario enviado con éxito.");
      })
      .catch((error) => {
        console.error("Error al enviar el formulario: ", error);
        alert("Hubo un problema al enviar el formulario.");
      });
  };

  return (
    <section className={`${styles.bg}`}>
      <div className="card-section flex space-around">
        <div className="card">
          <form onSubmit={sendEmail} encType="multipart/form-data">
            <label htmlFor="">
              Datos de contacto comprador (como figura en DNI)
            </label>
            <label htmlFor="">Correo Electronico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
            />
            <label htmlFor="">Telefono de contacto</label>
            <input type="tel" title="phone" placeholder="+54 (343) 00000000" />
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="nombre y apellido"
            />
            <label htmlFor="">DNI</label>
            <input type="tel" title="dni" placeholder="DNI" />
            <label htmlFor="">Provincia</label>
            <input
              type="text"
              name="province"
              title="province"
              id="province"
              placeholder="provincia"
            />
            <label htmlFor="">Localidad</label>
            <input
              type="text"
              name="town"
              title="town"
              id="town"
              placeholder="localidad"
            />
            <label htmlFor="">Domicilio</label>
            <input
              type="text"
              name="address"
              title="address"
              id="address"
              placeholder="domicilio"
            />
            <label htmlFor="">¿Que tipo de vehiculo es?</label>
            <div className={`${styles.checkbox}`}>
              <div className="flex">
                <input
                  title="vehicle_type"
                  type="checkbox"
                  id="car"
                  name="car"
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="car">Auto</label>
              </div>
              <div className="flex">
                <input
                  title="vehicle_type"
                  type="checkbox"
                  id="moto"
                  name="moto"
                  className={`${styles.checkbox__checkbox}`}
                />
                <label htmlFor="moto">Moto</label>
              </div>
            </div>
            <label htmlFor="">Dominio (patente)</label>

            <input
              type="text"
              name="dominio"
              id="dominio"
              placeholder="dominio"
            />
            <label htmlFor="">
              ¿Tiene en su poder alguno de los sigueintes elementos?
            </label>
            <div className="flex">
              <input
                title="vehicle_type"
                type="checkbox"
                id="titulo"
                name="titulo"
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="titulo">Titulo</label>
            </div>
            <div className="flex">
              <input
                title="vehicle_type"
                type="checkbox"
                id="cedula"
                name="cedula"
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="cedula">Cedula</label>
            </div>
            <div className="flex">
              <input
                title="vehicle_type"
                type="checkbox"
                id="chapa"
                name="chapa"
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="chapa">Ambas chapas</label>
            </div>
            <div className="flex">
              <input
                title="vehicle_type"
                type="checkbox"
                id="verificacion"
                name="verificacion"
                className={`${styles.checkbox__checkbox}`}
              />
              <label htmlFor="verificacion">Verificacion</label>
            </div>
            <label htmlFor="">Precio de compra/venta</label>
            <input title="price" type="tel" placeholder="precio" />

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

export default VehicleBudget;
