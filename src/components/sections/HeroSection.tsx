'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, journeySteps } from '@/data/personal'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Text Content */}
            <div className="max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0 order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400 text-lg mb-4"
              >
                Let me tell you my story...
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              >
                Hi, I&apos;m {personalInfo.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="prose prose-invert max-w-none mb-8 sm:mb-12"
              >
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </motion.div>

              {/* Journey Preview - Updated for better mobile layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 min-w-[150px] max-w-[200px] bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 md:hover:border-blue-500/50 md:hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xl mb-2 block">{step.icon}</span>
                    <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-tight">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Profile Image - Updated for better mobile layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto">
                {/* Animated background effects */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                />
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  {/* Gradient border */}
                  <div className="absolute inset-0 p-1 rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    <div className="absolute inset-0 rounded-[1.8rem] bg-gray-900/90 backdrop-blur-xl" />
                  </div>
                  
                  {/* Profile image */}
                  <div className="relative w-full h-full p-4">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 120}deg) translateX(${220}px)`,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="w-full h-full rounded-full bg-blue-500/50 blur-sm"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-gray-400 mb-2">Scroll to continue my story</span>
              <svg 
                className="w-6 h-6 text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 