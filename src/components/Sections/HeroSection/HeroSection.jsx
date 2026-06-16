import Button from "../../Ui/Button/Button";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("Menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="Home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.kicker}>Cafe de especialidad y cocina simple</p>
        <h1 id="hero-title">Cafe Cafe</h1>
        <p className={styles.subtitle}>
          Un lugar luminoso para desayunar, trabajar un rato o reencontrarte con
          una pausa bien hecha.
        </p>

        <div className={styles.actions}>
          <Button onClick={scrollToMenu}>Ver menu</Button>
          <a href="#Contacto" className={styles.linkButton}>
            Consultar pedido
          </a>
        </div>
      </div>

      <div className={styles.infoBar} aria-label="Informacion destacada">
        <span>Abierto 7:00 a 20:00</span>
        <span>Pedidos por WhatsApp</span>
        <span>Pasteleria del dia</span>
      </div>
    </section>
  );
}

export default HeroSection;
