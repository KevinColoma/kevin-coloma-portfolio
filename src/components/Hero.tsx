import { useEffect, useRef, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [startName, setStartName] = useState(false);
  const [startTitle, setStartTitle] = useState(false);
  const [startTagline, setStartTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) { console.error("Canvas not found"); return; }
    const ctx = canvas.getContext("2d");
    if (!ctx) { console.error("Context not found"); return; }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let animId: number;
    const mouse = { x: -999, y: -999 };
    const fontSize = 20;
    const charSet = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ0123456789ABCDEF";
    const cols = Math.floor(window.innerWidth / (fontSize - 6));
    // Múltiples gotas por columna (2-4 cada una)
    const drops: { y: number; speed: number; char: string; changeTimer: number }[][] = [];

    for (let i = 0; i < cols; i++) {
      const count = 2 + Math.floor(Math.random() * 3); // 2-4 gotas por columna
      const colDrops: { y: number; speed: number; char: string; changeTimer: number }[] = [];
      for (let j = 0; j < count; j++) {
        colDrops.push({
          y: Math.random() * canvas.height / fontSize,
          speed: 0.04 + Math.random() * 0.06,
          char: charSet[Math.floor(Math.random() * charSet.length)],
          changeTimer: 0,
        });
      }
      drops.push(colDrops);
    }

    const pastelBlues = [
      "168,216,234", "181,226,250", "196,224,249",
      "154,208,245", "142,202,230", "176,217,241",
    ];

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      // Fade trail: más rápido para que los blancos del mouse no se queden pegados
      ctx.fillStyle = "rgba(15, 23, 42, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const x = i * (fontSize - 2);

        for (let d = 0; d < drops[i].length; d++) {
          const drop = drops[i][d];

          // Avanzar posición siempre (antes de cualquier continue)
          drop.y += drop.speed;

          const y = drop.y * fontSize;

          // Reset al salir de pantalla
          if (y > canvas.height + fontSize) {
            drop.y = -(Math.random() * 10);
            drop.speed = 0.04 + Math.random() * 0.06;
            continue;
          }
          if (y < -fontSize) continue;

          // Cambiar caracter cada ~10-20 frames (no en cada frame)
          drop.changeTimer++;
          if (drop.changeTimer > 20 + Math.floor(Math.random() * 25)) {
            drop.char = charSet[Math.floor(Math.random() * charSet.length)];
            drop.changeTimer = 0;
          }

          // Mouse interaction
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = dist < 100;

          // Normal: pastel blue tenue | Mouse: blanco brillante
          const rgb = near ? "255,255,255" : pastelBlues[i % pastelBlues.length];
          const alpha = near ? 1 : 0.35 + Math.random() * 0.3;

          ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
          ctx.fillText(drop.char, x, y);
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Fade overlay solo en la parte inferior para mejorar legibilidad */}
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
                href={`mailto:${personalInfo.email}`}
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
