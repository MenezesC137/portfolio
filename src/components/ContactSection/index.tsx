"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "MenezesC137",
      link: "https://github.com/MenezesC137",
      icon: <FaGithub size={27} />,
    },
    {
      name: "LinkedIn",
      username: "Carlos Santos",
      link: "https://www.linkedin.com/in/carlos-eduardo-m-santos-8ba0b01aa/",
      icon: <FaLinkedinIn size={27} />,
    },
    {
      name: "Instagram",
      username: "@menezes.cadu",
      link: "https://www.instagram.com/menezes.cadu/",
      icon: <FaInstagram size={27} />,
    },
  ];

  const email = "menezesdevc137@gmail.com";

  return (
    <section
      id="contact"
      className="relative flex w-full flex-col overflow-hidden bg-[#101112] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(220,38,55,0.045),transparent_50%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center sm:px-4 md:px-24 py-20 ">
        <div className="flex w-full items-center md:justify-start sm:justify-center gap-5">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-dark sm:text-base">
            Contact
          </p>
          <div className="w-40 border-b border-white/40 sm:hidden md:block" />
        </div>
        <div className="mt-7 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Let`s talk.
            </h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-400 sm:text-xl">
              Have a project in mind or want to talk?
              <br className="hidden sm:block" /> Get in touch.
            </p>
            <div className="mt-8 flex sm:flex-col md:gap-6 md:flex-row md:items-center ">
              <a
                href={`mailto:${email}`}
                className="group inline-flex min-h-[60px] items-center justify-center gap-4 self-start rounded-xl bg-red-500 px-7 py-4 text-base font-medium text-white transition-colors duration-300 hover:bg-red-600 sm:text-lg"
              >
                Send an email
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${email}`}
                className="group flex min-w-0 items-center gap-4 md:pt-0 sm:pt-4"
                aria-label={`Send an email to ${email}`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:border-red-500 group-hover:text-red-500">
                  <TfiEmail size={25} />
                </span>
                <span className="break-all text-sm text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {email}
                </span>
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-9 lg:border-l lg:border-t-0 lg:py-10 lg:pl-10">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name}: ${social.username}`}
                  className="group flex min-w-0 flex-col items-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:text-red-500">
                    {social.icon}
                  </span>

                  <p className="mt-4 text-sm font-semibold text-white flex flex-col items-center">
                    {social.name}
                    <span className="break-words font-normal text-gray-400">
                      {social.username}
                    </span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="relative z-10 flex flex-col gap-3 border-t border-gray-600 px-6 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12 sm:text-sm">
        <p>
          Designed & developed by{" "}
          <span className="text-gray-300">Carlos Santos</span>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  );
}
