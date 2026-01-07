import site from "../../data/site.json";

export default function Header(){
  return (
    <header className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <h1 style={{fontFamily:"Playfair Display", fontWeight:600}}>{site.brand}</h1>
      <nav style={{display:"flex",gap:"16px"}}>
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/galeria">Galería</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}
