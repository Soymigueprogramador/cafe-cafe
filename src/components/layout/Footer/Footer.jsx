import SocialLinks from "../../Ui/SocialLinks/SocialLinks.jsx";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <a href="#Home" className={styles.brand}>
            Cafe Cafe
          </a>
          <p>Especialidad, pasteleria y pausas bien servidas.</p>
        </div>

        <nav className={styles.links} aria-label="Enlaces del sitio">
          <a href="#Menu">Menu</a>
          <a href="#Ubicacion">Ubicacion</a>
          <a href="#Contacto">Contacto</a>
        </nav>

        <SocialLinks />
      </div>

      <p className={styles.copyright}>
        &copy; {currentYear} Cafe Cafe. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
