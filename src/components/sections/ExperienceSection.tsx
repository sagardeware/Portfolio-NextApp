'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { experiences } from '@/data/experience'
import { personalInfo } from '@/data/personal'
import { CalendarIcon, LocationIcon, DownloadIcon } from '@/constants/icons'

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-blue-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-4xl">💼</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Building impactful solutions across industries
          </p>
        </motion.div>

        {/* Modern Card-Based Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 last:mb-0"
            >
              {/* Main Experience Card */}
              <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 md:hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                {/* Card Header - Always Visible */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    {/* Left: Company Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white truncate">
                          {experience.company}
                        </h3>
                        {index === 0 && (
                          <span className="flex-shrink-0 px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Position/Title */}
                      <p className="text-blue-400 font-medium text-base md:text-lg mb-2">
                        {experience.positions ? experience.positions[0].title : experience.title}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarIcon />
                          {experience.positions ? experience.overallDuration : experience.duration}
                        </span>
                        {experience.location && (
                          <>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-1.5">
                              <LocationIcon />
                              {experience.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Right: Expand Button */}
                    <motion.button
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700/50 text-gray-400 md:hover:bg-gray-700 md:hover:text-white transition-colors touch-manipulation"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-700/50 pt-6">
                      {/* Multiple Positions */}
                      {experience.positions ? (
                        <div className="space-y-6">
                          {experience.positions.map((position, posIndex) => (
                            <div key={posIndex} className="relative pl-6">
                              {/* Timeline Connector */}
                              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 border-4 border-gray-800" />
                              {posIndex !== experience.positions!.length - 1 && (
                                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
                              )}

                              {/* Position Details */}
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                  <h4 className="text-lg font-semibold text-white">
                                    {position.title}
                                  </h4>
                                  <span className="text-sm text-gray-400">
                                    {position.duration}
                                  </span>
                                </div>

                                <ul className="space-y-2 mb-4">
                                  {position.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Single Position */
                        <ul className="space-y-3 mb-6">
                          {experience.description?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      <div className="mt-6 pt-4 border-t border-gray-700/30">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs md:text-sm font-medium bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full md:hover:shadow-lg md:hover:shadow-blue-500/25 active:shadow-xl transition-all touch-manipulation"
          >
            <DownloadIcon />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
      />
    </section>
  )
}

export default ExperienceSection
