import services from "../data/services.json";

export default function Services() {
  return (
    <section className="container">
      <h2>Servicios</h2>
      <p>14 años de experiencia en maquillaje profesional y micropigmentación.</p>
      <ul>
        {services.map((cat, i) => (
          <li key={i}>
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((item, j) => (
                <li key={j}>
                  <strong>{item.name}</strong>: {item.desc} — USD {item.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
