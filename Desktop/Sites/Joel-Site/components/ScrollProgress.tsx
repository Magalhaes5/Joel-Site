"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-background/20">
      <div
        className="h-full bg-gradient-to-r from-gold via-goldLight to-gold transition-all duration-150 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
