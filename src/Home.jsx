import site from "../data/site.json";

export default function Home(){
  return (
    <section className="container">
      <h2 style={{fontFamily:"Playfair Display"}}>Maquillaje profesional y glam</h2>
      <p>Bienvenida a {site.brand}. Especialistas en looks glam, novias y peinados.</p>
      <a className="btn" href="/servicios">Ver servicios</a>
    </section>
  );
}
