"use client";
import React from "react";

export default function Header() {
  const itemsHeader = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Skills", href: "#skills" },
    // { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "About", href: "#about" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <section className="flex flex-row items-center sm:justify-center md:justify-between font-black fixed w-screen bg-gradient-to-tr from-black-main to-gray-main sm:px-4 md:px-40 z-50">
      <a href="#home" className="text-4xl text-red-dark py-4">
        DEDEV
      </a>
      <div className="md:block sm:hidden">
        <ul className="flex flex-row gap-10">
          {itemsHeader.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className=" text-white-main hover:text-red-dark transition duration-500 ease-in-out cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
