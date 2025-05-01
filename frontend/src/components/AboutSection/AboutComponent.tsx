import { FaFacebook, FaLinkedinIn, FaPlus } from "react-icons/fa";
import aboutStyles from "./AboutStyles.module.css";
import img from "./test.png";
import { RiWhatsappFill } from "react-icons/ri";

const AboutComponent = () => {
  const handleClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=543434501551";
  };

  return (
    <section className={aboutStyles.mainSection} id="about">
      <h1 className={`${aboutStyles.about__title} flex content-center`}>
        Sobre nosotros
      </h1>
      <section className={aboutStyles.about}>
        <div className="flex content-center">
          <img className={aboutStyles.about__img} src={img} alt="about" />
        </div>
        <div className={`${aboutStyles.about__div2}`}>
          <h4 className={aboutStyles.about__div2__title}>Luisa Giampietri</h4>
          <p className={aboutStyles.about__div2__p}>
            Mi nombre es Luisa, soy Gestora del Automotor matriculada y
            Productora Asesora de Seguros con amplia experiencia en el sector.
            Brindo asesoramiento integral y personalizado en trámites del
            automotor: transferencias, inscripciones, informes de dominio,
            cédulas, entre otros. Además, acompaño a mis clientes en la
            contratación de seguros vehiculares, hogar, vida y comerciales,
            asegurando coberturas confiables y adaptadas a cada necesidad. Mi
            objetivo es facilitarte todos los procesos y que puedas resolverlos
            con rapidez, transparencia y tranquilidad.
          </p>
          <div className="flex space-between center-items">
            <button title="btn" type="submit" onClick={handleClick}>
              <div className="flex space-around">
                <p>Saber &nbsp;</p>
                <FaPlus size={20} />
              </div>
            </button>
            <div className={`flex center-items`}>
              <FaLinkedinIn size={20} className={aboutStyles.socialMedia} />
              <FaFacebook size={19} className={aboutStyles.socialMedia} />
              <RiWhatsappFill size={20} className={aboutStyles.socialMedia} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutComponent;
