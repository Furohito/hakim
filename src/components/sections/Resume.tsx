import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import { GraduationCap, Code, FolderOpen, Download, BookOpen } from 'lucide-react'

const education = [
   {
     period: '2023 - Present',
     title: 'Majoring in Informatics',
     institution: 'Universitas Pembangunan Jaya',
     description: 'Focus on programming, algorithms, and software development, AI.'
   },
   {    period: '2020 - 2023',
     title: 'High School',
     institution: 'SMAN 4 Tangerang Selatan',
     description: 'Focus on Exact Sciences, Natural Sciences.'}
 ]

const highlights = [
  { icon: GraduationCap, title: 'Informatics', subtitle: 'Bachelor Degree' },
  { icon: Code, title: 'Full-Stack Web Dev', subtitle: 'Frontend & Backend' },
  { icon: FolderOpen, title: '7+ Projects', subtitle: 'Academic & Commercial' },
]

export default function Resume() {
  return (
    <section id="resume">
      <SectionBadge icon="◇" label="Resume" />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12"
      >
        Education & Experience
      </motion.h2>

{/* Timeline */}
       <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12 mb-12 md:mb-16">
         {education.map((item, index) => (
           <motion.div
             key={item.title}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1 }}
             className="relative"
           >
             <div className="absolute -left-[29px] md:-left-[37px] w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

             <span className="text-xs md:text-sm text-purple-400 font-medium">{item.period}</span>
             <h3 className="text-lg md:text-xl font-semibold mt-1">{item.title}</h3>
             <p className="text-gray-500 text-xs md:text-sm mb-2">{item.institution}</p>
             <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
           </motion.div>
         ))}
       </div>

{/* Experience */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Experience</h3>
        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[29px] md:-left-[37px] w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

            <span className="text-xs md:text-sm text-purple-400 font-medium">May - November 2025</span>
            <h3 className="text-lg md:text-xl font-semibold mt-1">P2MW Winner — Nexsite Hub</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2">Digital Business Program</p>
            <p className="text-gray-400 text-sm md:text-base">
              Winner of the P2MW program for building a digital business through Nexsite Hub,
              creating WordPress and Elementor-based web templates for clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[29px] md:-left-[37px] w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

            <span className="text-xs md:text-sm text-purple-400 font-medium">November - December 2024</span>
            <h3 className="text-lg md:text-xl font-semibold mt-1">Lab Assistant</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2">Universitas Pembangunan Jaya</p>
            <p className="text-gray-400 text-sm md:text-base">
              Managed laboratory needs for academic teaching, including equipment,
              software setup, and ensuring room readiness for practical sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-[29px] md:-left-[37px] w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

            <span className="text-xs md:text-sm text-purple-400 font-medium"> February 2024 - Present</span>
            <h3 className="text-lg md:text-xl font-semibold mt-1">Online Islamic Teacher & Mentor</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2">Independent</p>
            <p className="text-gray-400 text-sm md:text-base">
              Teaching Islamic studies online, responsible as a mentor and organizer
              for lesson planning, student progress tracking, and class coordination.
            </p>
          </motion.div>
        </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {highlights.map(({ icon: Icon, title, subtitle }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Icon size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="font-medium text-sm md:text-base">{title}</h4>
              <p className="text-xs md:text-sm text-gray-500">{subtitle}</p>
            </div>
          </motion. div>
        ))}
      </div>

       {/* Download CV Button */}
       <div className="flex justify-center mt-10 md:mt-14">
         <a href="/cv.pdf" download className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25">
           <Download className="h-4 w-4 md:h-5 md:w-5" />
           Download CV
         </a>
       </div>
     </section>
  )
}