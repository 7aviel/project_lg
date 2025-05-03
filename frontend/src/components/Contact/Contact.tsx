import contactStyles from "./Contact.module.css";
import Swal from "sweetalert2";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3_FORM;

export default function Contact() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Enviado",
        text: "Responderemos a la brevedad. ¡Gracias por contactarnos!",
        icon: "success",
        buttonsStyling: false,
      });
      (event.target as HTMLFormElement).reset();
    } else {
      Swal.fire({
        title: "...Ops",
        text: "Algo se rompió. Intentalo de nuevo",
        icon: "error",
        buttonsStyling: false,
      });
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contacts" className={contactStyles.contact}>
      <form onSubmit={onSubmit}>
        <input
          type="hidden"
          name="Solicitud de Contacto"
          id="contact"
          value="Formulario de Contacto"
        />
        <div className={contactStyles.contact__container}>
          <h1 className="flex content-center">Contacto</h1>
          <label htmlFor="nombre completo">Nombre Completo</label>
          <input
            type="text"
            name="nombre completo"
            placeholder="Nombre Completo"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="nombre@email.com"
            name="email"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            name="mensaje"
            id="message"
            placeholder="Escribe aquí"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
}
