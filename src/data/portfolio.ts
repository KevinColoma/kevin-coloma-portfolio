export const personalInfo = {
  name: "Kevin Bladimir",
  lastName: "Coloma Erazo",
  title: "Full Stack Developer",
  email: "kcoloma89@gmail.com",
  phone: "+593 961216222",
  location: "Quito, Ecuador",
  github: "https://github.com/KevinColoma",
  linkedin: "http://www.linkedin.com/in/kevin-bladimir",
  tagline: "Estudiante de último semestre de Ingeniería en Software",
  summary: "Estudiante de último semestre de Ingeniería en Software con sólida base en desarrollo tecnológico full-stack, automatización de procesos, gestión de datos y ciberseguridad. Experiencia práctica en el diseño y documentación de soluciones empresariales, consumo e integración de APIs, y despliegue automatizado. Capacidad analítica y técnica para la arquitectura de software seguro, control de accesos, auditoría de datos y trabajo colaborativo orientado a objetivos organizacionales bajo metodologías ágiles y DevOps.",
};

export const skills = [
  { category: "Frontend", items: ["React", "Angular 17", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Java (Spring Boot)", "Node.js", "REST APIs", "OAuth2/JWT", "WSO2"] },
  { category: "Bases de Datos", items: ["Oracle 19c", "PostgreSQL", "MongoDB", "MinIO"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Jenkins", "ArgoCD", "Git/GitLab", "CI/CD"] },
  { category: "Seguridad", items: ["Ciberseguridad", "Criptografía", "Auditoría", "Control de Accesos"] },
  { category: "Herramientas", items: ["Excel Avanzado", "n8n", "Automatización", "GitOps"] },
];

export const experience = [
  {
    role: "Desarrollador (Pasante)",
    company: "ESPE – GAD Sigchos",
    period: "Dic 2025 – Mar 2026",
    highlights: [
      "Diseño, desarrollo y documentación de soluciones tecnológicas web",
      "Integración de APIs REST y optimización de componentes lógicos",
      "Mejora de usabilidad y colaboración en análisis de requerimientos",
    ],
  },
  {
    role: "Asistente de Automatización (Trainee)",
    company: "Ai Connect Solutions",
    period: "Oct 2025 – Ene 2026",
    highlights: [
      "Desarrollo de flujos de automatización e integración digital",
      "Integración de entornos (Telegram, CRM, Google Sheets)",
      "Manejo de datos estructurados e implementación de herramientas basadas en IA",
    ],
  },
];

export const projects = [
  {
    title: "Sistema de Gestión de Acuerdos",
    institution: "UTICs – ESPE",
    description:
      "Aplicación full-stack para la gestión y flujo de revisión de acuerdos institucionales. Backend seguro en Spring Boot 3 con autenticación OAuth2/WSO2 y base de datos Oracle 19c. Frontend modular en Angular 17 con componentes analíticos de visualización (Chart.js).",
    highlights: [
      "Snapshots inmutables para trazabilidad de auditoría",
      "Almacenamiento en MinIO",
      "Despliegue automatizado con CI/CD (Jenkins, Kubernetes, GitOps, ArgoCD)",
    ],
    tech: ["Spring Boot 3", "Angular 17", "Oracle 19c", "MinIO", "Docker", "Kubernetes", "ArgoCD", "Chart.js"],
  },
];

export const education = [
  {
    degree: "Ingeniería en Software",
    institution: "Universidad de las Fuerzas Armadas ESPE",
    period: "Último semestre en curso",
  },
  {
    degree: "Inglés B2",
    institution: "South American Language Center",
    period: "2019 – 2022",
  },
];

export const certifications = [
  {
    name: "Ciberseguridad y Gestión de Riesgos",
    issuer: "Academia Profe Sang",
    year: "2026",
    description: "Fundamentos de seguridad, criptografía, análisis de vulnerabilidades y auditoría.",
  },
  {
    name: "Industria 4.0",
    issuer: "Formación complementaria",
    year: "2025",
    description: "Transformación digital, automatización de procesos y tecnologías emergentes.",
  },
];

export const softSkills = [
  "Capacidad de ejecución",
  "Comunicación asertiva",
  "Rendición de cuentas (Accountability)",
  "Adaptabilidad al cambio",
  "Pensamiento crítico",
  "Gestión de tiempos",
];

export const languages = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "B2" },
];
