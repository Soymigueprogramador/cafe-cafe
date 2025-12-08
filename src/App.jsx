import "./App.css";
import Header from "./componets/layout/Header/Header.jsx";
import Footer from "./componets/layout/Footer/Footer.jsx";
import Button from "./componets/Ui/Button/Button.jsx";
import MenuItemCard from "./componets/Ui/MenuItemCard/MenuItemCard.jsx";
import ContactForm from './componets/Ui/ContactForm/ContactForm.jsx';
import SocialLinks from './componets/Ui/SocialLinks/SocialLinks.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <Button type="submit">Hola mundo</Button>
      <MenuItemCard
        name="Café Latte"
        description="Un café con leche cremoso y delicioso."
        price={1200}
        image="/assets/images/latte.jpg"
      />
      <ContactForm/>
      <SocialLinks/>
    </>
  );
};

export default App;
