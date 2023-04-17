import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
  
      <Header/>

      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact/>
      </section>

      
    </main>
  )
}
