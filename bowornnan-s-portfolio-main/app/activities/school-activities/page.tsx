"use client"

import { ChevronLeft, GraduationCap, Users, Trophy, Calendar, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SchoolActivitiesPage() {
  const router = useRouter()
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)

  const handleBack = () => {
    router.push('/activities')
  }

  const activities = [
    {
      id: 'student-council',
      title: 'Student Council Member',
      role: 'Vice President',
      period: '2023 - 2024',
      description: 'Led student initiatives and organized school events',
      achievements: ['Organized annual school festival', 'Improved student feedback system', 'Coordinated with teachers and administration'],
      color: 'from-blue-500 to-cyan-500',
      icon: Users,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'cybersecurity-club',
      title: 'Cybersecurity Club',
      role: 'Founder & Leader',
      period: '2022 - Present',
      description: 'Established and led the school\'s first cybersecurity interest group',
      achievements: ['Organized CTF workshops', 'Taught basic security concepts', 'Participated in regional competitions'],
      color: 'from-green-500 to-emerald-500',
      icon: Shield,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'academic-excellence',
      title: 'Academic Excellence',
      role: 'Top Student',
      period: '2021 - 2024',
      description: 'Consistently maintained high academic performance',
      achievements: ['GPA 3.9/4.0', 'Subject awards in Math & Science', 'Represented school in competitions'],
      color: 'from-purple-500 to-pink-500',
      icon: Trophy,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'volunteer-work',
      title: 'Community Service',
      role: 'Volunteer Coordinator',
      period: '2022 - 2024',
      description: 'Organized community outreach and environmental projects',
      achievements: ['Tree planting campaigns', 'Elderly care visits', 'Local community workshops'],
      color: 'from-orange-500 to-red-500',
      icon: Heart,
      location: 'Local Community'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                School Activities
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              My involvement in school leadership, clubs, academic achievements, and community service
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {activities.map((activity) => {
              const IconComponent = activity.icon
              return (
                <div
                  key={activity.id}
                  onMouseEnter={() => setHoveredActivity(activity.id)}
                  onMouseLeave={() => setHoveredActivity(null)}
                  className={`
                    group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-transparent
                    hover:border-opacity-50 transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer overflow-hidden
                    ${hoveredActivity === activity.id ? 'ring-4 ring-opacity-30' : ''}
                  `}
                  style={{
                    '--tw-ring-color': hoveredActivity === activity.id ? 
                      (activity.color.includes('blue') ? '#3b82f6' : 
                       activity.color.includes('green') ? '#10b981' : 
                       activity.color.includes('purple') ? '#a855f7' : '#f97316') : 'transparent'
                  } as React.CSSProperties}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with icon and period */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {activity.period}
                      </span>
                    </div>
                    
                    {/* Title and role */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-3">
                      {activity.role}
                    </p>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {activity.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color} mt-2 flex-shrink-0`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <Calendar className="w-4 h-4" />
                        Timeline
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <Trophy className="w-4 h-4" />
                        Certificates
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm animate-pulse">
              Hover over activities to see achievements and actions
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Custom icon components
function Shield(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function Heart(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}
