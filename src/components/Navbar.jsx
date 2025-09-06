import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
            OK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.path) ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700'
                  : 'bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-dark-800/30'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700'
                  : 'bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-dark-800/30'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm border-t border-gray-200/20 dark:border-gray-700/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`nav-link block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'active bg-primary-50 dark:bg-primary-900/20' 
                    : 'hover:bg-gray-100 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Download CV Button */}
            <div className="pt-2 mt-2 border-t border-gray-200/20 dark:border-gray-700/20">
              <a 
                href="/Owaish-Resume.pdf" 
                download="Owaish-Resume.pdf"
                className="block w-full px-4 py-3 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar