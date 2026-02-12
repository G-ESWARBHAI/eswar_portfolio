import { motion } from 'framer-motion'
import { Server, Database, Lock, CreditCard, Cpu, Cloud } from 'lucide-react'

const TechMarquee = () => {
    const technologies = [
        { icon: Server, name: 'Full Stack Development' },
        { icon: Cpu, name: 'React & React Native' },
        { icon: Database, name: 'Backend Architecture' },
        { icon: Database, name: 'REST APIs & System Design' },
        { icon: Lock, name: 'JWT & OAuth Security' },
        { icon: CreditCard, name: 'Payment Integration' },
        { icon: Database, name: 'MongoDB & Redis' },
        { icon: Cloud, name: 'VPS & Production Deployment' },
    ]

    return (
        <div className="relative flex overflow-hidden py-8 bg-bg-dark border-y border-golden-green/10">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-bg-dark via-transparent to-bg-dark w-full"></div>

            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 20,
                }}
                className="flex gap-12 whitespace-nowrap px-12"
            >
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-golden-green/80 hover:text-gold transition-colors duration-300"
                    >
                        <tech.icon size={24} className="text-teal-gold" />
                        <span className="text-xl md:text-2xl font-semibold tracking-wide">
                            {tech.name}
                        </span>
                        <span className="text-golden-green/20 ml-12 text-2xl">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default TechMarquee
