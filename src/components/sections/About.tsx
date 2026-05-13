import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import SkillBar from '../ui/SkillBar'

const skills = [
  { name: 'WordPress / Elementor', progress: 80 },
  { name: 'HTML / CSS', progress: 80 },
  { name: 'PHP / Laravel', progress: 75 },
  { name: 'JavaScript / React', progress: 70 },
  { name: 'Python / Computer Vision', progress: 65 },
  { name: 'SQL / Database', progress: 65 },
  { name: 'AI / Machine Learning', progress: 55 },
]

export default function About() {
  return (
    <section id="about">
      <SectionBadge icon="◈" label="About Me" />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-4 text-gray-400 text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-3xl"
      >
<p>
           I am Abdurrahman Hakim Makarim, a Computer Science student currently focused on
           learning web development, AI, and computer vision. Experienced in building full-stack
           web applications with modern technologies and WordPress-based solutions.
         </p>
         <p>
           I am currently working on various academic and personal projects to sharpen my
           coding skills. My interests include web development (frontend & backend),
           computer vision, and artificial intelligence.
         </p>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
      >
        Tech Stack
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-5 max-w-3xl">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </section>
  )
}