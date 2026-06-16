import { products } from "../../../data/menuItems";
import Button from "../../Ui/Button/Button.jsx";
import MenuItemCard from "../../Ui/MenuItemCard/MenuItemCard.jsx";
import styles from "./Menu.module.css";

const Menu = ({ onSelectProduct, selectedProduct }) => {
  return (
    <div className={styles.menuGrid}>
      {products.map((item) => (
        <MenuItemCard
          key={item.id}
          {...item}
          isSelected={selectedProduct?.id === item.id}
        >
          <Button type="button" onClick={() => onSelectProduct(item)}>
            {selectedProduct?.id === item.id ? "Seleccionado" : "Consultar"}
          </Button>
        </MenuItemCard>
      ))}
    </div>
  );
};

export default Menu;
