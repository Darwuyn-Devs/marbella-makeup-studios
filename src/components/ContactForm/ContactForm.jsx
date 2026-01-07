// src/components/ContactForm/ContactForm.jsx
import { useState } from "react";
import site from "../../data/site.json";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    fecha: "",
    mensaje: ""
  });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hola Marbella, soy ${form.nombre}. Tel: ${form.telefono}. 
Me interesa: ${form.servicio}. Fecha: ${form.fecha}. ${form.mensaje}`;
    const phone = (site.whatsapp || "").replace(/\+/g, "");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={submit} className="contactForm" noValidate>
      <input
        placeholder="Nombre"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        required
      />
      <input
        placeholder="Teléfono"
        value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        required
      />
      <input
        placeholder="Servicio"
        value={form.servicio}
        onChange={(e) => setForm({ ...form, servicio: e.target.value })}
      />
      <input
        type="date"
        value={form.fecha}
        onChange={(e) => setForm({ ...form, fecha: e.target.value })}
      />
      <textarea
        placeholder="Mensaje"
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
      />
      <button type="submit">Enviar por WhatsApp</button>
    </form>
  );
}
