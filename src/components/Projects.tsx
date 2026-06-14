import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FolderGit2, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle prefix="Proyectos" highlight="destacados" />

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                    <FolderGit2 size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-accent-light text-sm font-medium">
                      {project.institution}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    Características principales
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, j) => (
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

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
