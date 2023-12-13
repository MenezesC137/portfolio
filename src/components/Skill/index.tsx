import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IconType } from "react-icons";

interface SkillProps {
  link: string;
  Icon: IconType;
  title: string;
  description: string;
}

export default function Skill({ link, Icon, title, description }: SkillProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col sm:w-48 sm:h-52 md:w-56 md:h-60 bg-black-light rounded-[4px] p-5 justify-between bg-gradient-to-tr hover:from-red-dark hover:to-red-main group hover:cursor-pointer"
    >
      <Icon size={40} className="text-red-dark group-hover:text-white-main" />
      <h1 className="font-bold text-xl">{title}</h1>
      <h2 className="text-xs">{description}</h2>
      <p className="text-sm group-hover:text-white-main text-red-dark flex items-center gap-2">
        Learn More <AiOutlineArrowRight />
      </p>
    </a>
  );
}
