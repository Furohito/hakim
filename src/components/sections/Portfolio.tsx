import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/portfolio.ts'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <SectionBadge icon="✦" label="Portfolio" />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
      >
        My Projects
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 mb-8 md:mb-12 max-w-2xl"
      >
        A collection of academic projects and personal experiments.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}