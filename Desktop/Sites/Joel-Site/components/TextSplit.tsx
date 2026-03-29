"use client";

import { useEffect, useRef, useState } from "react";

interface TextSplitProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextSplit({ text, className = "", delay = 0 }: TextSplitProps) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(" ");

  return (
    <span ref={textRef} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                  (wordIndex * 0.05 + charIndex * 0.03) + (delay / 1000)
                }s`,
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
