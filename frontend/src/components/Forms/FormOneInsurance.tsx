import styles from "./FormOneInsurance.module.css";

const FormOneInsurance = () => {
  return (
    <section className={`${styles.bg}`}>
      <div className="card-section flex space-around">
        <div className="card">
          <form action="">
            <label htmlFor="">Cobertura que le interesa</label>
            <select title="select" name="select" id="">
              <option value="Opcion">Elige una opcion</option>
              <option value="Contra terceros">Contra terceros</option>
              <option value="Otro">Otro</option>
            </select>
            <label htmlFor="">¿Tiene alguna compañia de referencia?</label>
            <input title="company" type="text" placeholder="compañia" />
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
            <label htmlFor="">Correo Electronico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tuemail@email.com"
            />
            <label htmlFor="">Uso del vehiculo</label>
            <select title="select" name="select" id="use">
              <option value="Opcion">Elige una opcion</option>
              <option value="comercial">Comercial</option>
              <option value="individual">Particular</option>
              <option value="Otro">Otro</option>
            </select>
            <label htmlFor="">Telefono de contacto</label>
            <input type="tel" title="phone" placeholder="+54 (343) 00000000" />
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

export default FormOneInsurance;
