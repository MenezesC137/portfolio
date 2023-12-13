import React from "react";

// Components
import Header from "../components/Header";
import HomeSection from "@/pages/HomeSection";
import SkillsSection from "@/pages/SkillsSection";
import AboutMeSection from "@/pages/AboutMeSection";
import ContactSection from "@/pages/ContactSection";
// import ProjectSection from '@/pages/ProjectsSection'

export default function MainPage() {
  return (
    <main className="bg-black-main flex h-fit w-fit">
      <Header />
      <section className="flex flex-col h-full items-center justify-center overflow-scroll pt-16">
        <HomeSection />
        <SkillsSection />
        {/* <ProjectSection /> */}
        <AboutMeSection />
        <ContactSection />
      </section>
    </main>
  );
}
