import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import eswarProf from '../assets/eswar_prof.png'
import Tilt from 'react-parallax-tilt'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      // Use Lenis if available, otherwise fallback to native scroll
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const ProfileCard = () => (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto"
    >
      <div className="relative w-full aspect-square">
        {/* Glowing Orb Behind */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-golden-green via-teal-gold to-gold rounded-full blur-3xl opacity-30 shadow-glow-holographic"
        />

        {/* Main Profile Image */}
        <div className="relative z-10 w-full h-full rounded-full border-4 border-golden-green/30 p-2 glass-holographic shadow-neon-holographic overflow-hidden">
          <div className="w-full h-full rounded-full overflow-hidden bg-bg-darker/50 aspect-square flex items-center justify-center">
            <img
              src={eswarProf}
              alt="Full Stack Developer"
              className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-6 -right-2 md:top-10 md:-right-8 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-golden-green to-gold rounded-xl glass-gold border border-gold/40 flex items-center justify-center shadow-neon-gold z-20"
        >
          <span className="text-xl md:text-3xl">💻</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-6 -left-2 md:bottom-10 md:-left-8 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-teal-gold to-gold rounded-xl glass border border-golden-green/40 flex items-center justify-center shadow-neon-golden-green z-20"
        >
          <span className="text-lg md:text-2xl">⚡</span>
        </motion.div>
      </div>
    </Tilt>
  )

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-golden-green/25 rounded-full blur-3xl shadow-glow-golden-green"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-teal-gold/25 rounded-full blur-3xl shadow-glow-golden-green"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 bg-gold/20 rounded-full blur-3xl shadow-glow-intense"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-4 md:mb-6"
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full glass-gold text-gold text-xs md:text-sm font-medium mb-2 md:mb-4 shadow-neon-gold">
                👋 Welcome to My Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">Developer</span>
              <br />
              <span className="text-gradient-gold">Full Stack Engineer</span>
            </motion.h1>

            {/* Mobile Profile Image (Visible only on mobile/tablet) */}
            <motion.div
              variants={itemVariants}
              className="block lg:hidden mb-8 flex justify-center"
            >
              <ProfileCard />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-golden-green/90 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
            >
              I craft beautiful, functional, and scalable web applications
              using modern technologies. Passionate about creating exceptional
              digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-golden-green via-teal-gold to-gold text-white font-semibold hover:shadow-neon-holographic transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <Mail size={18} className="group-hover:rotate-12 transition-transform md:w-5 md:h-5" />
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl glass border border-golden-green/50 text-white font-semibold hover:bg-golden-green/10 hover:border-gold hover:shadow-neon-golden-green transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform md:w-5 md:h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '3+', label: 'Years' },
                { number: '100%', label: 'Dedicated' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-golden-green/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Profile Image (Hidden on mobile) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-end"
          >
            <ProfileCard />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 md:p-3 rounded-full glass border border-golden-green/50 hover:bg-golden-green/10 hover:border-gold transition-colors hover:shadow-neon-golden-green"
          >
            <ArrowDown size={20} className="text-golden-green hover:text-gold transition-colors md:w-6 md:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

