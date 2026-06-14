import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import TypewriterText from "./TypewriterText";

interface SectionTitleProps {
  prefix?: string;
  highlight: string;
}

export default function SectionTitle({ prefix, highlight }: SectionTitleProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={ref}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 min-h-[1.3em]">
        {isVisible && (
          <>
            {prefix && (
              <TypewriterText
                text={`${prefix} `}
                speed={30}
                cursor={false}
                onComplete={() => {}}
              />
            )}
            <TypewriterText
              text={highlight}
              speed={20}
              delay={prefix ? 300 : 0}
              tag="span"
              className="text-accent"
              cursor={false}
            />
          </>
        )}
      </h2>
      {isVisible && (
        <div className="w-20 h-1 bg-accent rounded-full mb-12 animate-[fadeIn_0.5s_ease-out]" />
      )}
    </div>
  );
}
