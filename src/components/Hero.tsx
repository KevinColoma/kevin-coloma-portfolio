import { useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [startName, setStartName] = useState(false);
  const [startTitle, setStartTitle] = useState(false);
  const [startTagline, setStartTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Bottom fade para hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider"
        >
          Hola, mi nombre es
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight min-h-[1.2em]">
          <TypewriterText
            text={`${personalInfo.name} `}
            speed={60}
            delay={500}
            cursor={false}
            onComplete={() => setStartName(true)}
          />
          {startName && (
            <TypewriterText
              text={personalInfo.lastName}
              speed={50}
              delay={100}
              tag="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light"
              cursor
              onComplete={() => setStartTitle(true)}
            />
          )}
        </h1>

        {startTitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary mb-6"
          >
            <TypewriterText
              text={personalInfo.title}
              speed={40}
              cursor
              onComplete={() => setStartTagline(true)}
            />
          </motion.p>
        )}

        {startTagline && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-text-muted max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed"
          >
            <TypewriterText
              text={personalInfo.tagline}
              speed={15}
              delay={300}
              cursor={false}
              onComplete={() => setShowButtons(true)}
            />
          </motion.p>
        )}

        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
              >
                Contáctame
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/10 text-text-secondary rounded-xl font-medium hover:bg-white/5 hover:text-white transition-all active:scale-95"
              >
                Ver proyectos
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label="GitHub"
              >
                <GithubIcon width={22} height={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={22} height={22} />
              </a>
          <a
            href={`mailto:${personalInfo.email}?subject=Contacto%20desde%20portfolio&body=Hola%20Kevin%2C%20me%20gustar%C3%ADa%20contactarte%20para...`}
            className="p-3 text-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="block text-text-muted hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
