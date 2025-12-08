import { Productos } from '../../data/menuItems.js'
import MenuItemCard from '../Ui/MenuItemCard/MenuItemCard.jsx';

const Menu = () => {
  return (
    <>
        {
            Productos.map(item => (
                <MenuItemCard
                    key={
                        item.id
                    }
                    {
                        ...item
                    }
                />
            ))
        }
    </>
  )
}

export default Menu;