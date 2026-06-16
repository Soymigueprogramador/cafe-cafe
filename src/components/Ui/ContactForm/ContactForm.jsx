import { useState } from "react";
import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";

const initialFormData = {
  name: "",
  number: "",
  message: "",
};

function ContactForm({ selectedProduct }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.number.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const phoneNumber = "5491126644514";
    const productText = selectedProduct
      ? `${selectedProduct.name} - $${selectedProduct.price.toFixed(2)}`
      : "Consulta general";

    const message = [
      "Hola, quiero hacer una consulta desde la web.",
      "",
      `Nombre: ${formData.name}`,
      `Telefono: ${formData.number}`,
      `Producto: ${productText}`,
      "",
      `Mensaje: ${formData.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFormData(initialFormData);
    setStatus("success");
  };

  return (
    <div className={styles.formContainer}>
      {selectedProduct ? (
        <div className={styles.selectedProduct}>
          <span>Producto seleccionado</span>
          <strong>
            {selectedProduct.name} - ${selectedProduct.price.toFixed(2)}
          </strong>
        </div>
      ) : (
        <div className={styles.selectedProduct}>
          <span>Consulta general</span>
          <strong>Contanos que necesitas</strong>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nombre
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label>
          Telefono
          <input
            type="tel"
            name="number"
            placeholder="11 2345 6789"
            value={formData.number}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label>
          Mensaje
          <textarea
            name="message"
            placeholder="Hola, queria consultar por..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={styles.textarea}
          />
        </label>

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
        </Button>

        {status === "success" && (
          <p className={styles.successMessage}>
            Listo. Se abrio WhatsApp con tu mensaje preparado.
          </p>
        )}

        {status === "error" && (
          <p className={styles.errorMessage}>
            Completa todos los campos antes de enviar.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
