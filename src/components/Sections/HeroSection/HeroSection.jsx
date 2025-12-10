// src/components/sections/HeroSection.jsx
import React from 'react';
import Button from '../../Ui/Button/Button'; // Usamos el botón reutilizable
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        // El ID "home" es crucial para el smooth scroll desde el Header
        <section id="home" className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1 className={styles.title}>CAFÉ CAFÉ</h1>
                    <p className={styles.subtitle}>Tu pausa perfecta.</p>

                    {/* Botón CTA que hace scroll a la sección de menú */}
                    <Button onClick={() => {
                        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Explora Nuestro Menú
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;