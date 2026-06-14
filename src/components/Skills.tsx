import { motion } from "framer-motion";
import { skills, softSkills } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const skillIcons: Record<string, string> = {
  Frontend: "</>",
  Backend: "{}",
  "Bases de Datos": "DB",
  "DevOps & Cloud": "⚙",
  Seguridad: "🔒",
  Herramientas: "🔧",
};

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle prefix="Habilidades" highlight="técnicas" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent font-mono text-lg">
                    {skillIcons[group.category] || "▸"}
                  </span>
                  <h3 className="text-white font-semibold text-sm">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-text-secondary bg-white/5 rounded-lg border border-white/5 group-hover:border-accent/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 p-6 rounded-xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-accent" />
              <h3 className="text-white font-semibold">
                Habilidades profesionales
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-text-secondary bg-white/5 rounded-full border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
