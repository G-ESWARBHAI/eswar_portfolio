import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { 
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:your@email.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 border-t border-golden-green/10">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-golden-green via-teal-gold via-gold to-transparent opacity-40 shadow-neon-golden-green"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-golden-green/90 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-golden-green/70 text-xs mt-1">
              Built with React, Vite & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass border border-golden-green/30 hover:border-gold/50 hover:bg-golden-green/10 transition-all hover:shadow-neon-golden-green"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-golden-green hover:text-gold transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-lg glass border border-golden-green/30 hover:border-gold/50 hover:bg-golden-green/10 transition-all hover:shadow-neon-golden-green"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-golden-green hover:text-gold transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

