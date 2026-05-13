import { useState, useEffect } from 'react'
import ParallaxBackground from './components/ParallaxBackground'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'
import Home from './components/sections/Home.tsx'
import Portfolio from './components/sections/Portfolio.tsx'
import About from './components/sections/About.tsx'
import Resume from './components/sections/Resume.tsx'
import Contact from './components/sections/Contact.tsx'
import { useActiveSection } from './hooks/useActiveSection.ts'

const sections = ['home', 'portfolio', 'about', 'resume', 'contact']

export default function App() {
  const activeSection = useActiveSection(sections)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      
      {/* Desktop Sidebar */}
      {! isMobile && <Sidebar />}
      
      {/* Mobile Navigation */}
      {isMobile && <MobileNav activeSection={activeSection} />}
      
      <main className={`
        relative z-10
        ${isMobile ? 'px-4 pt-20 pb-24' : 'ml-[380px] px-8 lg:px-16 py-10'}
      `}>
        {/* Desktop Navbar */}
        {!isMobile && <Navbar activeSection={activeSection} />}
        
        <div className={`space-y-24 md:space-y-32 ${! isMobile ? 'mt-20' : 'mt-4'}`}>
          <Home />
          <Portfolio />
          <About />
          <Resume />
          <Contact />
        </div>

        <footer className="mt-24 md:mt-32 pb-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Abdurrahman Hakim Makarim</p>
        </footer>
      </main>
    </div>
  )
}