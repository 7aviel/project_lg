export default function SectionHome() {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=543434501551");
  };

  return (
    <section className="flex center-items section1 home">
      <div>
        <h1>Trámites y Seguros</h1>
        <h5>Nos encargamos de todo por vos</h5>
        <div className="flex space-around">
          <button onClick={handleClick}>Contáctanos</button>
        </div>
      </div>
    </section>
  );
}
