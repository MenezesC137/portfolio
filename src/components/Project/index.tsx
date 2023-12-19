import React from "react";

//next
import Image, { StaticImageData } from "next/image";

interface IProject {
  id: number;
  title: string;
  image: StaticImageData;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
}

export default function Project({ id, title, image, setIsOpen }: IProject) {
  return (
    <button
      onClick={() => setIsOpen(id)}
      className="flex w-80 h-52 rounded-[4px] relative overflow-auto"
    >
      <section className="flex w-full h-full items-center justify-center absolute bg-black-main/50 group hover:hidden transition-all duration-300">
        <p className="font-bold">{title}</p>
      </section>
      <Image
        alt="project"
        src={image}
        className="object-fill hover:scale-110 transition-all duration-300"
      />
      <div className="flex w-full h-1 bg-red-dark absolute bottom-0 rounded-b-[4px]" />
    </button>
  );
}
