# Cafe‑Cafe

## Descripción

**Cafe‑Cafe** es una **landing page moderna para una cafetería**, desarrollada con **React** y **Vite**. El proyecto está enfocado en mostrar la identidad del negocio, su propuesta gastronómica y la información de contacto mediante una interfaz limpia, rápida y adaptable a distintos dispositivos.

Este repositorio contiene el código fuente completo del frontend.

---

## Tecnologías utilizadas

* **React 19.2.0** – Construcción de la interfaz mediante componentes reutilizables
* **Vite** – Entorno de desarrollo y build rápido
* **JavaScript (ES6+)** – Lógica de la aplicación
* **CSS / CSS Modules** – Estilos y diseño responsive

---

## Funcionalidades

* Landing page responsive (mobile, tablet y desktop)
* Secciones informativas típicas de una cafetería:

  * Hero / presentación
  * Menú de productos
  * Información del negocio
  * Contacto
* Arquitectura basada en componentes
* Carga rápida y optimizada para producción

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* **Node.js** v16 o superior
* **npm** o **yarn**

---

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/Soymigueprogramador/cafe-cafe.git
```

Accede a la carpeta del proyecto:

```bash
cd cafe-cafe
```

Instala las dependencias:

```bash
npm install
```

---

## Ejecución en desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## Build para producción

Para generar los archivos optimizados de producción:

```bash
npm run build
# o
yarn build
```

Los archivos finales se generarán en la carpeta:

```
dist/
```

Para previsualizar el build:

```bash
npm run preview
```

---

## Despliegue

El proyecto puede desplegarse en cualquier servicio de hosting estático como:

* Netlify
* Vercel
* GitHub Pages

Solo es necesario servir el contenido generado en la carpeta `dist/`.

---

## Estructura del proyecto

```text
cafe-cafe/
├── public/                # Recursos públicos
├── src/
│   ├── assets/            # Imágenes y recursos
│   ├── components/        # Componentes React
│   ├── data/              # Datos estáticos (menú, etc.)
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Contribuciones

Las contribuciones son bienvenidas. Para colaborar:

1. Realiza un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit
4. Abre un Pull Request

---

## Autor

Proyecto desarrollado por **Soymigueprogramador**.

---

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.