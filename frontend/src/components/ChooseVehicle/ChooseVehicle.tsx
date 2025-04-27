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

  const handleClickThree = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=543434501551";
  };

  return (
    <>
      <div className={styles.mainBlock}>
        <h2 className={styles.mainBlock__title}>
          ¿Que necesitas presupuestar?
        </h2>
        <div className={styles.mainBlock__btns}>
          <button type="button" name="carAndMoto" onClick={handleClick}>
            Auto/Moto
          </button>
          <button type="button" onClick={handleClickTwo} name="shipType">
            Embarcación
          </button>
          <button type="button" onClick={handleClickThree}>
            Otro
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseVehicle;
