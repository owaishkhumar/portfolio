import React from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react'
import data from '../static-assets/data.json'

const Education = () => {
  const { education, achievements } = data

  const getDegreeIcon = (degree) => {
    if (degree.includes('B.Tech')) return '🎓'
    if (degree.includes('Diploma')) return '📜'
    return '🏫'
  }

  const getGradeColor = (grade) => {
    const numericGrade = parseFloat(grade.replace(/[^0-9.]/g, ''))
    if (numericGrade >= 95) return 'text-green-600 dark:text-green-400'
    if (numericGrade >= 90) return 'text-blue-600 dark:text-blue-400'
    if (numericGrade >= 80) return 'text-purple-600 dark:text-purple-400'
    if (numericGrade >= 7) return 'text-indigo-600 dark:text-indigo-400' // For CGPA
    return 'text-gray-600 dark:text-gray-400'
  }

  const academicAchievements = achievements.filter(achievement => 
    achievement.year >= 2018 && 
    (achievement.title.toLowerCase().includes('quiz') || 
     achievement.title.toLowerCase().includes('competition') || 
     achievement.title.toLowerCase().includes('presentation') ||
     achievement.title.toLowerCase().includes('training'))
  )

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="section-title">Education & Learning</h1>
            <p className="section-subtitle">
              My academic journey and continuous learning in technology and engineering
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 transform -translate-x-px"></div>

            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 transform -translate-x-1/2 z-10 shadow-lg"></div>

                {/* Education Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg text-xl">
                            {getDegreeIcon(edu.degree)}
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(edu.grade)} bg-opacity-10`}>
                            {edu.grade}
                          </div>
                        </div>
                        <Star className={`h-6 w-6 ${getGradeColor(edu.grade)}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {edu.institution}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialization for B.Tech */}
                    {edu.degree.includes('B.Tech') && (
                      <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700/30">
                        <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                          🔧 Specialization Focus
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Electronics</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Telecommunication</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Signal Processing</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            <span className="text-primary-700 dark:text-primary-300">Network Systems</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Outstanding Performance */}
                    {parseFloat(edu.grade.replace(/[^0-9.]/g, '')) >= 95 && (
                      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700/30">
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                            Outstanding Academic Performance
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Academic Achievements & Recognition
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {academicAchievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="flex-1 min-w-[200px] max-w-[280px] bg-white dark:bg-dark-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                  
                  {achievement.title.includes('WON') && (
                    <div className="mt-3 inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                      🏆 Winner
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div>
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Skills Developed Through Education
              </h3>
              
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex-1 min-w-[200px] max-w-[300px] text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Technical Foundation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Strong foundation in electronics, telecommunications, and computer science principles
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Problem Solving
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Analytical thinking and systematic approach to complex engineering problems
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Leadership & Teamwork
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Experience in leading teams, organizing events, and collaborative project work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Commitment to Continuous Learning
              </h3>
              
              <div className="flex justify-center items-center space-x-8 p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-3xl">📚</span>
                  </div>
                </div>
                
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Always Learning, Always Growing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    From academic excellence to practical application, my educational journey has built a solid foundation for continuous growth in technology and software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education