import menuItem from '../../data/menuItems.js'
import MenuItemCard from '../Ui/MenuItemCard/MenuItemCard.jsx';

const MenuSection = () => {
  return (
    <>
        {
            menuItem.map(item => (
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

export default MenuSection