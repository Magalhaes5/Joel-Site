"use client";

import { useRef, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Magnetic effect - pull button towards cursor
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 50;

    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      button.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
