import styles from "./MenuItemCard.module.css";

function MenuItemCard({
  category,
  name,
  description,
  price,
  image,
  children,
  isSelected,
}) {
  return (
    <article className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{name}</h3>

        <div className={styles.details}>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price.toFixed(2)}</p>
        </div>
      </div>

      <div className={styles.action}>{children}</div>
    </article>
  );
}

export default MenuItemCard;
