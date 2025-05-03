import { FaPlus } from "react-icons/fa";
import aboutStyles from "./AboutStyles.module.css";

const AboutComponent = () => {
  const handleClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=543434501551";
  };

  return (
    <section className={aboutStyles.about} id="about">
      <div className={`${aboutStyles.about__div2}`}>
        <div>
          <h4 className={aboutStyles.about__div2__title}>Luisa Giampietri</h4>
          <h6 className={aboutStyles.about__div2__title}>
            Gestora y Productora asesora de seguros
          </h6>
        </div>
        <p className={aboutStyles.about__div2__p}>
          Mi nombre es Luisa, soy Gestora del Automotor matriculada y Productora
          Asesora de Seguros con amplia experiencia en el sector. Brindo
          asesoramiento integral y personalizado en trámites del automotor:
          transferencias, inscripciones, informes de dominio, cédulas, entre
          otros. Además, acompaño a mis clientes en la contratación de seguros
          vehiculares, hogar, vida y comerciales, asegurando coberturas
          confiables y adaptadas a cada necesidad. Mi objetivo es facilitarte
          todos los procesos y que puedas resolverlos con rapidez, transparencia
          y tranquilidad.
        </p>
        <div className="flex content-center">
          <button title="btn" type="submit" onClick={handleClick}>
            <div className="flex content-center">
              <p>Saber &nbsp;</p>
              <FaPlus size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
