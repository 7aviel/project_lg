import contactStyles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={contactStyles.contact}>
      <div className={contactStyles.contact__container}>
        <h1 className="flex content-center">Contacto</h1>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="nombre@email.com" />
        <label htmlFor="phoneNumber">Numero de Teléfono</label>
        <input type="number" id="phoneNumber" placeholder="+543411111111" />
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="menssage"
          id="message"
          placeholder="Escribe aquí"
        ></textarea>
        <button title="submit" type="submit">
          Enviar
        </button>
      </div>
    </section>
  );
}
