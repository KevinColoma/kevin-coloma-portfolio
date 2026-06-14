import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animId: number;
    const mouse = { x: -9999, y: -9999 };
    const fontSize = 16;
    const charSet =
      "01アイウエオカキクケコサシスセソタチツテト0123456789";
    const cols = Math.floor(window.innerWidth / (fontSize - 8));
    const drops: { y: number; speed: number; char: string; changeTimer: number }[][] = [];

    for (let i = 0; i < cols; i++) {
      const count = 1 + Math.floor(Math.random() * 2);
      const colDrops: { y: number; speed: number; char: string; changeTimer: number }[] = [];
      for (let j = 0; j < count; j++) {
        colDrops.push({
          y: Math.random() * canvas.height / fontSize,
          speed: 0.03 + Math.random() * 0.06,
          char: charSet[Math.floor(Math.random() * charSet.length)],
          changeTimer: 0,
        });
      }
      drops.push(colDrops);
    }

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) { mouse.x = t.clientX; mouse.y = t.clientY; }
    };
    const onTouchEnd = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      // Fade más intenso para que sea mucho más tenue
      ctx.fillStyle = "rgba(15, 23, 42, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const x = i * (fontSize - 8);

        for (let d = 0; d < drops[i].length; d++) {
          const drop = drops[i][d];
          drop.y += drop.speed;
          const y = drop.y * fontSize;

          if (y > canvas.height + fontSize) {
            drop.y = -(Math.random() * 10);
            drop.speed = 0.03 + Math.random() * 0.06;
            continue;
          }
          if (y < -fontSize) continue;

          drop.changeTimer++;
          if (drop.changeTimer > 30 + Math.floor(Math.random() * 30)) {
            drop.char = charSet[Math.floor(Math.random() * charSet.length)];
            drop.changeTimer = 0;
          }

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const near = Math.sqrt(dx * dx + dy * dy) < 120;

          // Alpha mucho más bajo para atenuación general
          const baseAlpha = 0.04 + Math.random() * 0.06;
          const alpha = near ? Math.min(0.4, baseAlpha + 0.3) : baseAlpha;
          const rgb = near ? "255,255,255" : "168,216,234";

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
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
