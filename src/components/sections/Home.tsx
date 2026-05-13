import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'

const stats = [
  { number: '5+', label: 'Projects' },
  { number: '6+', label: 'Technologies Mastered' },
]

export default function Home() {
  return (
    <section id="home">
      <SectionBadge icon="★" label="Welcome" />
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
      >
Hi, I'm <span className="text-gray-400">Abdurrahman</span><br />
         <span className="text-purple-400">Hakim</span> <span className="text-gray-400">Makarim</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mb-8 md:mb-12"
      >
Computer Science student passionate about web development,
         AI and computer vision. Experienced in building full-stack web apps
         with modern technologies and WordPress-based solutions.
      </motion. p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex gap-6 md:gap-12"
      >
        {stats.map(({ number, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">{number}</div>
            <div className="text-gray-500 text-xs md:text-sm mt-1">{label}</div>
          </motion.div>
        ))}
      </motion. div>
    </section>
  )
}