import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
      logo: '💼',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, USA',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Optimized database queries improving performance by 40%',
        'Built RESTful APIs and integrated third-party services',
        'Participated in agile development processes',
      ],
      logo: '🚀',
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'San Francisco, USA',
      period: '2019 - 2020',
      description: [
        'Built responsive web applications using React and Node.js',
        'Collaborated with designers to implement UI/UX designs',
        'Fixed bugs and improved existing codebase',
        'Learned best practices and modern development workflows',
      ],
      logo: '⭐',
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 relative"
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
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium mb-4 shadow-neon-gold"
            >
              Career Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Work </span>
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden-green via-teal-gold to-gold mx-auto rounded-full shadow-neon-golden-green"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-golden-green via-teal-gold to-transparent opacity-30"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="w-16 h-16 rounded-full glass-gold border-4 border-bg-dark flex items-center justify-center shadow-neon-gold"
                    >
                      <span className="text-2xl">{exp.logo}</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-golden-green to-gold opacity-50 blur-xl"
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex-1 glass rounded-2xl p-6 border border-golden-green/30 hover:border-gold/50 transition-all shadow-neon-golden-green"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-golden-green/90 text-sm mb-2">
                          <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gold text-sm font-medium">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-golden-green/90 text-sm flex items-start gap-2"
                        >
                          <span className="text-gradient-gold mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

