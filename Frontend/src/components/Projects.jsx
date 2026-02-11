import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ArrowRight, Zap } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      fullDescription:
        'A scalable e-commerce platform featuring authentication, product management, secure payments, and an analytics-ready admin dashboard.',
      image: '🛒',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      images: [
        '/projects/ecommerce/dashboard.png',
        '/projects/ecommerce/product-list.png',
        '/projects/ecommerce/checkout.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-golden-green to-teal-gold',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      fullDescription:
        'A modern Kanban-style task manager with team workspaces, real-time updates, and a responsive UI designed for productivity.',
      image: '📋',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      images: [
        '/projects/tasks/board.png',
        '/projects/tasks/detail.png',
        '/projects/tasks/mobile.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-teal-gold to-gold',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      fullDescription:
        'A unified dashboard to monitor multiple social platforms, visualize engagement trends, and schedule content effortlessly.',
      image: '📊',
      category: 'Full Stack',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js'],
      images: [
        '/projects/social/overview.png',
        '/projects/social/analytics.png',
        '/projects/social/scheduling.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-gold to-bright-gold',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      fullDescription:
        'A visually rich weather experience featuring hourly forecasts, interactive maps, and multi-city support with smooth micro-interactions.',
      image: '🌤️',
      category: 'Frontend',
      technologies: ['React', 'API Integration', 'CSS3'],
      images: [
        '/projects/weather/main.png',
        '/projects/weather/details.png',
        '/projects/weather/map.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-holographic-green to-golden-green',
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis.',
      fullDescription:
        'Track live prices, build a personal portfolio, and visualize market movements with customizable alerts and watchlists.',
      image: '₿',
      category: 'Frontend',
      technologies: ['React', 'WebSocket', 'Chart.js', 'API'],
      images: [
        '/projects/crypto/overview.png',
        '/projects/crypto/coins.png',
        '/projects/crypto/portfolio.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-teal-gold to-holographic-green',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, and content management system.',
      fullDescription:
        'A content-focused blogging platform with MDX support, rich editor experience, and SEO features such as OpenGraph and sitemap generation.',
      image: '✍️',
      category: 'Full Stack',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      images: [
        '/projects/blog/home.png',
        '/projects/blog/post.png',
        '/projects/blog/editor.png',
      ],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-golden-green to-holographic-green',
    },
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

    return (
      <motion.div
        onClick={() => {
          setSelectedProject(project)
          setActiveImageIndex(0)
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -8, scale: isHero ? 1.01 : 1.02 }}
        className={`relative cursor-pointer glass-holographic overflow-hidden border border-golden-green/40 shadow-neon-holographic bg-bg-dark/60 group ${
          isHero ? 'rounded-4xl lg:h-[420px] col-span-1 lg:col-span-3' : 'rounded-3xl h-full'
        }`}
      >
        {/* Gradient Background with very soft parallax */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`}
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        <div className={`relative flex flex-col h-full ${isHero ? 'lg:flex-row' : ''}`}>
          {/* Project Image/Icon Section */}
          <div
            className={`flex items-center justify-center overflow-hidden ${
              isHero ? 'lg:w-2/5 h-64 lg:h-full' : 'h-56'
            }`}
          >
            <motion.div
              className="text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] relative z-10"
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              whileHover={{ y: -6 }}
            >
              {project.image}
            </motion.div>
          </div>

          {/* Project Content */}
          <div
            className={`p-6 md:p-7 flex-1 flex flex-col relative z-10 bg-bg-dark/85 gap-4 ${
              isHero ? 'lg:p-8' : ''
            }`}
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
              className={`font-bold text-white leading-tight ${
                isHero ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-golden-green/90 text-sm ${
                isHero ? 'md:text-base max-w-xl' : ''
              }`}
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-golden-green to-teal-gold rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 glass border border-golden-green/50 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                <Github size={18} />
                Code
              </a>
            </div>

            <div className="absolute bottom-5 right-5 text-gold opacity-80">
              <ArrowRight size={22} />
            </div>
          </div>
        </div>
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
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-golden-green to-teal-gold text-white shadow-neon-holographic'
                    : 'glass text-golden-green hover:text-gold hover:bg-golden-green/10 border border-golden-green/20'
                }`}
              >
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All projects as large hero-style cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-golden-green/60 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Project detail modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Close when clicking on the dark backdrop (outside the card)
              if (e.target === e.currentTarget) {
                setSelectedProject(null)
              }
            }}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-bg-dark/95 border border-golden-green/40 shadow-neon-holographic">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 text-golden-green hover:text-gold rounded-full bg-bg-dark/80 px-3 py-1 text-xs font-semibold border border-golden-green/40"
              >
                Close
              </button>

              <div className="grid md:grid-cols-5 gap-0 h-full">
                {/* Image gallery */}
                <div className="md:col-span-3 bg-black/40 relative">
                  <div className="h-64 md:h-full flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[90%] h-[85%] rounded-2xl bg-gradient-to-br from-golden-green/20 to-teal-gold/20 border border-golden-green/30 flex items-center justify-center">
                        <span className="text-sm text-golden-green/80">
                          Replace with real screenshots at `{selectedProject.images[activeImageIndex]}`
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={img + idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-16 h-12 rounded-lg border transition-all ${
                          activeImageIndex === idx
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
                <div className="md:col-span-2 p-6 md:p-7 flex flex-col gap-4 overflow-y-auto max-h-[90vh]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs px-3 py-1.5 rounded-full bg-golden-green/25 text-gold font-medium border border-golden-green/40">
                      {selectedProject.category}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-golden-green/70">
                      Project Detail
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="text-golden-green/90 text-sm md:text-[15px]">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.2em] text-golden-green/70 mb-2">
                      TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-3 py-1.5 rounded-lg glass text-golden-green border border-golden-green/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex flex-col gap-2 text-[12px] text-golden-green/80">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>Responsive layout optimized for desktop and mobile.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>Clean, accessible UI with focus on usability.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>Integration-ready architecture for real APIs.</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-golden-green to-teal-gold rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 glass border border-golden-green/50 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
