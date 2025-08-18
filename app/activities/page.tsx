"use client"

import { ChevronLeft, Award, Globe, GraduationCap, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function ActivitiesPage() {
  const router = useRouter()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const handleBack = () => {
    // Navigate to home and trigger page 2
    router.push('/?page=about')
  }

  const activities = [
    {
      id: 'certificates',
      title: 'Certificates',
      description: 'Cybersecurity and programming certifications',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      href: '/activities/certificates'
    },
    {
      id: 'website',
      title: 'Website Creation',
      description: 'Portfolio and project websites',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      href: '/activities/website-creation'
    },
    {
      id: 'school',
      title: 'School Activities',
      description: 'Academic and extracurricular involvement',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      href: '/activities/school-activities'
    },
    {
      id: 'hobby',
      title: 'Hobbies & Interests',
      description: 'Personal interests and creative pursuits',
      icon: Heart,
      color: 'from-orange-500 to-pink-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      href: '/activities/hobbies'
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Work and activities
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 cursor-pointer
                    transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-gray-200/50
                    ${hoveredItem === item.id ? 'ring-4 ring-opacity-50' : ''}
                  `}
                  style={{
                    '--tw-ring-color': hoveredItem === item.id ? 
                      (item.id === 'certificates' ? '#3b82f6' : 
                       item.id === 'website' ? '#a855f7' : 
                       item.id === 'school' ? '#10b981' :
                       item.id === 'hobby' ? '#f97316' : 'transparent') : 'transparent'
                  } as React.CSSProperties}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} 
                      flex items-center justify-center text-white shadow-lg
                      transform group-hover:scale-110 transition-transform duration-300
                    `}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className={`
                    absolute bottom-4 left-1/2 transform -translate-x-1/2
                    w-12 h-1 bg-gradient-to-r ${item.color} rounded-full
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    group-hover:w-16
                  `} />
                </Link>
              )
            })}
          </div>
          
          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm animate-pulse">
              Click on any category to explore further
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


