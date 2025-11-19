'use client'
import { motion, useMotionValue, useAnimationControls } from 'framer-motion'
import { techStackByCategory } from '@/data/techStack'
import { useEffect, useRef } from 'react'

const TechStackSection = () => {
  // Combine languages, tools, and AI tools for the marquee
  const allTechnologies = [
    ...techStackByCategory.languages,
    ...techStackByCategory.tools,
    ...techStackByCategory.aiTools
  ]

  // Duplicate the array for seamless loop
  const duplicatedTechnologies = [...allTechnologies, ...allTechnologies, ...allTechnologies]

  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragTimeout = useRef<NodeJS.Timeout>()

  const itemWidth = 140 // Approximate width of each item with gap
  const totalWidth = allTechnologies.length * itemWidth

  useEffect(() => {
    // Start auto-scrolling
    startAutoScroll()

    return () => {
      if (dragTimeout.current) {
        clearTimeout(dragTimeout.current)
      }
    }
  }, [])

  const startAutoScroll = () => {
    controls.start({
      x: -totalWidth,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    })
  }

  const handleDragStart = () => {
    isDragging.current = true
    controls.stop()
    if (dragTimeout.current) {
      clearTimeout(dragTimeout.current)
    }
  }

  const handleDragEnd = () => {
    isDragging.current = false

    // Resume auto-scroll after 2 seconds of inactivity
    dragTimeout.current = setTimeout(() => {
      startAutoScroll()
    }, 2000)
  }

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tech Stack I Use
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Horizontal Scrolling Marquee */}
        <div className="relative" ref={containerRef}>
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden py-8 cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex gap-12 items-center"
              drag="x"
              dragConstraints={{ left: -totalWidth * 2, right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x: 0 }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-3 group select-none"
                >
                  {/* Technology Icon/Logo Box */}
                  <div className="w-20 h-20 flex items-center justify-center bg-gray-800/50 rounded-xl border border-gray-700/50 md:group-hover:border-blue-500/50 md:group-hover:bg-gray-800/60 transition-all duration-300 pointer-events-none">
                    <span className="text-4xl">{tech.icon || '⚡'}</span>
                  </div>

                  {/* Technology Name */}
                  <span className="text-sm text-gray-400 md:group-hover:text-white transition-colors duration-300 text-center whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional: Category Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Languages · Frameworks · Tools · Databases · AI Tools
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
      />
    </section>
  )
}

export default TechStackSection
