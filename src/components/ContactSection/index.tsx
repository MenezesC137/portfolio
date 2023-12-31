import moment from "moment";
import React from "react";

// assets
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function ContactSection() {
  const optionsContact = [
    {
      icon: <FaGithub size={50} />,
      name: "Github",
      link: "https://github.com/MenezesC137",
      nickName: "MenezesC137",
    },
    {
      icon: <FaLinkedinIn size={50} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/carlos-eduardo-m-santos-8ba0b01aa/",
      nickName: "Carlos Santos",
    },
    {
      icon: <TfiEmail size={50} />,
      name: "Email",
      link: "mailto:menezesdevc137@gmail.com",
      nickName: "menezesdevc137@gmail.com",
    },
    {
      icon: <FaInstagram size={50} />,
      name: "Instagram",
      link: "https://www.instagram.com/menezes.cadu/",
      nickName: "@menezes.cadu",
    },
    {
      icon: <FaRegFile size={50} />,
      name: "Currículo",
      link: "https://docs.google.com/document/d/1XW1TU10RXsBRfk_6i7hX3o0B98AoYngt/edit?usp=sharing&ouid=114917775033053847608&rtpof=true&sd=true",
      nickName: "Carlos Santos",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col sm:h-fit md:h-screen w-full relative text-white-main"
    >
      <div className="bg-gray-main h-full w-1/2 absolute z-0 right-0 " />
      <section className="flex flex-col z-10 sm:px-4 md:px-40 h-full w-full justify-center gap-8 pt-20">
        <p className="text-red-dark font-black text-4xl">Contact</p>
        <section className="flex sm:flex-col sm:py-4 md:flex-row gap-8 justify-between items-center h-full w-full overflow-auto">
          {optionsContact.map((option, index) => (
            <a
              target="_blank"
              href={option.link}
              key={index}
              className="flex flex-col items-center h-fit w-full group"
            >
              <div className="flex items-center justify-center bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[4px] px-4 py-2 w-[80px] h-[80px] group-hover:from-red-dark group-hover:to-red-main transition-all duration-300 ease-in-out">
                {option.icon}
              </div>
              <p className="font-bold text-lg">{option.name}</p>
              <p>{option.nickName}</p>
            </a>
          ))}
        </section>
      </section>
      <div className="flex w-full bg-black-main z-10 justify-between border-t-2 border-black-light sm:px-4 md:px-40 py-6 md:text-base sm:text-xs">
        <p>Designed by Carlos Santos</p>
        <p>© {moment().format("YYYY")} All Right Reserved</p>
      </div>
    </section>
  );
}
