'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { designProjects } from '@/data/designProjects'
import { personalInfo } from '@/data/personal'
import { ArrowRightIcon } from '@/constants/icons'

const DesignProjectsSection = () => {
  return (
    <section id="design-projects" className="min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-purple-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-4xl">🎨</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Design Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where creativity meets functionality. Each design tells a story of user-centered thinking and aesthetic innovation.
          </p>
        </motion.div>

        {/* Design Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 md:hover:border-blue-500/50 transition-all overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 md:h-80 lg:h-[400px] rounded-t-xl overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover md:group-hover:scale-105 transition-transform duration-300"
                />
                {/* Mobile: Always show info, Desktop: Show on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-blue-400 text-sm">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.behanceUrl && (
                        <motion.a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-blue-500/20 text-white rounded-lg md:hover:bg-blue-500/30 active:bg-blue-500/40 transition-colors border border-blue-500/30 touch-manipulation"
                        >
                          Behance
                        </motion.a>
                      )}
                      {project.dribbbleUrl && (
                        <motion.a
                          href={project.dribbbleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-blue-500/20 text-white rounded-lg md:hover:bg-blue-500/30 active:bg-blue-500/40 transition-colors border border-blue-500/30 touch-manipulation"
                        >
                          Dribbble
                        </motion.a>
                      )}
                      {project.caseStudyUrl && (
                        <motion.a
                          href={project.caseStudyUrl}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-blue-500/20 text-white rounded-lg md:hover:bg-blue-500/30 active:bg-blue-500/40 transition-colors border border-blue-500/30 touch-manipulation"
                        >
                          View Case Study
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href={personalInfo.socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full md:hover:bg-blue-500/20 active:bg-blue-500/30 transition-colors border border-blue-500/20 touch-manipulation"
          >
            <span>View More on Behance</span>
            <ArrowRightIcon />
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      />
    </section>
  )
}

export default DesignProjectsSection 