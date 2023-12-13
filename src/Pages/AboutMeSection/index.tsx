import React from "react";

// Mock
import Image from "next/image";

// Images
import perfil from "@/assets/perfil.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex sm:h-fit md:h-screen w-full items-center relative text-white-main"
    >
      <div className="bg-gray-main sm:h-full md:h-2/3 w-full absolute z-0" />
      <section className="flex flex-col z-10 sm:px-4 md:px-40 h-full w-full justify-center gap-8 pt-20">
        <p className="text-red-dark font-black text-4xl">About me</p>
        <div className="flex sm:flex-col sm:items-center md:flex-row w-full h-full sm:gap-10 md:gap-20 md:pb-28">
          <div>
            <section className="relative flex w-[210px] h-[270px] justify-end overflow-hidden">
              <Image
                src={perfil}
                alt="perfil"
                width={195}
                height={260}
                className="flex h-[260px] w-[195px] z-10 right-0"
              />
              <div className="h-80 w-80 rounded-full bg-red-dark absolute z-0 -bottom-16 right-7" />
            </section>
          </div>
          <aside className="flex flex-col w-full gap-10">
            <section className="flex flex-col gap-4 sm:w-full md:w-1/2">
              <p className="font-semibold text-4xl">Training</p>
              <p className="text-xs">
                I am currently in my sixth semester studying Computer
                Engineering, and my journey into programming began with online
                courses. These courses have been a valuable complement to my
                academic studies, enabling me to acquire practical skills
                essential for a future career as a developer.
              </p>
            </section>
            <section className="flex flex-col gap-4 sm:w-full md:w-1/2 sm:mb-10">
              <p className="font-semibold text-4xl">Experience</p>
              <p className="text-xs">
                Since February 2022, I've been employed at a software
                development company, during which time I've markedly enhanced my
                proficiency and expertise across various programming languages
                and frameworks.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </section>
  );
}
