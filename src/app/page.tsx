import React from "react";

// Components
import Header from "../components/Header";
import HomeSection from "@/components/HomeSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectsSection";

export default function MainPage() {
  return (
    <main className="flex min-h-screen bg-[#101112] ">
      <Header />
      <section className="flex flex-col w-full">
        <HomeSection />
        <ProjectSection />
        <AboutMeSection />
        <ContactSection />
      </section>
    </main>
  );
}
