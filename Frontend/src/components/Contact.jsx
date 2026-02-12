import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eswargeddam2004@gmail.com',
      link: 'mailto:eswargeddam2004@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8074446902',
      link: 'tel:+918074446902',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
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
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Let's Work </span>
              <span className="text-gradient">Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden-green via-teal-gold to-gold mx-auto rounded-full shadow-neon-golden-green"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Let's Connect
                </h3>
                <p className="text-golden-green/90 leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your visions. Feel free to
                  reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass rounded-xl p-4 border border-golden-green/30 hover:border-gold/50 transition-all flex items-center gap-4 group hover:shadow-neon-golden-green"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-golden-green to-teal-gold group-hover:shadow-neon-holographic transition-all">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-golden-green/80 mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg glass border border-golden-green/30 hover:border-gold/50 hover:bg-golden-green/10 transition-all hover:shadow-neon-golden-green"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-golden-green hover:text-gold transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 border border-golden-green/30 shadow-neon-golden-green">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-golden-green/90 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-deep border border-golden-green/30 text-white placeholder-golden-green/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-golden-green/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-golden-green/90 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-deep border border-golden-green/30 text-white placeholder-golden-green/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-golden-green/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-golden-green/90 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-deep border border-golden-green/30 text-white placeholder-golden-green/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-golden-green/50 transition-all"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-golden-green/90 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-bg-deep border border-silver/20 text-white placeholder-silver focus:outline-none focus:border-silver/40 focus:ring-2 focus:ring-midnight-blue/50 transition-all resize-none"
                      placeholder="Your Message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-golden-green via-teal-gold to-gold text-white font-semibold hover:shadow-neon-holographic transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send size={20} />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

