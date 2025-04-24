import { useNavigate } from "react-router-dom";
import styles from "./ChooseVehicle.module.css";

const ChooseVehicle = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/presupuestar-auto");
  };

  const handleClickTwo = () => {
    navigate("/presupuestar-embarcacion");
  };

  return (
    <>
      <div className={styles.mainBlock}>
        <h2 className={styles.mainBlock__title}>
          ¿Que necesitas presupuestar?
        </h2>
        <div className={styles.mainBlock__btns}>
          <button name="carAndMoto" onClick={handleClick}>
            Auto/Moto
          </button>
          <button onClick={handleClickTwo} name="shipType">
            Embarcación
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseVehicle;
