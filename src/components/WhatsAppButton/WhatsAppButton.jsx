import site from "../../data/site.json";

export default function WhatsAppButton({ message = "Hola Marbella, quiero reservar." }) {
  const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <a href={link} target="_blank" rel="noopener"
       style={{
         position:"fixed", right:"20px", bottom:"20px",
         background:"#25D366", color:"#0D0D0D",
         padding:"12px 16px", borderRadius:"999px", fontWeight:600
       }}>
      Reservar por WhatsApp
    </a>
  );
}
