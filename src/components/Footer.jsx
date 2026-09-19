import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import data from '../static-assets/data.json'

const Footer = () => {
  const { personal } = data
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: personal.socialLinks.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personal.socialLinks.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: personal.socialLinks.email,
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr_0.8fr] gap-8 md:gap-x-6">
          {/* Brand & Description */}
          <div>
            <div>
              <h3 className="text-xl font-bold gradient-text mb-3">
                {personal.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-sm leading-relaxed text-sm">
                {personal.footerDescription}
              </p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:px-4">
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                Quick Links
              </h4>
              <ul className="space-y-0.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:pl-8">
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                Get In Touch
              </h4>
              <div className="space-y-0.5 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  {personal.location}
                </p>
                <a 
                  href={`mailto:${personal.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 block"
                >
                  {personal.email}
                </a>
                <a 
                  href={`tel:${personal.phone}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 block"
                >
                  {personal.phone}
                </a>
              </div>

              {/* Availability Status */}
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} {personal.name}</span>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 hover:scale-110 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer