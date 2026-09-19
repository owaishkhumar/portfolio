import React, { useState } from 'react'
import { ExternalLink, Github, Code, Database, Globe, Zap, CheckCircle } from 'lucide-react'
import data from '../static-assets/data.json'

const Projects = () => {
  const { projects } = data
  const [selectedProject, setSelectedProject] = useState(null)

  // Function to truncate text and add "...Read more"
  const truncateText = (text, maxLength = 300) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim()
  }

  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('api')) return Database
    if (title.toLowerCase().includes('web')) return Globe
    if (title.toLowerCase().includes('bot') || title.toLowerCase().includes('iot')) return Zap
    return Code
  }

  const getTechColor = (tech) => {
    const colors = {
      // Frontend Technologies
      'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      'React.js': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'Express.js': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      'JavaScript': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      'HTML': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'CSS': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      
      // Backend Technologies
      'C#': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'ASP.NET Core': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'ASP.NET Web API': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'ASP.NET MVC': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Worker Services': 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
      'RESTful API': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      
      // Databases & ORM
      'PostgreSQL': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'MongoDB': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      'Entity Framework/Dapper': 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
      
      // Caching & Messaging
      'Redis': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      'AWS ElastiCache': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'RabbitMQ': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      
      // Cloud & DevOps
      'AWS': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'Docker': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      
      // Authentication & Security
      'JWT': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      'JWT Authentication': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      
      // Other Technologies
      'Firebase': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'IoT': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'Multer': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      'Sensors': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
    }
    return colors[tech] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">Featured Projects</h1>
            <p className="section-subtitle">
              Showcasing my passion for backend development and full-stack solutions
            </p>
          </div>

          {/* Projects Flex Layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.title)
              
              return (
                <div
                  key={project.id}
                  className="flex flex-col flex-1 min-w-[300px] max-w-[400px] bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-4 flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                        <ProjectIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-200"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 text-justify">
                      {truncateText(project.description)}
                      {project.description.length > 300 && (
                        <>
                          ...{' '}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProject(project)
                            }}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium hover:underline transition-colors duration-200"
                          >
                            Read more
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="px-6 pb-6 mt-auto">
                    <button className="w-full py-2 px-4 bg-gray-50 dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg transition-all duration-200 text-sm font-medium group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20">
                      View Details →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* GitHub Showcase */}
          <div>
            <div className="text-center bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <Github className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Open Source Contributions
              </h3> */}
              {/* <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile to explore more projects, contributions, and code samples that demonstrate my expertise in backend development and full-stack solutions.
              </p> */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile to explore more projects and code samples.
              </p>
              <a
                href="https://github.com/owaishkhumar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:scale-105 transition-transform"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    {React.createElement(getProjectIcon(selectedProject.title), { className: "h-6 w-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      {selectedProject.githubUrl !== "#" && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          View Code
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xl"
                >
                  ×
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-justify">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <div className="space-y-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects