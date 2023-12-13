import React from "react";

//next
import Image from "next/image";

import instagram from "@/assets/instagram.png";
export default function Project() {
  return (
    <button className="flex w-80 h-52 rounded-[4px] relative overflow-auto">
      <section className="flex w-full h-full items-center justify-center absolute bg-black-main/50 group hover:hidden transition-all duration-300">
        <p className="font-bold">Clone Instagram</p>
      </section>
      <Image
        alt="project"
        src={instagram}
        className="object-fill hover:scale-110 transition-all duration-300"
      />
      <div className="flex w-full h-1 bg-red-dark absolute bottom-0 rounded-b-[4px]" />
    </button>
  );
}
