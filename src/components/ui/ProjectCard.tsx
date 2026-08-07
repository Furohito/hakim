import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  features?: string[]
  index: number
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  features = [],
  index
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#16161f] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500"
    >
      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {features.length > 0 && (
          <>
            <motion.button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200 transition-colors mt-1"
              aria-expanded={expanded}
            >
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
              {expanded ? 'Hide details' : 'Show details'}
            </motion.button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-gray-400">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}

        <div className="flex gap-2 md:gap-3 mt-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              <Github size={14} />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-300 transition-colors"
            >
              <ExternalLink size={14} />
              <span>Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}