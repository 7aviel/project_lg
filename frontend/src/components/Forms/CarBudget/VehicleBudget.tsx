import styles from "../InsBudget/FormOneInsurance.module.css";

const VehicleBudget = () => {
  return (
    <section className={`${styles.bg}`}>
      <div className="card-section flex space-around">
        <div className="card">
          <form action="">
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
              id=""
              placeholder="nombre y apellido"
            />
            <label htmlFor="">DNI</label>
            <input type="tel" title="dni" placeholder="DNI" />
            <label htmlFor="">Provincia</label>
            <input
              type="text"
              name="province"
              title="province"
              placeholder="provincia"
            />
            <label htmlFor="">Localidad</label>
            <input
              type="text"
              name="town"
              title="town"
              placeholder="localidad"
            />
            <label htmlFor="">Domicilio</label>
            <input
              type="text"
              name="address"
              title="address"
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
