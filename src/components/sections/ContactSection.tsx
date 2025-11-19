'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { personalInfo } from '@/data/personal'
import { EmailIcon, LinkedInIcon, GitHubIcon, BehanceIcon } from '@/constants/icons'

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const contactCards = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: personalInfo.email,
      action: copyEmail,
      actionLabel: emailCopied ? 'Copied!' : 'Copy',
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.socialLinks.linkedin
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      value: 'Check my code',
      link: personalInfo.socialLinks.github
    },
    {
      icon: <BehanceIcon />,
      title: 'Behance',
      value: 'View my designs',
      link: personalInfo.socialLinks.behance
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-4xl">🤝</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind? I&apos;m always open to discussing new opportunities and collaborations.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 md:hover:scale-[1.02] md:hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-400">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3 break-words">
                      {card.value}
                    </p>
                    <div className="flex gap-3">
                      {card.action && (
                        <button
                          onClick={card.action}
                          className="px-4 py-2 text-sm bg-blue-500/10 text-blue-400 rounded-lg md:hover:bg-blue-500/20 active:bg-blue-500/30 transition-colors border border-blue-500/20 touch-manipulation"
                        >
                          {card.actionLabel}
                        </button>
                      )}
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm bg-gray-700/30 text-gray-300 rounded-lg md:hover:bg-gray-700/50 md:hover:text-white active:bg-gray-700/70 transition-colors touch-manipulation"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-sm">
              I promise to reply faster than your CI/CD pipeline 🚀
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
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

export default ContactSection
