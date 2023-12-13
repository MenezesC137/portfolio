import React from "react";

//components
import Skill from "@/components/Skill";

// Mock
import { SkillMock } from "@/mocks/SkillMock";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex sm:h-fit md:h-screen w-full relative text-white-main"
    >
      <div className="bg-gray-main h-full w-1/2 absolute z-0" />
      <section className="flex flex-col z-10 sm:px-4 md:sm:px-4 md:px-40 h-full w-full gap-8 pt-20">
        <p className="text-red-dark font-black text-4xl">Skills</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 h-full self-center sm:gap-4 md:gap-10 overflow-auto">
          {SkillMock.map((skill) => (
            <Skill
              key={skill.id}
              Icon={skill.icon}
              title={skill.title}
              description={skill.description}
              link={skill.link}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
