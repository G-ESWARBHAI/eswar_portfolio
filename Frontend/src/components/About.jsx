import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Coffee, Rocket, Heart } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import aboutImg from '../assets/about_img.png'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }


  const interests = [
    { icon: Code, title: 'Backend Architecture', description: 'Scalable API & system design' },
    { icon: Rocket, title: 'Production Deployment', description: 'VPS, Nginx, PM2, SSL' },
    { icon: Coffee, title: 'Performance Optimization', description: 'Redis caching & DB tuning' },
    { icon: Heart, title: 'Mobile Development', description: 'React Native CLI apps' },
  ]


  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium mb-4 shadow-neon-gold"
            >
              About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Know Who </span>
              <span className="text-gradient">I Am</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden-green via-teal-gold to-gold mx-auto rounded-full shadow-neon-golden-green"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image/Bio Card */}
            <motion.div variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                className="relative"
              >
                <div className="glass-holographic rounded-3xl p-6 md:p-8 border border-golden-green/40 shadow-neon-holographic">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-golden-green/30 via-teal-gold/30 to-gold/20 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={aboutImg}
                      alt="Profile"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gradient">Full Stack Developer</h3>
                    <p className="text-sm md:text-base text-golden-green/90 leading-relaxed">
                      I'm a Full Stack Developer with a strong focus on backend systems
                      and scalable architecture. I specialize in building secure APIs,
                      optimizing databases, and deploying production-ready applications.

                      Currently working at Yes Lorvens Solutions, I design and maintain
                      real-world web and mobile applications used in production.
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-golden-green/30">
                <h3 className="text-xl font-bold text-gradient mb-4">My Journey</h3>
                <p className="text-sm md:text-base text-golden-green/80 leading-relaxed mb-4">
                  I completed my B.Tech in Computer Science from RGUKT Srikakulam
                  with a strong foundation in data structures, system design,
                  and backend engineering.

                  My professional journey started as a Full Stack Developer at
                  Yes Lorvens Solutions, where I build scalable backend systems
                  using Node.js, Express.js, MongoDB, and Redis.

                  I have developed secure authentication systems, integrated payment
                  gateways, implemented caching strategies, and deployed applications
                  on VPS infrastructure using Nginx and PM2.
                </p>
                <p className="text-sm md:text-base text-golden-green/80 leading-relaxed">
                  My focus is always on performance, clean architecture,
                  and writing maintainable production-level code.
                </p>
              </div>

              {/* Interests Grid */}
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-4 border border-golden-green/30 hover:border-gold/50 hover:shadow-neon-golden-green transition-all cursor-pointer"
                  >
                    <interest.icon
                      size={28}
                      className="text-gradient mb-2 md:w-8 md:h-8"
                    />
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">
                      {interest.title}
                    </h4>
                    <p className="text-xs md:text-sm text-golden-green/80">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

