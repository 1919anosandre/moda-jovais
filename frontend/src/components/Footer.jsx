import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f8f8",
        padding: "2rem",
        marginTop: "2rem",
        fontSize: "1rem",
        color: "#333",
        borderTop: "1px solid #ddd",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Moda Jovem</h4>
        <p style={{ fontSize: "1.3rem", color: "black" }}>
          Estilo que acompanha seu ritmo. Looks atuais e acessíveis para todos!
        </p>

        <div
          style={{
            margin: "1rem 0",
            display: "flex",
            justifyContent: "center",
            gap: "1.2rem",
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} style={{ color: "black" }} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} style={{ color: "black" }} />
          </a>
          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} style={{ color: "black" }} />
          </a>
        </div>

        <div style={{ margin: "1rem 0", fontSize: "0.95rem" }}>
          <a href="/sobre" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
            Sobre
          </a>
          |
          <a href="/contato" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
            Contato
          </a>
          |
          <a
            href="/politica-privacidade"
            style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}
          >
            Política de Privacidade
          </a>
        </div>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          © 2025 Moda Jovem - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
