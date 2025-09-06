import React from 'react'
import { Code, Database, Cloud, Wrench, Layers, Cpu } from 'lucide-react'
import data from '../static-assets/data.json'

const Skills = () => {
  const { skills } = data

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.programmingLanguages,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Technologies',
      icon: Layers,
      skills: skills.backendTechnologies,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Frontend Technologies',
      icon: Cpu,
      skills: skills.frontendTechnologies,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      skills: skills.cloudServices,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: skills.developmentTools,
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">Technical Skills</h1>
            <p className="section-subtitle">
              Technologies and tools I work with to build scalable and efficient solutions
            </p>
          </div>

          {/* Skills Flex Layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="flex-1 min-w-[280px] max-w-[350px] bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="skill-tag hover:scale-105 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.coreCompetencies.map((competency, index) => (
                <div
                  key={competency}
                  className="flex-1 min-w-[200px] max-w-[250px] text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {competency.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {competency}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Preferred Tech Stack
            </h3>
            
            <div className="max-w-4xl mx-auto">
              {/* Backend Focused Stack */}
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {/* Primary Backend Skills */}
                  {['.NET Core', 'ASP.NET', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'].map((tech, index) => (
                    <div
                      key={tech}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Also experienced with:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[...skills.otherTechnologies, 'React.js', 'MongoDB', 'Express.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Journey */}
          <div>
            <div className="text-center bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-6xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously exploring new technologies and best practices to stay current with industry trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills