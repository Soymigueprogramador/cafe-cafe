// src/components/Sections/Menu/Menu.jsx

import { Productos } from "../../../data/menuItems";
import MenuItemCard from '../../Ui/MenuItemCard/MenuItemCard.jsx';
import Button from '../../Ui/Button/Button.jsx';
import style from './Menu.module.css';

const Menu = () => {
  return (
    <div className={style.menuGrid}>
      {Productos.map(item => (
        <MenuItemCard
          key={item.id}
          {...item}
        >
          <Button type="submit">Consultar</Button>
        </MenuItemCard>
      ))}
    </div>
  );
};

export default Menu;
