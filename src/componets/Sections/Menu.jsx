import { Productos } from '../../data/menuItems.js'
import MenuItemCard from '../Ui/MenuItemCard/MenuItemCard.jsx';
import Button from '../Ui/Button/Button.jsx';

const Menu = () => {
  return (
    <>
      {Productos.map(item => (
        <MenuItemCard
          key={item.id}
          {...item}
        >
          <Button type="submit">Consultar</Button>
        </MenuItemCard>
      ))}
    </>
  );
};

export default Menu;
