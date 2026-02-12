import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ArrowRight, Zap } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'EduReach – School Management System',
      description:
        'Secure MERN-based school management platform with authentication, payments, and analytics dashboard.',
      fullDescription:
        'Designed and developed a production-ready School Management System using the MERN stack. Implemented JWT-based authentication, role-based access control (RBAC), Redis caching, and Razorpay payment integration. Deployed on VPS using Nginx, PM2, and SSL for production stability.',
      image: '🏫',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Razorpay', 'Nginx'],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770898675/edu_1_cffpex.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770898710/edu_2_needb8.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770898689/edu_3_edexfm.png',
      ],
      liveUrl: 'https://edureachapp.com/',
      githubUrl: '#',
      color: 'from-golden-green to-teal-gold',
    },
    {
      id: 2,
      title: 'ScrapDig – Waste Recycling Platform',
      description:
        'React Native mobile app with real-time updates, wallet system, and secure backend APIs.',
      fullDescription:
        'Built a scalable backend with Node.js and MongoDB featuring JWT authentication and multi-role access control. Integrated Socket.io and Firebase for real-time notifications. Implemented wallet, rewards, and referral systems using Redis for optimized performance.',
      image: '♻️',
      category: 'Full Stack',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'Firebase'],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770897980/scrap_1_ybgl02.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770898002/scrap_2_ppb87d.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770898022/scrap_3_pnxf1y.png',
      ],
      liveUrl: 'https://scrapdig.in/',
      githubUrl: '#',
      color: 'from-teal-gold to-golden-green',
    },
    {
      id: 3,
      title: 'Social Media Syncing Platform',
      description:
        'Centralized content publishing system integrating third-party social media APIs.',
      fullDescription:
        'Developed a scalable backend service using Node.js and Express to integrate multiple social media REST APIs. Implemented OAuth 2.0 authentication with secure token handling and refresh mechanisms. Deployed production backend with HTTPS and Nginx on VPS.',
      image: '📡',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'OAuth 2.0', 'Passport.js', 'Nginx'],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899975/soc_l2llyu.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899975/soc_l2llyu.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899975/soc_l2llyu.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-gold to-golden-green',
    },
    {
      id: 4,
      title: 'Sasha Smiles Dental Clinic Website',
      description:
        'Responsive clinic website built with modern web standards, showcasing services, contact info & patient resources.',
      fullDescription:
        'Developed a polished, client-ready dental clinic website for Sasha Smiles in Madhapur. Built with a focus on responsive design, SEO best practices, accessible UI, and fast performance. Includes service pages, contact & appointment info, and structured layouts for patient engagement.',
      image: '🦷',
      category: 'Frontend',
      technologies: ['React', 'HTML5', 'CSS3', 'Responsive Layout', 'SEO'],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770897432/s_1_vcjdqj.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770897456/s_2_phuwya.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770897480/s_3_c9qevu.png',
      ],
      liveUrl: 'https://sashasmiles.com/',
      githubUrl: '#', // put the GitHub link if available
      color: 'from-holographic-green to-golden-green',
    },
    {
      id: 5,
      title: 'Sherley – Personal Portfolio Website',
      description:
        'A fully responsive personal portfolio showcasing projects, skills, and contact integration.',
      fullDescription:
        'Built a modern and elegant personal portfolio for Sherley with smooth navigation, responsive layout, and custom UI components. Designed with attention to detail, SEO optimized, and deployed live using Vercel.',
      image: '🌐',
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770895996/hero_sherly_eipvzw.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770896028/second_ozfxzh.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770896052/third_zentur.png',
      ],
      liveUrl: 'https://sherley-portfolio-q2sh.vercel.app/',
      githubUrl: '#', // if repo available add here
      color: 'from-teal-gold to-golden-green',
    },
    {
      id: 6,
      title: 'VeggieStore – Full Stack E-Commerce Platform',
      description:
        'Production-ready e-commerce platform with authentication, cart, admin panel, and Redis optimization.',
      fullDescription:
        'Developed a complete MERN-based e-commerce platform using React, Tailwind CSS, Node.js, MongoDB, and Redis. Implemented JWT authentication, role-based access control, cart management, order processing, and admin dashboard. Optimized performance using Redis caching and deployed live on Vercel.',
      image: '🥕',
      category: 'Full Stack',
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Redis',
        'Tailwind CSS',
        'JWT',
      ],
      images: [
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899377/veg_1_du6s0v.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899405/veg_2_dx37ni.png',
        'https://res.cloudinary.com/duxtwxtik/image/upload/v1770899423/veg_3_kcfwm9.png',
      ],
      liveUrl: 'https://veggietstore-oxc3.vercel.app/',
      githubUrl: '#', // add repo if public
      color: 'from-golden-green to-teal-gold',
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // When modal is open, lock body scroll so the position doesn't move
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedProject])

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  // Card component with minimal hover + entrance animation
  const ProjectCard = ({ project, index }) => {
    const isHero = true
    const isSelected = selectedProject?.id === project.id

    return (
      <motion.div
        layout
        onClick={() => {
          if (!isSelected) {
            setSelectedProject(project)
            setActiveImageIndex(0)
          }
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className={`relative glass-holographic overflow-hidden border border-golden-green/40 shadow-neon-holographic bg-bg-dark/60 group rounded-3xl ${isSelected ? 'col-span-1 lg:col-span-3 min-h-[600px] z-20 cursor-default' : 'col-span-1 lg:col-span-3 lg:h-[420px] cursor-pointer'
          }`}
      >
        {/* Gradient Background with very soft parallax */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`}
          layout
        />

        {!isSelected ? (
          // Compact / Hero View (Collapsed Logic)
          <div className="relative flex flex-col h-full lg:flex-row">
            {/* Project Image/Icon Section */}
            <div
              className="flex items-center justify-center overflow-hidden bg-black/20 lg:w-2/5 h-64 lg:h-full"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Project Content */}
            <div
              className="p-6 md:p-7 flex-1 flex flex-col relative z-10 bg-bg-dark/85 gap-4 lg:p-8"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-xs px-3 py-1.5 rounded-full bg-golden-green/25 text-gold font-medium border border-golden-green/40">
                  {project.category}
                </span>
                <div className="flex items-center gap-1 text-gold text-xs uppercase tracking-[0.2em]">
                  <Zap size={16} />
                  <span>Featured</span>
                </div>
              </div>

              <h3
                className="font-bold text-white leading-tight text-2xl md:text-3xl lg:text-4xl"
              >
                {project.title}
              </h3>

              <p
                className="text-golden-green/90 text-sm md:text-base max-w-xl"
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1.5 rounded-lg glass text-golden-green border border-golden-green/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-golden-green to-teal-gold rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  View Details
                </button>
              </div>

              <div className="absolute bottom-5 right-5 text-gold opacity-80">
                <ArrowRight size={22} />
              </div>
            </div>
          </div>
        ) : (
          // Expanded / Detail View (Inline Logic)
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full bg-bg-dark/95"
          >
            {/* Close / Collapse Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedProject(null)
              }}
              className="absolute top-4 right-4 z-30 text-golden-green hover:text-gold rounded-full bg-bg-dark/80 px-4 py-2 text-xs font-semibold border border-golden-green/40"
            >
              Close Details
            </button>

            <div className="grid md:grid-cols-5 gap-0 h-full">
              {/* Image gallery */}
              <div className="md:col-span-3 bg-black/40 relative min-h-[400px]">
                <div className="h-full flex items-center justify-center bg-black/20 p-8">
                  <div className="w-full h-full relative">
                    <motion.img
                      key={activeImageIndex}
                      src={project.images[activeImageIndex]}
                      alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain max-h-[500px]"
                    />
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
                  {project.images.map((img, idx) => (
                    <button
                      key={img + idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex(idx)
                      }}
                      className={`w-16 h-12 rounded-lg border transition-all ${activeImageIndex === idx
                        ? 'border-gold bg-golden-green/20'
                        : 'border-golden-green/30 bg-bg-dark/60'
                        }`}
                    >
                      <span className="block text-[10px] text-golden-green/70">Image {idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Text content */}
              <div className="md:col-span-2 p-6 md:p-10 flex flex-col gap-6 bg-bg-dark/95">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-golden-green/25 text-gold font-medium border border-golden-green/40">
                    {project.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-golden-green/70">
                    Project Detail
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-golden-green/90 text-base md:text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>

                <div>
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-golden-green/70 mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-lg glass text-golden-green border border-golden-green/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3 relative z-50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-golden-green to-teal-gold rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-4 py-3 glass border border-golden-green/50 rounded-xl text-white font-semibold flex items-center justify-center gap-2 delay-100"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    )
  }

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-gold text-gold text-sm font-medium mb-6 shadow-neon-gold">
            <Sparkles size={18} className="animate-pulse" />
            <span>Portfolio Showcase</span>
            <Sparkles size={18} className="animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Innovative </span>
            <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-golden-green/80 text-lg max-w-2xl mx-auto mb-8">
            Exploring creativity through code • Building solutions that matter
          </p>

          <div className="h-1 bg-gradient-to-r from-golden-green via-teal-gold to-gold mx-auto rounded-full mb-10 shadow-neon-golden-green w-32" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${activeFilter === category
                  ? 'bg-gradient-to-r from-golden-green to-teal-gold text-white shadow-neon-holographic'
                  : 'glass text-golden-green hover:text-gold hover:bg-golden-green/10 border border-golden-green/20'
                  }`}
              >
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All projects list with inline expansion */}
        <div className="space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-golden-green/60 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
