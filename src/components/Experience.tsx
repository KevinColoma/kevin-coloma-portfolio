import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Briefcase, Calendar } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle prefix="Experiencia" highlight="laboral" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-white/5" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-4 top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-surface" />

                  <div className="p-6 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase size={18} className="text-accent shrink-0" />
                        <h3 className="text-white font-semibold text-lg">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-sm">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-accent-light font-medium text-sm mb-3">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-text-secondary text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
