'use client'
import { motion } from 'framer-motion'
import { personalInfo, menuItems } from '@/data/personal'
import { GitHubIcon, LinkedInIcon, BehanceIcon } from '@/constants/icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.socialLinks.github,
      icon: <GitHubIcon />
    },
    {
      name: 'LinkedIn',
      url: personalInfo.socialLinks.linkedin,
      icon: <LinkedInIcon />
    },
    {
      name: 'Behance',
      url: personalInfo.socialLinks.behance,
      icon: <BehanceIcon />
    }
  ]

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gray-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-500 text-sm">
                {personalInfo.location}
              </p>
            </motion.div>

            {/* Middle Column - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 md:hover:text-blue-400 transition-colors text-left text-sm"
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Right Column - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect
              </h4>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 md:hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      {social.icon}
                    </span>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Email */}
              <div className="mt-4 pt-4 border-t border-gray-800/50">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-gray-400 md:hover:text-blue-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800/50"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © {currentYear} {personalInfo.name}. No rights reserved. Feel free to get inspired, just don&apos;t copy-paste my bugs 😄
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                Made with <span className="text-red-500">❤️</span> and <span className="text-yellow-500">☕</span> in India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
