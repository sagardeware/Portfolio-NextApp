'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  index: number
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl, index }: ProjectCardProps) => {
  const [isTouched, setIsTouched] = useState(false)

  const handleLinkClick = (url: string, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 150)}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 active:border-blue-500/70 transition-all duration-300"
    >
      {/* Project Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform md:group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 md:group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 relative z-10">
        {/* Title and Description */}
        <div className="mb-6">
          <motion.h3
            className="text-xl font-bold text-white mb-3 md:group-hover:text-blue-400 transition-colors"
          >
            {title}
          </motion.h3>
          <p className="text-gray-400 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 sm:gap-4">
          <motion.button
            onClick={(e) => handleLinkClick(githubUrl, e)}
            whileTap={{ scale: 0.95 }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/50 md:bg-transparent text-gray-300 md:text-gray-400 rounded-lg md:rounded-none md:hover:text-white transition-all duration-200 cursor-pointer active:bg-gray-700/70 md:active:bg-transparent touch-manipulation"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm font-medium">Code</span>
          </motion.button>
          <motion.button
            onClick={(e) => handleLinkClick(liveUrl, e)}
            whileTap={{ scale: 0.95 }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500/20 md:bg-transparent text-blue-400 md:text-gray-400 rounded-lg md:rounded-none md:hover:text-white transition-all duration-200 cursor-pointer border border-blue-500/30 md:border-0 active:bg-blue-500/30 md:active:bg-transparent touch-manipulation"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-sm font-medium">Live Demo</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Overlay - Desktop Only */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 md:group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default ProjectCard 