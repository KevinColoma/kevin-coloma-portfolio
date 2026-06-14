
# Kevin Coloma | Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)

Portfolio profesional interactivo de **Kevin Coloma** — Estudiante de último semestre de Ingeniería en Software y Full Stack Developer. Este sitio web personal muestra mi perfil, experiencia, proyectos, habilidades técnicas y formas de contacto en una interfaz moderna, responsiva y animada.

---

## ✨ Características

| Sección | Descripción |
|---|---|
| **Hero animado** | Presentación con partículas interactivas en Canvas, animaciones de entrada con Framer Motion y enlaces a redes sociales. |
| **Sobre mí** | Resumen profesional, tarjetas de áreas clave (Full Stack, Seguridad, DevOps, Datos), datos personales e idiomas. |
| **Experiencia** | Línea de tiempo con las experiencias laborales más relevantes. |
| **Proyectos** | Proyecto destacado con descripción, características principales y stack tecnológico. |
| **Habilidades** | Grid de habilidades técnicas organizadas por categorías (Frontend, Backend, Bases de Datos, DevOps, Seguridad, Herramientas) más habilidades profesionales. |
| **Educación** | Formación académica y certificaciones profesionales. |
| **Contacto** | Información de contacto, enlaces a redes sociales y formulario funcional (integrado con FormSubmit). |
| **Navegación** | Navbar fijo con efecto blur al hacer scroll, menú responsive para móviles con animación de entrada. |
| **Footer** | Pie de página con derechos reservados y créditos. |

### Animaciones y efectos

- **Fondo de partículas** animado con Canvas API (conexiones entre partículas cercanas).
- **Animaciones por scroll** con Intersection Observer — los elementos aparecen suavemente al entrar en pantalla.
- **Transiciones** con Framer Motion (stagger, fade, slide).
- **Responsive design** con Tailwind CSS, adaptable a móviles, tablets y escritorio.
- **Modo oscuro** nativo con paleta de colores inspirada en azul profundo y acentos celestes.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Propósito |
|---|---|
| [Vite](https://vitejs.dev) | Bundler y dev server ultrarrápido |
| [React 19](https://react.dev) | Biblioteca para construcción de interfaces |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático para JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com) | Framework de estilos utilitario |
| [Framer Motion 12](https://www.framer.com/motion) | Librería de animaciones para React |
| [Lucide React](https://lucide.dev) | Iconos SVG open source |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Renderizado del fondo de partículas |
| [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | Detección de visibilidad para animaciones por scroll |
| [Google Fonts](https://fonts.google.com) | Tipografías Inter y Fira Code |

---

## 📁 Estructura del proyecto

```
kevin-coloma-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                  # Recursos estáticos
│   ├── components/              # Componentes de React
│   │   ├── Navbar.tsx           # Barra de navegación fija
│   │   ├── Hero.tsx             # Sección hero con partículas
│   │   ├── About.tsx            # Sección sobre mí
│   │   ├── Experience.tsx       # Línea de tiempo de experiencia
│   │   ├── Projects.tsx         # Proyectos destacados
│   │   ├── Skills.tsx           # Habilidades técnicas y profesionales
│   │   ├── Education.tsx        # Educación y certificaciones
│   │   ├── Contact.tsx          # Contacto y formulario
│   │   ├── Footer.tsx           # Pie de página
│   │   └── icons.tsx            # Iconos SVG personalizados (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolio.ts         # Datos centralizados del portfolio
│   ├── hooks/
│   │   └── useIntersectionObserver.ts  # Hook para animaciones al hacer scroll
│   ├── App.tsx                  # Componente raíz
│   ├── index.css                # Estilos globales y configuración de Tailwind
│   └── main.tsx                 # Punto de entrada
├── index.html                   # Plantilla HTML
├── package.json                 # Dependencias y scripts
├── vite.config.ts               # Configuración de Vite
├── tsconfig.json                # Configuración base de TypeScript
├── tsconfig.app.json            # Configuración de TypeScript para la app
├── tsconfig.node.json           # Configuración de TypeScript para Node
├── eslint.config.js             # Configuración de ESLint
└── README.md
```

---

## 🚀 Instalación y uso

### Requisitos previos

- **Node.js** >= 20
- **npm** >= 8 (incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/KevinColoma/kevin-coloma-portfolio.git
cd kevin-coloma-portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:5173` por defecto.

### Construcción para producción

```bash
npm run build
```

El sitio compilado se generará en la carpeta `dist/` y podrá ser desplegado en cualquier servidor estático (Vercel, Netlify, GitHub Pages, etc.).

### Vista previa de la build

```bash
npm run preview
```

---

## 📜 Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Vite |
| `npm run build` | Compila TypeScript y genera la build de producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint sobre el código fuente |

---

## 📸 Capturas de pantalla

> *Próximamente — Aquí se incluirán capturas del sitio en desktop, tablet y móvil.*

| Vista | Preview |
|---|---|
| **Hero** | ![](docs/screenshots/hero.png) |
| **Proyectos** | ![](docs/screenshots/projects.png) |
| **Contacto** | ![](docs/screenshots/contact.png) |
| **Móvil** | ![](docs/screenshots/mobile.png) |

---

## 🌐 Despliegue

El sitio está optimizado para ser desplegado en plataformas como:

- **Vercel** — despliegue directo desde GitHub
- **Netlify** — arrastrar la carpeta `dist/` o conectar el repositorio
- **GitHub Pages** — usando `gh-pages` o GitHub Actions
- **Cloudflare Pages** — conectando el repositorio

---

## 📬 Contacto

- **Email:** [kcoloma89@gmail.com](mailto:kcoloma89@gmail.com)
- **Teléfono:** [+593 961216222](tel:+593961216222)
- **LinkedIn:** [Kevin Bladimir Coloma Erazo](http://www.linkedin.com/in/kevin-bladimir)
- **GitHub:** [@KevinColoma](https://github.com/KevinColoma)
- **Ubicación:** Quito, Ecuador

---

## 📄 Licencia

Este proyecto es de uso personal y académico. Todos los derechos reservados © 2026 Kevin Coloma.

---

<p align="center">Hecho con 💙 y mucho café</p>
