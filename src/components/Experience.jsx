import React from 'react'
import { Calendar, MapPin, Building, CheckCircle } from 'lucide-react'
import data from '../static-assets/data.json'

const Experience = () => {
  const { experience, skillsGained, careerProgression, projects, skills, personal } = data
  
  // Calculate dynamic stats from actual data
  const experienceStats = {
    yearsExperience: personal.yearsOfExperience,
    projectsDelivered: projects.length,
    technologiesMastered: Object.values(skills).flat().length
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">Professional Experience</h1>
            <p className="section-subtitle">
              My journey in software development and the impact I've made along the way
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 transform -translate-x-px"></div>

            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 transform -translate-x-1/2 z-10 shadow-lg"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight flex-1">
                          {exp.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Responsibilities
                      </h4>
                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notable Projects/Achievements for current role */}
                    {exp.title === "Junior Associate Software Developer" && (
                      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700/30">
                        <h5 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                          🎯 Notable Projects
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Quiz Engine Platform</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Hand Cricket Game</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Predictor Games</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Enterprise Solutions</span>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <h6 className="font-medium text-primary-800 dark:text-primary-200 mb-1">
                            🏆 Prestigious Clients
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {['UEFA', 'Wisden', 'ICC', 'AngelOne', 'Gujarat Titans'].map((client) => (
                              <span 
                                key={client}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                              >
                                {client}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Gained Section */}
          <div>
            <div className="text-center bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Technologies Gained
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.values(skillsGained).map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {category.title}
                    </h4>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="skill-tag">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Journey Visualization */}
          <div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Career Growth
              </h3>
              
              <div className="flex justify-center items-center space-x-8 p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                {careerProgression.map((stage, index) => (
                  <React.Fragment key={stage.id}>
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                        stage.current 
                          ? 'bg-primary-100 dark:bg-primary-900/30' 
                          : index === 0 
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'bg-green-100 dark:bg-green-900/30'
                      }`}>
                        <span className="text-2xl">{stage.icon}</span>
                      </div>
                      <p className="text-sm font-medium">{stage.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{stage.duration}</p>
                    </div>
                    
                    {index < careerProgression.length - 1 && (
                      <div className={`w-16 h-1 bg-gradient-to-r ${
                        index === 0 
                          ? 'from-blue-500 to-primary-500'
                          : 'from-primary-500 to-green-500'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Experience Stats */}
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {experienceStats.yearsExperience}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {experienceStats.projectsDelivered}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {experienceStats.technologiesMastered}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Mastered</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience