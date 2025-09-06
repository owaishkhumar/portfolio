import React from 'react'
import { CheckCircle, Award, Users, Code2, Database, Server } from 'lucide-react'
import data from '../static-assets/data.json'
import profilePic from '../static-assets/profile.jpg'

const About = () => {
  const { about, achievements, leadership } = data

  const specializations = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Expertise in ASP.NET, Node.js, and building scalable server-side applications'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in SQL, NoSQL, PostgreSQL, MongoDB, and Redis for optimal data management'
    },
    {
      icon: Code2,
      title: 'API Development',
      description: 'Creating robust RESTful APIs and microservices architecture'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">About Me</h1>
            <p className="section-subtitle">
              {about.subtitle}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md mx-auto">
                <img
                  src={profilePic}
                  alt="Mohammed Owaish Khumar"
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {about.summary}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Highlights
                </h3>
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {specializations.map((spec, index) => (
                <div
                  key={spec.title}
                  className="flex-1 min-w-[250px] max-w-[320px] bg-white dark:bg-dark-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {spec.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Experience */}
          {leadership && leadership.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Leadership Experience
              </h3>
              <div className="max-w-4xl mx-auto">
                {leadership.map((role, index) => (
                  <div
                    key={role.id}
                    className="bg-white dark:bg-dark-800 rounded-xl p-6 mb-6 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {role.position}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {role.organization}
                        </p>
                      </div>
                      <Users className="h-8 w-8 text-primary-500" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {role.description}
                    </p>
                    <div className="space-y-2">
                      {role.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Recent Achievements
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {achievements.slice(0, 6).map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="flex-1 min-w-[200px] max-w-[280px] bg-white dark:bg-dark-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                    {achievement.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About