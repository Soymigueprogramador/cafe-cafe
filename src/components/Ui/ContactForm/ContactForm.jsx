// src/components/ui/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button.jsx'; // Importamos el componente Button que ya creamos

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Validación básica (simple)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, rellena todos los campos.");
      setStatus('error');
      return;
    }

    // 2. Simulación de envío de datos (ya que no hay backend)
    // Normalmente, aquí harías un fetch/axios.post(URL, formData)
    console.log("Datos del formulario simulados:", formData);

    // Simular una pequeña demora de red
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario

      // Opcional: Quitar el mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);

    }, 1500);
  };

  return (
    <div className={styles.formContainer}>
      {/* Si decides usar Formspree o un servicio similar (sin backend),
        debes añadir 'action' y 'method' al tag form, como se explica en la nota.
        Ej: <form onSubmit={handleSubmit} className={styles.form} action="YOUR_FORMSPREE_URL" method="POST">
      */}
      <form onSubmit={handleSubmit} className={styles.form}>

        {/* Input: Nombre */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />

        {/* Input: Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />

        {/* Textarea: Mensaje */}
        <textarea
          name="message"
          placeholder="Tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className={styles.textarea}
        ></textarea>

        {/* Botón de Enviar */}
        <Button
            type="submit"
            disabled={status === 'sending'}
        >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>

        {/* Mensajes de Estado */}
        {status === 'success' && (
          <p className={styles.successMessage}>
            ¡Mensaje enviado con éxito! Gracias por contactarnos.
          </p>
        )}
        {status === 'error' && (
          <p className={styles.errorMessage}>
            Ocurrió un error. Inténtalo de nuevo más tarde.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;