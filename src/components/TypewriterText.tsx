import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  cursor?: boolean;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = "",
  tag: Tag = "span",
  cursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  // Mantener ref actualizada sin causar re-ejecución del effect
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let i = 0;
    doneRef.current = false;

    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
        }
        if (i >= text.length) {
          clearInterval(interval);
          if (!doneRef.current) {
            doneRef.current = true;
            onCompleteRef.current?.();
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
    // Solo dependemos del texto y velocidad, NO de onComplete
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <Tag className={className}>
      {displayed}
      {cursor && (
        <span
          className={`inline-block w-[2px] h-[1em] ml-0.5 align-middle bg-accent transition-opacity ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </Tag>
  );
}
