import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import data from '../static-assets/data.json'
import profilePic from '../static-assets/profile.jpg'

const Home = () => {
  const { personal } = data

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personal.socialLinks.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: personal.socialLinks.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Email',
      url: personal.socialLinks.email,
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/30">
                <MapPin className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {personal.location}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="block mt-1">
                  <span className="text-gray-900 dark:text-white">Mohammed </span>
                  <span className="gradient-text">Owaish</span>
                  <span className="text-gray-900 dark:text-white"> Khumar</span>
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {personal.title}
              </h2>
              
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                {personal.subtitle}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              I'm Mohammed Owaish Khumar, a software developer passionate about building
              scalable backend systems and crafting efficient APIs. Currently working at
              Sportz Interactive, developing data-driven solutions for global sports organizations.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel={social.name === 'Email' ? 'noopener noreferrer' : 'me noopener noreferrer'}
                    className={`p-3 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color} hover:shadow-md hover:scale-105`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="/Owaish-Resume.pdf" 
                download="Owaish-Resume.pdf"
                className="btn-secondary group"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {personal.yearsOfExperience}+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {data.projects.length}+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Projects
                </p>
              </div>
              {/* <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  5+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Technologies
                </p>
              </div> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-center lg:items-start">
            <div className="relative lg:mt-12 xl:mt-16">
              <img
                src={profilePic}
                alt="Mohammed Owaish Khumar, Software Developer in Mumbai"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home