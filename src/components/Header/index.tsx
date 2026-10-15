"use client";
import React, { useEffect, useState } from "react";

const itemsHeader = [
  { id: "home", name: "Home", href: "#home" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "about", name: "About", href: "#about" },
  { id: "contact", name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = itemsHeader
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#101112]/95 text-white backdrop-blur-md px-24">
      <div className="mx-auto flex w-full items-center justify-center md:justify-between py-3">
        <a
          href="#home"
          aria-label="DEDEV - Home"
          className="flex items-center text-2xl font-extrabold tracking-tight sm:text-3xl"
        >
          <span className="text-white">DE</span>
          <span className="text-red-dark">DEV</span>
          <span className="ml-2 font-medium text-red-dark">/</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {itemsHeader.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/80 hover:text-red-dark"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-red-dark transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
