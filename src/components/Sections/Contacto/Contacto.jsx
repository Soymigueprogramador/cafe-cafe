import { useState } from "react";
import ContactForm from "../../Ui/ContactForm/ContactForm.jsx";
import Menu from "../Menu/Menu";

const Contacto = ({ showMenu = true, showForm = true }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {showMenu && (
        <Menu
          onSelectProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      )}
      {showForm && <ContactForm selectedProduct={selectedProduct} />}
    </>
  );
};

export default Contacto;
