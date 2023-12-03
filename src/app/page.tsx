import React from 'react'

// Components
import Header from '../components/Header'
import HomeSection from '@/Pages/HomeSection'
import SkillsSection from '@/Pages/SkillsSection'
import AboutMeSection from '@/Pages/AboutMeSection'
import ContactSection from '@/Pages/ContactSection'
// import ProjectSection from '@/Pages/ProjectsSection'

export default function MainPage() {
  return (
    <main className='bg-gradient-to-tr from-black to-gray-main'>
      <Header/>
      <section className='flex flex-col h-full items-center justify-center overflow-scroll pt-16'>
        <HomeSection />
        <SkillsSection />
        {/* <ProjectSection /> */}
        <AboutMeSection />
        <ContactSection />
      </section>
    </main>
  )
}
