import React from "react";

// Components
import Header from "../components/Header";
import HomeSection from "@/components/HomeSection";
import SkillsSection from "@/components/SkillsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectsSection";

export default function MainPage() {
  return (
    <main className="bg-black-main flex h-fit w-fit">
      <Header />
      <section className="flex flex-col h-full items-center justify-center overflow-scroll pt-16">
        <HomeSection />
        <SkillsSection />
        <ProjectSection />
        <AboutMeSection />
        <ContactSection />
      </section>
    </main>
  );
}
