import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Furohito', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdurrahman-hakim-makarim', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/hakim__makarim', label: 'Instagram' },
]

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 w-[300px] xl:w-[320px] glass rounded-3xl p-6 xl:p-8 z-50"
    >
      {/* Logo & Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex flex-col">
          <span className="text-lg xl:text-xl font-semibold leading-tight">Abdurrahman</span>
          <span className="text-lg xl:text-xl font-semibold leading-tight">Hakim Makarim </span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative rounded-2xl overflow-hidden mb-6 gradient-border">
<img
           src="https://media.licdn.com/dms/image/v2/D5603AQHywb6u_O2p6g/profile-displayphoto-crop_800_800/B56Z5QHsBQKkAI-/0/1779460654482?e=1787788800&v=beta&t=wj4_8CAOk8134u3JEJREDU9SnaNMAuSYH-QWPmrHkkI"
           alt="Abdurrahman Hakim Makarim"
           className="w-full h-[280px] xl:h-[320px] object-cover rounded-2xl"
         />
      </div>

      {/* Info */}
      <div className="mb-4">
        <span className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
          Status:
        </span>
        <h3 className="text-base xl:text-[17px] font-medium text-pink-300 mt-1. 5 leading-snug">
          Informatic Student
        </h3>
      </div>

      <div className="mb-5">
        <span className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
          Based in:
        </span>
        <h4 className="text-lg xl:text-xl font-normal mt-1.5 italic">
          Indonesia
        </h4>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 xl:gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 xl:w-12 xl:h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  )
}
