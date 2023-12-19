"use client";
import React, { useState } from "react";

// components
import Project from "@/components/Project";
import Modal from "@/components/Modal";

// mocks
import { ProjectsMock } from "@/mocks/ProjectsMock";

export default function ProjectSection() {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <section
        id="projects"
        className="flex flex-col sm:h-fit md:h-screen w-screen pt-20 sm:px-4 md:px-40 gap-8"
      >
        <p className="text-red-dark font-black text-4xl">Projects</p>
        <div className="flex flex-wrap gap-8 justify-center w-full h-full overflow-auto">
          {ProjectsMock.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              id={project.id}
              title={project.title}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </section>
      <Modal isOpen={isOpen} close={() => setIsOpen(0)} />
    </>
  );
}
