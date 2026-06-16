import "./App.css";
import { useState } from "react";
import Header from "./components/layout/Header/Header.jsx";
import HeroSection from "./components/Sections/HeroSection/HeroSection.jsx";
import LocationSection from "./components/Sections/LocationSection/LocationSection.jsx";
import Menu from "./components/Sections/Menu/Menu.jsx";
import ContactForm from "./components/Ui/ContactForm/ContactForm.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app">
      <Header />

      <main>
        <HeroSection />

        <section id="Menu" className="section sectionMenu" aria-labelledby="menu-title">
          <div className="sectionHeader">
            <p className="eyebrow">Carta de la casa</p>
            <h2 id="menu-title">Sabores para bajar un cambio</h2>
            <p>
              Cafes de especialidad, pasteleria fresca y desayunos simples para
              empezar o cortar el dia con algo rico.
            </p>
          </div>

          <Menu
            onSelectProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
        </section>

        <LocationSection />

        <section
          id="Contacto"
          className="section contactSection"
          aria-labelledby="contact-title"
        >
          <div className="contactIntro">
            <p className="eyebrow">Reservas y consultas</p>
            <h2 id="contact-title">Te respondemos por WhatsApp</h2>
            <p>
              Elegi un producto de la carta o escribinos directo para consultar
              disponibilidad, pedidos o reservas.
            </p>
          </div>

          <ContactForm selectedProduct={selectedProduct} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
