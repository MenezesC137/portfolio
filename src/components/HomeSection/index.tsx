"use client";
import React from "react";

// Next
import Image from "next/image";

// Assets
import headerPhoto from "../../assets/headerPhoto.png";

export default function HomePage() {
  return (
    <section id="home" className="flex h-[86vh] w-full items-center md:px-40">
      <div className="flex flex-col w-full h-full sm:pr-0 md:pr-20">
        <Image
          className="object-cover w-[1000px] h-[1000px]"
          src={headerPhoto}
          alt="hero"
          width={1000}
          height={1000}
        />
      </div>
      <article className="flex flex-col px-4 w-full h-full justify-center text-white-main gap-4 ">
        <p className="sm:text-xl md:text-2xl font-bold !text-red-dark">
          Hi I'm Carlos!
        </p>
        <p className="sm:text-4xl md:text-5xl font-semibold">
          Fullstack developer
        </p>
        <p className="sm:text-xs md:text-sm">
          I'm a full stack developer with experience in design and main focus on
          the front-end. My passion for design allows me to create attractive
          and functional interfaces. On the front-end, I master HTML, CSS,
          JavaScript and popular frameworks like React. I am collaborative,
          adaptable and committed to creating high-quality web products that
          combine functionality and aesthetics.
        </p>
        <a
          href="#about"
          className="bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[2px] px-4 py-2 w-fit hover:from-red-dark hover:to-red-main transition-all duration-300 ease-in-out"
        >
          About me
        </a>
      </article>
    </section>
  );
}
