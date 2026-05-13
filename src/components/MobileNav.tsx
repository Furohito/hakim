import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Instagram, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Furohito', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:abdurrahman@email.com', label: 'Email' },
]

interface MobileNavProps {
  activeSection: string
}

export default function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
             <img
               src="https://media.licdn.com/dms/image/v2/D5603AQFcyc2qj_F44w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718236782195?e=1780531200&v=beta&t=KksSrHz4q4WCMf7Q9EZx91otKet_dbXlQ2i6-utkSnE"
               alt="Profile"
               className="w-10 h-10 rounded-xl object-cover border-2 border-purple-500/50"
             />
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">Abdurrahman</span>
              <span className="text-xs text-gray-400">Informatic Student</span>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-lg pt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center h-full gap-6 -mt-20"
            >
              {/* Profile */}
<img
                 src="https://media.licdn.com/dms/image/v2/D5603AQFcyc2qj_F44w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718236782195?e=1780531200&v=beta&t=KksSrHz4q4WCMf7Q9EZx91otKet_dbXlQ2i6-utkSnE"
                 alt="Profile"
                 className="w-24 h-24 rounded-full object-cover border-2 border-purple-500/50"
               />
              <h2 className="text-xl font-semibold">Abdurrahman Hakim M.</h2>
              
              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-4 mt-4">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-lg font-medium transition-colors ${
                      activeSection === id ?  'text-purple-400' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              {/* Social */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5">
        <div className="flex justify-around py-2">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                activeSection === id ? 'text-purple-400' : 'text-gray-500'
              }`}
            >
              <div className={`w-1. 5 h-1.5 rounded-full ${activeSection === id ? 'bg-purple-400' : 'bg-transparent'}`} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}