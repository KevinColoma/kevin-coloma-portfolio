import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { GraduationCap, Award, Calendar } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle prefix="Educación &" highlight="Certificaciones" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-accent" />
                Formación académica
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all"
                  >
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <p className="text-accent-light text-sm mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-text-muted text-xs mt-2">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <Award size={20} className="text-accent" />
                Cursos y certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all"
                  >
                    <h4 className="text-white font-medium">{cert.name}</h4>
                    {cert.issuer && (
                      <p className="text-accent-light text-sm mt-1">
                        {cert.issuer}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-text-muted text-xs mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    {cert.year && (
                      <div className="flex items-center gap-1.5 text-text-muted text-xs mt-2">
                        <Calendar size={12} />
                        <span>{cert.year}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
