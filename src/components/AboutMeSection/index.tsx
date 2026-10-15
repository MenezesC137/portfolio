"use client";

import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#101112] text-white sm:px-2 md:px-24 border-b border-gray-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_65%,rgba(220,38,55,0.06),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col gap-10 px-6 py-24 ">
        <div className="flex w-full items-center md:justify-start sm:justify-center gap-5">
          <h2
            id="projects-title"
            className="text-sm font-bold uppercase tracking-[0.3em] text-red-dark sm:text-base"
          >
            About Me
          </h2>
          <div className="border-b sm:w-40 sm:hidden md:block" />
        </div>
        <div className="flex flex-col justify-between gap-10 xl:flex-row xl:items-center">
          <div className="max-w-[1000px]">
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
              Engineering mindset.
              <br />
              Real-world experience.
            </h2>
            <p className="mt-6 max-w-[800px] text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              I'm Carlos, a full-stack developer focused on front-end. I bring
              an engineering background and hands-on software development
              experience to building thoughtful digital products.
            </p>
          </div>

          {/* Technical interests */}
          <div className="relative hidden shrink-0 border-l border-white/25 py-3 pl-6 pr-2 xl:block">
            <span className="mb-3 block text-3xl leading-none text-red-500">
              //
            </span>

            <ul className="space-y-2 text-xs uppercase tracking-[0.18em] text-gray-400">
              <li>Development</li>
              <li>Interface Design</li>
              <li>Computer Engineering</li>
            </ul>

            <span className="mt-3 block text-3xl leading-none text-red-500">
              //
            </span>
          </div>
        </div>

        {/* Experience and education */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Experience card */}
          <article className="group relative isolate flex min-h-[320px] flex-col overflow-hidden rounded-lg border border-gray-500 bg-white/[0.015] p-7 transition-colors duration-300 hover:border-red-500/50 sm:p-9">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 bottom-[-150px] -z-10 h-[340px] w-[340px] rounded-full border border-red-500/70 shadow-[0_0_45px_rgba(220,38,55,0.12)] transition-transform duration-500 group-hover:scale-110" />

            <div className="flex items-center gap-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Experience
              </p>
              <div className="border-b sm:w-40 border-gray-600" />
            </div>

            <div className="relative mt-6 max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Software Development
              </h3>

              <p className="mt-3 text-base text-gray-400 sm:text-lg">
                Since February 2022
              </p>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                Professional experience at a software development company,
                building expertise across programming languages, frameworks, and
                the development of digital solutions.
              </p>
            </div>

            <div className="mt-auto pt-6">
              <div className="h-[3px] w-12 bg-red-500 transition-all duration-300 group-hover:w-20" />
            </div>
          </article>

          {/* Education card */}
          <article className="group relative isolate flex min-h-[320px] flex-col overflow-hidden rounded-lg border border-gray-500 bg-white/[0.015] p-7 transition-colors duration-300 hover:border-red-500/50 sm:p-9">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 bottom-[-150px] -z-10 h-[340px] w-[340px] rounded-full border border-red-500/70 shadow-[0_0_45px_rgba(220,38,55,0.12)] transition-transform duration-500 group-hover:scale-110" />

            <div className="flex items-center gap-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Education
              </p>
              <div className="border-b sm:w-40 border-gray-600" />
            </div>

            <div className="relative mt-6 max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Computer Engineering
              </h3>

              <p className="mt-3 text-base text-gray-400 sm:text-lg">
                Graduated · December 2025
              </p>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                Degree completed in December 2025, combining an engineering
                foundation with analytical thinking and practical
                problem-solving skills.
              </p>
            </div>

            <div className="mt-auto pt-6">
              <div className="h-[3px] w-12 bg-red-500 transition-all duration-300 group-hover:w-20" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
