"use client";

import React from "react";

// Components
import Project from "@/components/Project";

// Mocks
import { ProjectsMock } from "@/mocks/ProjectsMock";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="flex h-fit w-full flex-col items-center justify-center gap-10 px-5 py-16 md:px-16 lg:px-24"
    >
      <div className="flex w-full items-center gap-5">
        <h2
          id="projects-title"
          className="text-sm font-bold uppercase tracking-[0.3em] text-red-dark sm:text-base"
        >
          Projects
        </h2>
        <div className="border-b sm:w-40" />
      </div>
      <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        {ProjectsMock.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
