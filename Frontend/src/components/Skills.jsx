import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code, Database, Smartphone, Cloud, ChevronLeft, ChevronRight } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  // Real technology logos from CDN
  const getTechLogo = (name) => {
    // const logos = {
    //   'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    //   'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    //   'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    //   'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    //   'Tailwind CSS': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    //   'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    //   'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    //   'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    //   'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    //   'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    //   'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    //   'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    //   'iOS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    //   'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    //   'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    //   'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    //   'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    //   'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    //   'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    //   'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    //   'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    //   'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    //   'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    //   'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    // }
    const logos = {
      // Frontend
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Tailwind CSS': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',

      // Backend
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',

      // Mobile & Realtime
      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Socket.io': 'https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',

      // DevOps & Security
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      'JWT': 'https://jwt.io/img/pic_logo.svg',
      'OAuth 2.0': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg',
      'PM2': 'https://cdn.worldvectorlogo.com/logos/pm2.svg',
    }
    const skillCategories = [
      {
        title: 'Frontend',
        icon: Code,
        gradient: 'from-golden-green via-teal-gold to-gold',
        bgGradient: 'from-golden-green/20 via-teal-gold/20 to-gold/20',
        skills: [
          { name: 'React', level: 90 },
          { name: 'JavaScript', level: 92 },
          { name: 'TypeScript', level: 80 },
          { name: 'Tailwind CSS', level: 90 },
          { name: 'Bootstrap', level: 85 },
        ],
      },
      {
        title: 'Backend',
        icon: Database,
        gradient: 'from-teal-gold via-gold to-golden-green',
        bgGradient: 'from-teal-gold/20 via-gold/20 to-golden-green/20',
        skills: [
          { name: 'Node.js', level: 92 },
          { name: 'Express', level: 90 },
          { name: 'MongoDB', level: 88 },
          { name: 'PostgreSQL', level: 80 },
          { name: 'Redis', level: 85 },
        ],
      },
      {
        title: 'Mobile & Realtime',
        icon: Smartphone,
        gradient: 'from-golden-green via-gold to-holographic-green',
        bgGradient: 'from-golden-green/20 via-gold/20 to-holographic-green/20',
        skills: [
          { name: 'React Native', level: 88 },
          { name: 'Socket.io', level: 82 },
          { name: 'Firebase', level: 80 },
        ],
      },
      {
        title: 'DevOps & Security',
        icon: Cloud,
        gradient: 'from-gold via-golden-green to-teal-gold',
        bgGradient: 'from-gold/20 via-golden-green/20 to-teal-gold/20',
        skills: [
          { name: 'JWT', level: 90 },
          { name: 'OAuth 2.0', level: 85 },
          { name: 'Docker', level: 80 },
          { name: 'Nginx', level: 85 },
          { name: 'PM2', level: 88 },
        ],
      },
    ]
    return logos[name] || null
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      gradient: 'from-golden-green via-teal-gold to-gold',
      bgGradient: 'from-golden-green/20 via-teal-gold/20 to-gold/20',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      gradient: 'from-teal-gold via-gold to-golden-green',
      bgGradient: 'from-teal-gold/20 via-gold/20 to-golden-green/20',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 85 },
      ],
    },
    {
      title: 'Mobile & Realtime',
      icon: Smartphone,
      gradient: 'from-golden-green via-gold to-holographic-green',
      bgGradient: 'from-golden-green/20 via-gold/20 to-holographic-green/20',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Socket.io', level: 82 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      title: 'DevOps & Security',
      icon: Cloud,
      gradient: 'from-gold via-golden-green to-teal-gold',
      bgGradient: 'from-gold/20 via-golden-green/20 to-teal-gold/20',
      skills: [
        { name: 'JWT', level: 90 },
        { name: 'OAuth 2.0', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Nginx', level: 85 },
        { name: 'PM2', level: 88 },
      ],
    },
  ]

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % skillCategories.length)
  }

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || !isInView) return

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length)
    }, 4000) // Change category every 4 seconds

    return () => clearInterval(interval)
  }, [isPaused, isInView, skillCategories.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section
      id="skills"
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
              Skills & Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Technologies I </span>
              <span className="text-gradient">Work With</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden-green via-teal-gold to-gold mx-auto rounded-full shadow-neon-golden-green"></div>
          </motion.div>

          {/* Category Selector Pills */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index)
                    setIsPaused(true)
                    setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 ${activeCategory === index
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-neon-holographic`
                    : 'glass text-golden-green hover:text-gold border border-golden-green/30 hover:border-gold/50'
                    }`}
                >
                  <IconComponent size={20} />
                  {category.title}
                </motion.button>
              )
            })}
          </div>

          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevCategory()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full glass-gold border border-gold/40 hover:border-gold/60 transition-all shadow-neon-gold hover:scale-110"
              aria-label="Previous category"
            >
              <ChevronLeft size={24} className="text-gold" />
            </button>
            <button
              onClick={() => {
                nextCategory()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full glass-gold border border-gold/40 hover:border-gold/60 transition-all shadow-neon-gold hover:scale-110"
              aria-label="Next category"
            >
              <ChevronRight size={24} className="text-gold" />
            </button>

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={activeCategory}>
                {skillCategories.map((category, categoryIndex) => {
                  if (categoryIndex !== activeCategory) return null
                  const IconComponent = category.icon

                  return (
                    <motion.div
                      key={categoryIndex}
                      custom={activeCategory}
                      variants={carouselVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 200, damping: 25, mass: 0.8 },
                        opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      }}
                      className={`relative glass-holographic rounded-3xl p-8 md:p-12 border border-golden-green/40 shadow-neon-holographic overflow-hidden`}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50`}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Floating Particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gold rounded-full opacity-30"
                          initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                          }}
                          animate={{
                            y: [0, -40, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}

                      {/* Category Header */}
                      <div className="relative z-10 mb-10">
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`p-5 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-neon-gold`}
                          >
                            <IconComponent size={32} className="text-white" />
                          </motion.div>
                          <div>
                            <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                              {category.title}
                            </h3>
                            <div className={`h-1.5 w-32 bg-gradient-to-r ${category.gradient} rounded-full shadow-neon-golden-green`} />
                          </div>
                        </div>
                      </div>

                      {/* Skills Grid */}
                      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {category.skills.map((skill, skillIndex) => {
                          const logoUrl = getTechLogo(skill.name)
                          return (
                            <motion.div
                              key={skillIndex}
                              onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                              onMouseLeave={() => setHoveredSkill(null)}
                              whileHover={{ scale: 1.1, y: -8 }}
                              initial={{ opacity: 0, y: 30 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 30 }
                              }
                              transition={{
                                delay: skillIndex * 0.1,
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100,
                              }}
                              className="relative group/item"
                            >
                              {/* Skill Card */}
                              <div className={`relative glass rounded-2xl p-6 border border-golden-green/30 hover:border-gold/60 transition-all shadow-neon-golden-green overflow-hidden h-full flex flex-col items-center text-center`}>
                                {/* Hover Gradient Overlay */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}
                                />

                                {/* Logo */}
                                <div className="relative z-10 mb-4">
                                  {logoUrl ? (
                                    <motion.div
                                      animate={{
                                        scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1.3 : 1,
                                        rotate: hoveredSkill === `${categoryIndex}-${skillIndex}` ? [0, -15, 15, -15, 0] : 0,
                                      }}
                                      transition={{ duration: 0.6 }}
                                      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-golden-green/20 group-hover/item:border-gold/40 transition-all mb-3"
                                    >
                                      <img
                                        src={logoUrl}
                                        alt={skill.name}
                                        className="w-16 h-16 object-contain mx-auto"
                                        style={{
                                          filter: hoveredSkill === `${categoryIndex}-${skillIndex}`
                                            ? 'drop-shadow(0 0 15px rgba(184, 233, 148, 0.9)) brightness(1.3)'
                                            : 'brightness(1)'
                                        }}
                                        onError={(e) => {
                                          e.target.style.display = 'none'
                                        }}
                                      />
                                    </motion.div>
                                  ) : (
                                    <motion.div
                                      animate={{
                                        scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1.2 : 1,
                                      }}
                                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-golden-green to-teal-gold flex items-center justify-center mb-3 mx-auto"
                                    >
                                      <Code size={32} className="text-white" />
                                    </motion.div>
                                  )}
                                </div>

                                {/* Skill Name */}
                                <h4 className="text-white font-bold text-lg mb-3 relative z-10">
                                  {skill.name}
                                </h4>

                                {/* Progress Bar */}
                                <div className="w-full relative z-10">
                                  <div className="relative h-3 bg-bg-deep rounded-full overflow-hidden mb-2">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={
                                        isInView
                                          ? { width: `${skill.level}%` }
                                          : { width: 0 }
                                      }
                                      transition={{
                                        duration: 1.5,
                                        delay: skillIndex * 0.1 + 0.3,
                                        ease: 'easeOut',
                                      }}
                                      className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-neon-golden-green`}
                                    />
                                  </div>
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={
                                      isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0 }
                                    }
                                    transition={{
                                      delay: skillIndex * 0.1 + 0.6,
                                      type: 'spring',
                                      stiffness: 200,
                                    }}
                                    className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent block`}
                                  >
                                    {skill.level}%
                                  </motion.span>
                                </div>

                                {/* Glow Effect on Hover */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/item:opacity-15 blur-2xl transition-opacity duration-300`}
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Decorative Corner Elements */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-golden-green/20 to-transparent rounded-tr-full opacity-50"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        }}
                      />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index)
                    setIsPaused(true)
                    setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${activeCategory === index
                    ? 'w-8 bg-gradient-to-r from-golden-green via-teal-gold to-gold shadow-neon-golden-green'
                    : 'w-2 bg-golden-green/30 hover:bg-golden-green/50'
                    }`}
                  aria-label={`Go to ${skillCategories[index].title}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
