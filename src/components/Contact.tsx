import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: personalInfo.location,
    },
  ];

  const socialLinks = [
    { icon: GithubIcon, label: "GitHub", href: personalInfo.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle highlight="Contacto" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                ¿Tienes un proyecto en mente o te gustaría colaborar? No dudes
                en contactarme. Estoy abierto a oportunidades laborales y
                colaboraciones interesantes.
              </p>

              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 p-4 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent/20 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <item.icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-text-muted text-xs">{item.label}</p>
                          <p className="text-white text-sm font-medium">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-light/30 border border-white/5">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <item.icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-text-muted text-xs">{item.label}</p>
                          <p className="text-white text-sm font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-light/50 border border-white/5 text-text-muted hover:text-white hover:border-accent/20 hover:bg-accent/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-surface-light/30 border border-white/5"
            >
              <form
                action={`https://formsubmit.co/${personalInfo.email}`}
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary text-sm mb-1.5"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-surface-lighter/50 border border-white/10 rounded-lg text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary text-sm mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-surface-lighter/50 border border-white/10 rounded-lg text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary text-sm mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-surface-lighter/50 border border-white/10 rounded-lg text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    placeholder="Escribe tu mensaje..."
                  />
                </div>
                <input
                  type="hidden"
                  name="_next"
                  value={typeof window !== "undefined" ? `${window.location.origin}/thanks.html` : ""}
                />
                <input type="hidden" name="_captcha" value="true" />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
