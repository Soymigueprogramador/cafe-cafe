// src/components/Sections/Menu/Menu.jsx

import MenuItems from '../../../data/MenuItems.js';
import MenuItemCard from '../../Ui/MenuItemCard/MenuItemCard.jsx';
import Button from '../../Ui/Button/Button.jsx';
import style from './Menu.module.css';

const Menu = () => {
  return (
    <div className={style.menuGrid}>
      {MenuItems.map(item => (
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
