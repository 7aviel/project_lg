import insuranceSectionOneStyles from "./InsuranceSectionOne.module.css";

const InsuranceSectionOne = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.sancristobal.com.ar/pas/lg-gestoria-y-seguros ";
  };

  return (
    <>
      <section
        className={`${insuranceSectionOneStyles.introduction} section1 flex center-items space-between`}
      >
        <div className={insuranceSectionOneStyles.introduction__text}>
          <h1>¡Contrata un seguro con nosotros!</h1>
          <h5>Hacemos todo rapido y sencillo para vos</h5>
          <button onClick={handleClick}>COTIZAR AHORA</button>
        </div>
      </section>
    </>
  );
};

export default InsuranceSectionOne;
