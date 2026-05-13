import { motion } from 'framer-motion'

interface SectionBadgeProps {
  icon: string
  label: string
}

export default function SectionBadge({ icon, label }: SectionBadgeProps) {
  return (
    <motion. div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm text-gray-300 mb-4 md:mb-6"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </motion.div>
  )
}