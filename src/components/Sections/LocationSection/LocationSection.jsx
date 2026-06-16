import styles from "./LocationSection.module.css";

const locationData = {
  address: "Calle de la Felicidad 123, Ciudad Sol",
  hours: "Lunes a domingo, 7:00 a 20:00",
  mapImageUrl: "/assets/Image/map-placeholder.jpg",
};

function LocationSection() {
  return (
    <section
      id="Ubicacion"
      className={styles.locationSection}
      aria-labelledby="location-title"
    >
      <div className={styles.contentWrapper}>
        <div>
          <p className="eyebrow">Donde encontrarnos</p>
          <h2 id="location-title" className={styles.heading}>
            Una esquina tranquila para tu cafe de todos los dias
          </h2>
        </div>

        <div className={styles.locationGrid}>
          <div className={styles.mapContainer}>
            <img
              src={locationData.mapImageUrl}
              alt="Mapa ilustrativo de la ubicacion de Cafe Cafe"
              className={styles.mapImage}
            />
          </div>

          <div className={styles.details}>
            <dl>
              <div>
                <dt>Direccion</dt>
                <dd>{locationData.address}</dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>{locationData.hours}</dd>
              </div>
            </dl>

            <p className={styles.extraInfo}>
              Podes pasar sin reserva para tomar algo rapido o escribirnos antes
              si venis en grupo.
            </p>
            <a className={styles.mapLink} href="#Contacto">
              Coordinar visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
