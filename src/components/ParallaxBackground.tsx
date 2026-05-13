import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const y3 = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion. div
        style={{ y: y1 }}
        className="absolute -top-[150px] -right-[100px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[100px] md:blur-[120px] opacity-40"
        animate={{
          scale: [1, 1.05, 0.95, 1],
          x: [0, 40, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-500/35 to-transparent rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[15%] md:right-[25%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[120px] opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-pink-400/25 to-transparent rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[40%] left-[10%] md:left-[30%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full blur-[100px] md:blur-[120px] opacity-25"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-violet-600/20 to-transparent rounded-full" />
      </motion. div>
    </div>
  )
}