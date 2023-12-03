"use client"
import React from 'react'

import Project from '@/components/Project'

export default function ProjectSection() {
  return (
    <section id='projects' className='flex flex-col sm:h-fit md:h-screen w-screen pt-20 sm:px-4 md:px-40 gap-8'>
      <p className='text-red-dark font-black text-4xl'>Projects</p>
      <div className='flex flex-wrap gap-8 justify-center w-full h-full overflow-auto'>
        <Project />
        <Project />
      </div>
    </section>
  )
}
