import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Inicio", id: "Home" },
  { name: "Menu", id: "Menu" },
  { name: "Ubicacion", id: "Ubicacion" },
  { name: "Contacto", id: "Contacto" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#Home" className={styles.logo} onClick={() => setIsOpen(false)}>
        <span className={styles.mark} aria-hidden="true">CC</span>
        <span>Cafe Cafe</span>
      </a>

      <nav
        id="main-navigation"
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
        aria-label="Navegacion principal"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className={styles.cta} href="#Contacto">
        Reservar
      </a>

      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
