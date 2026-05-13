import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string
  progress: number
  index: number
}

export default function SkillBar({ name, progress, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-1. 5 md:space-y-2"
    >
      <div className="flex justify-between text-xs md:text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{progress}%</span>
      </div>
      <div className="h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  )
}