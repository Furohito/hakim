import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import profilePhoto from '../foto/Hakim.png'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Furohito', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdurrahman-hakim-makarim', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/hakim__makarim', label: 'Instagram' },
  { icon: Mail, href: 'mailto:abdrhakimmkrm25@gmail.com', label: 'Email' },
]

interface MobileNavProps {
  activeSection: string
}

export default function MobileNav({ activeSection }: MobileNavProps) {
  return (
    <header className="fixed inset-x-3 top-3 z-50 glass rounded-2xl shadow-xl shadow-black/20 sm:inset-x-6">
      <div className="flex items-center justify-between gap-2 px-3 pt-3 sm:px-4">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Back to home">
          <img src={profilePhoto} alt="Abdurrahman Hakim Makarim" className="h-10 w-10 shrink-0 rounded-xl object-cover object-top border border-white/15" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight">Abdurrahman</span>
            <span className="block text-xs text-gray-400">Informatics Student</span>
          </span>
        </a>
        <div className="flex shrink-0 items-center">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400">
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <nav aria-label="Main navigation" className="flex items-center gap-1 overflow-x-auto px-2 pb-2 pt-2 sm:px-3">
        {navItems.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} className={`flex-1 whitespace-nowrap rounded-lg px-2 py-2 text-center text-xs font-medium transition-colors sm:text-sm ${activeSection === id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
