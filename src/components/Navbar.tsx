import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white hover:text-accent transition-colors"
          >
            <span className="text-accent">&lt;</span>
            KC
            <span className="text-accent"> /&gt;</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-light/95 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
