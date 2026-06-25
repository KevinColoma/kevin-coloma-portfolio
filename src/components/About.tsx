import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Code2, Shield, Cloud, Database } from "lucide-react";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: Code2,
    label: "Full Stack",
    desc: "React, Angular, Spring Boot, Node.js",
  },
  {
    icon: Shield,
    label: "Seguridad",
    desc: "OAuth2, JWT, WSO2, Criptografía",
  },
  {
    icon: Cloud,
    label: "DevOps",
    desc: "Docker, Kubernetes, CI/CD, GitOps",
  },
  {
    icon: Database,
    label: "Datos",
    desc: "Oracle, PostgreSQL, MongoDB, MinIO",
  },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle prefix="Sobre" highlight="mí" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {personalInfo.summary}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="p-4 rounded-xl bg-surface-light/50 border border-white/5 hover:border-accent/20 transition-all group"
                  >
                    <item.icon className="text-accent mb-2" size={20} />
                    <h3 className="text-white font-semibold text-sm">{item.label}</h3>
                    <p className="text-text-muted text-xs mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-surface-light/50 border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/foto-perfil.jpg"
                    alt="Kevin Coloma"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                  <h3 className="text-white font-semibold text-lg">
                    Información personal
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Nombre</span>
                    <span className="text-text-secondary font-medium">
                      {personalInfo.name} {personalInfo.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Email</span>
                    <span className="text-text-secondary font-medium">
                      {personalInfo.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Teléfono</span>
                    <span className="text-text-secondary font-medium">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Ubicación</span>
                    <span className="text-text-secondary font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-light/50 border border-white/5">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Idiomas
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-secondary">Español</span>
                      <span className="text-accent font-medium">Nativo</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-lighter rounded-full overflow-hidden">
                      <div className="h-full w-full bg-accent rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-secondary">Inglés</span>
                      <span className="text-accent font-medium">B2</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-lighter rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-accent/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-light/50 border border-white/5">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  LinkedIn
                </h3>
                <div className="flex justify-center [&_a]:!text-accent [&_.badge-base]:!bg-transparent">
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="es_ES"
                    data-size="medium"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="kevin-bladimir"
                    data-version="v1"
                  >
                    <a
                      className="badge-base__link LI-simple-link"
                      href="https://ec.linkedin.com/in/kevin-bladimir?trk=profile-badge"
                    >
                      Kevin Bladimir Coloma Erazo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
