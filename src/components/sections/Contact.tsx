import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import { Button } from '../ui/button.tsx'
import { Mail, Phone} from 'lucide-react'
export default function Contact() {
  return (
    <section id="contact">
      <SectionBadge icon="✉" label="Contact" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10"
      >
        Have a question or want to collaborate? Feel free to reach out via email or WhatsApp.
      </motion.p>
      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 md:gap-4"
      >
        <Button
          variant="outline"
          asChild
          size="sm"
          className="border-white/10 hover:bg-white/5 hover:border-purple-500/50 text-xs md:text-sm h-9 md:h-10"
        >
          <a href="https://wa.me/6281281904329" target="_blank" rel="noopener noreferrer">
            <Phone className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
            WhatsApp
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          size="sm"
          className="border-white/10 hover:bg-white/5 hover:border-purple-500/50 text-xs md:text-sm h-9 md:h-10"
        >
          <a href="mailto:abdrhakimmkrm25@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
            Email
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          size="sm"
          className="border-white/10 hover:bg-white/5 hover:border-purple-500/50 text-xs md:text-sm h-9 md:h-10"
        >
        </Button>
      </motion.div>
    </section>
  )
}