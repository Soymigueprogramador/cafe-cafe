import "./App.css";
import Header from "./components/layout/Header/Header.jsx";
import Menu from './components/Sections/Menu.jsx'
import HeroSection from "./components/Sections/HeroSection/HeroSection.jsx";
import LocationSection from './components/Sections/LocationSection/LocationSection.jsx';
import Contacto from './components/Sections/Contacto/Contacto.jsx'
import Footer from "./components/layout/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header /> {/* Barra de navegacion */}

      {/* Seccion de inicio */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Seccion de menu */}
      <section id="Menu">
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
