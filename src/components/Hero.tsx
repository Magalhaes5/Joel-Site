"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { useI18n } from "@/components/LanguageProvider";

export default function Hero() {
  const { t, lang } = useI18n();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    const onEnded = () => setIsPaused(true);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    const tryPlay = async () => {
      try {
        await v.play();
        setIsPaused(v.paused);
      } catch {
        setIsPaused(true);
      }
    };
    tryPlay();

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPaused(false);
      } catch {}
    } else {
      v.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className={styles.hero} aria-label="City drone video">
      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        />
        <div className={styles.scrim} />
      </div>

      <div className={styles.centerContent}>
        <h1 className={styles.heroTitle}>{t("home_title")}</h1>
        <p className={styles.heroSubtitle}>{t("home_subtitle")}</p>

        <div className={styles.ctas}>
          <a
            href={`/#certificate?lang=${lang}`}
            className={`${styles.button} ${styles.primary}`}
          >
            {t("cta_certificate")}
          </a>
          <a
            href={`/contact?lang=${lang}`}
            className={`${styles.button} ${styles.secondary}`}
          >
            {t("cta_contact")}
          </a>
        </div>

        {/* Play/Pause control */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPaused ? "Play video" : "Pause video"}
          title={isPaused ? "Play" : "Pause"}
          className={styles.ppBtn}
        >
          {isPaused ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l12-7-12-7z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1.2" />
              <rect x="14" y="5" width="4" height="14" rx="1.2" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
