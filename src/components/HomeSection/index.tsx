"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import headerPhoto from "../../assets/headerPhoto.png";
import TypingEffect from "../TypingEffect";

export default function HomePage() {
  const [startLeft, setStartLeft] = useState(false);
  const [startRight, setStartRight] = useState(false);
  const [startFinal, setStartFinal] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(teste);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const handleIntroComplete = useCallback(() => {
    setStartLeft(true);
  }, []);

  const handleLeftComplete = useCallback(() => {
    setStartRight(true);
  }, []);

  const handleRightComplete = useCallback(() => {
    setStartFinal(true);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setStartLeft(true);
      setStartRight(true);
      setStartFinal(true);
    }
  }, [reduceMotion]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[700px] w-full overflow-hidden bg-[#101112] text-white md:h-[86vh] md:min-h-[600px] md:max-h-[900px]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_55%,rgba(220,38,55,0.10),transparent_40%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center px-6 pb-8 pt-28 sm:px-10 md:grid-cols-12 md:px-16 md:py-16 lg:px-24">
        <article className="relative z-20 flex flex-col items-start gap-5 md:col-span-6 lg:col-span-6">
          <div className="flex w-full items-center gap-5">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-dark sm:text-base">
              Hi, I'm Carlos
            </p>
            <span
              className="h-px w-20 bg-white/40 sm:w-36"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl xl:text-8xl">
            Full-stack
            <br />
            <span className="text-white/75">developer</span>
          </h1>
          <p className="max-w-[500px] text-lg leading-snug text-white/65 sm:text-xl lg:text-2xl">
            I build digital experiences with care for design and code quality.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 rounded-xl bg-red-dark px-6 py-4 text-base font-semibold transition duration-300 hover:-translate-y-1 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-dark motion-reduce:transform-none motion-reduce:transition-none sm:px-8"
            >
              View projects
              <span
                className="text-xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/70 px-6 py-4 text-base font-medium transition duration-300 hover:-translate-y-1 hover:border-red-dark hover:text-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-dark motion-reduce:transform-none motion-reduce:transition-none sm:px-8"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm text-white/60 sm:text-base">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-dark opacity-60 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-dark" />
            </span>
            Available for new opportunities
          </div>
        </article>
        <div
          className="pointer-events-none absolute left-[49%] top-[48%] z-20 hidden -translate-y-1/2 border-l border-white/30 pl-5 lg:block xl:left-[48%]"
          aria-hidden="true"
        >
          <TypingEffect
            words={["//"]}
            speed={180}
            cursor={false}
            className="mb-2 text-3xl font-light text-red-dark"
            start
            onComplete={handleIntroComplete}
            instant={reduceMotion}
          />
          <TypingEffect
            words={["DEVELOP", "IDEAS", "INTO", "SOLUTIONS"]}
            speed={100}
            pauseBetweenWords={250}
            start={startLeft}
            onComplete={handleLeftComplete}
            instant={reduceMotion}
          />
        </div>
        <div className="pointer-events-none relative mt-8 flex h-[280px] items-end justify-center sm:h-[360px] md:absolute md:bottom-0 md:right-[5%] md:mt-0 md:h-[92%] md:w-[53%] lg:right-[7%] lg:w-[50%]">
          <div
            className="absolute bottom-[12%] left-[20%] h-[65%] w-[65%] rounded-full bg-red-600/10 blur-[90px]"
            aria-hidden="true"
          />
          <Image
            src={headerPhoto}
            alt="Carlos, desenvolvedor full stack"
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 80vw, 55vw"
            className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,25,45,0.12)]"
          />
        </div>
        <div
          className="pointer-events-none absolute right-[4%] top-[28%] z-20 hidden xl:block"
          aria-hidden="true"
        >
          <div className="mb-4 h-20 w-px bg-white/30" />
          <TypingEffect
            words={["DEVELOP", "SOLVE", "EVOLVE"]}
            speed={120}
            pauseBetweenWords={350}
            start={startRight}
            onComplete={handleRightComplete}
            instant={reduceMotion}
          />
          <TypingEffect
            words={["//"]}
            speed={180}
            cursor={false}
            className="mb-2 text-3xl font-light text-red-dark"
            start={startFinal}
            instant={reduceMotion}
          />
          <div className="mt-4 h-32 w-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
