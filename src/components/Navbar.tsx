import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About Me' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-8 z-50 glass rounded-full p-2 xl:p-3 w-fit flex gap-1 xl:gap-2"
    >
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="relative px-4 xl:px-6 py-2. 5 xl:py-3 text-sm xl:text-[15px] font-medium rounded-full transition-colors duration-300"
        >
          {activeSection === id && (
            <motion.div
              layoutId="activeNav"
              className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
            {label}
          </span>
        </button>
      ))}
    </motion.nav>
  )
}