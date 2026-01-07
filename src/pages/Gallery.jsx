import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <section className="container">
      <h2>Galería</h2>
      <p>Trabajos destacados de Marbella Makeup Studios.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px"}}>
        {gallery.map((img, i) => (
          <figure key={i}>
            <img src={img.thumb} alt={img.alt} style={{width:"100%",borderRadius:"8px"}} />
            <figcaption>{img.tag}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
