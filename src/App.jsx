import "./App.css";
import Header from "./componets/layout/Header/Header.jsx";
import Menu from "./componets/Sections/menu.jsx";
import HeroSection from "./componets/Sections/HeroSection/HeroSection.jsx";
import LocationSection from './componets/Sections/LocationSection/LocationSection.jsx';
import Contacto from './componets/Sections/Contacto/Contacto.jsx'
import Footer from "./componets/layout/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header /> {/* Barra de navegacion */}

      {/* Seccion de inicio */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Seccion de menu */}
      <section id="menu">
        <Menu />
      </section>

      {/* Seccion de unicacion */}
      <section id="ubicacion">
        <LocationSection />
      </section>

      {/* Seccion de contacto */}
      <section id="contacto">
        <Contacto/>
      </section>

      <Footer /> {/* Footer */}
    </>
  );
};

export default App;
