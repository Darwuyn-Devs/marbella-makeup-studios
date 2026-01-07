// src/components/Footer/Footer.jsx
import site from "../../data/site.json";

export default function Footer() {
  const phone = (site.whatsapp || "").replace(/\+/g, ""); // wa.me NO acepta '+'
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Hola Marbella, quiero reservar.")}`;

  return (
    <footer style={{borderTop:"1px solid #C9A646", marginTop:"40px"}}>
      <div className="container" style={{display:"grid", gap:"16px", padding:"24px 0"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px"}}>
          <strong style={{fontFamily:"Playfair Display", fontSize:"18px"}}>{site.brand}</strong>
          <nav style={{display:"flex", gap:"16px"}}>
            <a href="/">Inicio</a>
            <a href="/servicios">Servicios</a>
            <a href="/galeria">Galería</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"12px"}}>
          <div>
            <div style={{color:"#C9A646"}}>Ubicación</div>
            <div>{site.address}</div>
          </div>
          <div>
            <div style={{color:"#C9A646"}}>Horarios</div>
            {site.hours?.map((h, i) => (
              <div key={i}>{h.days}: {h.time}</div>
            ))}
          </div>
          <div>
            <div style={{color:"#C9A646"}}>Contacto</div>
            <a href={waLink} target="_blank" rel="noopener">WhatsApp</a><br />
            <a href={site.instagram} target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>

        <div style={{fontSize:"12px", opacity:0.8}}>
          © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
