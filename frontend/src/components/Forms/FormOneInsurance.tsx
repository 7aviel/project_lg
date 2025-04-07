import styles from "./FormOneInsurance.module.css";

const FormOneInsurance = () => {
  return (
    <section className={`${styles.bg}`}>
      <div className="card-section">
        <div className="card">
          <form action="">
            <label htmlFor="">Cobertura que le interesa</label>
            <select title="select" name="select" id="">
              <option value="Opcion">Elige una opcion</option>
              <option value="Contra terceros">Contra terceros</option>
              <option value="Otro">Otro</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormOneInsurance;
