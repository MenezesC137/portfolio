import React from "react";

// Components
import Header from "../components/Header";
import HomeSection from "@/components/HomeSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectsSection";

export default function MainPage() {
  return (
    <main className="flex h-fit w-full bg-[#101112]">
      <Header />
      <section className="flex flex-col h-full w-full items-center justify-center overflow-scroll">
        <HomeSection />
        <ProjectSection />
        <AboutMeSection />
        <ContactSection />
      </section>
    </main>
  );
}
