import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Calendar, CheckCircle } from 'lucide-react'
import data from '../static-assets/data.json'

const Contact = () => {
  const { personal } = data
  const [formStatus, setFormStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => setFormStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      color: 'text-blue-600 dark:text-blue-400'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personal.socialLinks.github,
      color: 'text-gray-900 dark:text-white',
      bg: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personal.socialLinks.linkedin,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40'
    },
    {
      icon: Mail,
      label: 'Email',
      href: personal.socialLinks.email,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Let's discuss opportunities, collaborations, or just have a conversation about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or connecting with fellow developers. Whether you have a project in mind, 
                  want to collaborate, or just want to say hello, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-800 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`w-12 h-12 rounded-xl ${info.color.includes('red') ? 'bg-red-100 dark:bg-red-900/30' : info.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'} flex items-center justify-center`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me On
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-200 hover:scale-105 ${social.bg} ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-700/30">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-primary-800 dark:text-primary-200 font-medium">
                      Quick Response Guaranteed
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none transition-all duration-200"
                      placeholder="Tell me more about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform"
                  >
                    {formStatus === 'sending' ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : formStatus === 'sent' ? (
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          {/* <div>
            <div className="text-center bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <Calendar className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Schedule a Meeting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Prefer a direct conversation? Let's schedule a call to discuss your project requirements, 
                collaboration opportunities, or any technical questions you might have.
              </p>
              <a
                href={`mailto:${personal.email}?subject=Meeting Request&body=Hi Owaish,%0D%0A%0D%0AI'd like to schedule a meeting to discuss...`}
                className="btn-secondary hover:scale-105 transition-transform"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact