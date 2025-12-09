// src/components/ui/MenuItemCard.jsx
import styles from './MenuItemCard.module.css';

function MenuItemCard({ name, description, price, image, children }) {
  // Nota: `image` debe ser la ruta a tu imagen dentro de la carpeta `assets/images`
  // o una URL completa si usas imágenes externas.

  return (
    <div className={styles.card}>

      {/* Contenedor para la imagen redondeada */}
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      {/* Título del Producto */}
      <h3 className={styles.title}>{name}</h3>

      {/* Descripción y Precio */}
      <div className={styles.details}>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>
            <span className={styles.priceTag}>${price.toFixed(2)}</span>
        </p>
      </div>
      { children }
    </div>
  );
}

export default MenuItemCard;

// Para usar este componente hacemos esto
/**
  * Llamamos al componente en el archivo donde lo vamos a usar
  * Abrimos la etiqueta creada por el componente
  * Le pasamos las props necesarias como:
    * Titulo
    * Descripcion
    * Precio
    * Imagen del producto
*/
// Ejemplo
/*
  <MenuItemCard
    name="Café Latte"
    description="Un café con leche cremoso y delicioso."
    price={1200}
    image="/assets/images/latte.jpg"
  />
*/