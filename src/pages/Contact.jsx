// src/pages/Contact.jsx
import ContactForm from "../components/ContactForm/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="container">
      <h2>Contacto</h2>
      <p>¿Quieres reservar o hacer una consulta? Escríbenos directamente.</p>
      <ContactForm />
    </section>
  );
}
