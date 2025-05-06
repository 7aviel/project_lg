import { FaArrowCircleDown } from "react-icons/fa";
import insuranceSectionOneStyles from "./InsuranceSectionOne.module.css";
import { NavHashLink } from "react-router-hash-link";
const InsuranceSectionOne = () => {
  return (
    <>
      <section
        className={`${insuranceSectionOneStyles.introduction} section1 flex center-items space-between`}
      >
        <div className={insuranceSectionOneStyles.introduction__text}>
          <h1>¿Que necesitas hacer?</h1>
          <h5>Hacemos todo rapido y sencillo para vos</h5>
          <p>Todos los trámites en un solo lugar</p>
          <div className={`flex space-around ${insuranceSectionOneStyles.btn}`}>
            <NavHashLink smooth to="/seguros/#insurance">
              <FaArrowCircleDown size={30} />
            </NavHashLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuranceSectionOne;
