import React from 'react'
import { Award, BookOpen, Users, GraduationCap } from 'lucide-react'

const Faculty = () => {
  const faculty = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Physics Expert',
      qualification: 'IIT Delhi, Ph.D.',
      experience: '15+ Years',
      initials: 'RK',
      achievements: ['500+ IIT Selections', 'Author of 3 Books'],
    },
    {
      name: 'Prof. Anjali Sharma',
      role: 'Chemistry Specialist',
      qualification: 'IIT Bombay, M.Sc.',
      experience: '12+ Years',
      initials: 'AS',
      achievements: ['300+ NEET Toppers', 'National Award Winner'],
    },
    {
      name: 'Mr. Vikram Reddy',
      role: 'Mathematics Guru',
      qualification: 'IIT Madras, B.Tech',
      experience: '10+ Years',
      initials: 'VR',
      achievements: ['400+ JEE Selections', 'Olympiad Trainer'],
    },
    {
      name: 'Ms. Divya Patel',
      role: 'Biology Expert',
      qualification: 'AIIMS, MBBS',
      experience: '8+ Years',
      initials: 'DP',
      achievements: ['250+ NEET Toppers', 'Medical Counselor'],
    },
  ]

  return (
    <section id="faculty" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Faculty
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Learn From The <span className="text-gradient">Best Minds</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our faculty comprises IIT/NIT alumni and subject experts with proven track records
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {faculty.map((teacher, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-4xl">{teacher.initials}</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                  {teacher.experience}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {teacher.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {teacher.qualification}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {teacher.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Award className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: GraduationCap, value: '50+', label: 'Expert Teachers' },
            { icon: Award, value: '100%', label: 'IIT/NIT Alumni' },
            { icon: BookOpen, value: '15+', label: 'Avg. Experience' },
            { icon: Users, value: '10:1', label: 'Student-Teacher Ratio' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
