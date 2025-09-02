"use client"

import { ChevronLeft, Heart, Music, Camera, Gamepad2, BookOpen, Palette, Coffee } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HobbiesPage() {
  const router = useRouter()
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null)

  const handleBack = () => {
    router.push('/activities')
  }

  const hobbies = [
    {
      id: 'music',
      title: 'Music & Audio',
      description: 'Playing guitar, listening to various genres, and exploring new sounds',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      details: ['Guitar playing', 'Rock & Alternative music', 'Audio production', 'Concert attendance'],
      level: 'Intermediate',
      timeSpent: '2-3 hours/week'
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling through images',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      details: ['Street photography', 'Nature shots', 'Portrait photography', 'Photo editing'],
      level: 'Beginner',
      timeSpent: '1-2 hours/week'
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'Strategic games, puzzle solving, and competitive gaming experiences',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500',
      details: ['Strategy games', 'Puzzle games', 'Esports watching', 'Game development interest'],
      level: 'Advanced',
      timeSpent: '5-6 hours/week'
    },
    {
      id: 'reading',
      title: 'Reading & Learning',
      description: 'Exploring books, articles, and online courses for personal growth',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      details: ['Cybersecurity books', 'Science fiction', 'Technical articles', 'Online courses'],
      level: 'Advanced',
      timeSpent: '3-4 hours/week'
    },
    {
      id: 'art',
      title: 'Digital Art',
      description: 'Creating digital illustrations and exploring creative expression',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      details: ['Digital drawing', 'Graphic design', 'Logo creation', 'Creative projects'],
      level: 'Beginner',
      timeSpent: '1-2 hours/week'
    },
    {
      id: 'coffee',
      title: 'Coffee Culture',
      description: 'Exploring different coffee brewing methods and cafe experiences',
      icon: Coffee,
      color: 'from-amber-500 to-orange-500',
      details: ['Brewing techniques', 'Bean varieties', 'Cafe exploration', 'Coffee photography'],
      level: 'Intermediate',
      timeSpent: '1 hour/week'
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-pink-600 bg-clip-text text-transparent">
                Hobbies & Interests
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Personal interests, creative pursuits, and activities that bring joy and balance to life
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby) => {
              const IconComponent = hobby.icon
              return (
                <div
                  key={hobby.id}
                  onMouseEnter={() => setHoveredHobby(hobby.id)}
                  onMouseLeave={() => setHoveredHobby(null)}
                  className={`
                    group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-transparent
                    hover:border-opacity-50 transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer overflow-hidden
                    ${hoveredHobby === hobby.id ? 'ring-4 ring-opacity-30' : ''}
                  `}
                  style={{
                    '--tw-ring-color': hoveredHobby === hobby.id ? 
                      (hobby.color.includes('purple') ? '#a855f7' : 
                       hobby.color.includes('blue') ? '#3b82f6' : 
                       hobby.color.includes('green') ? '#10b981' :
                       hobby.color.includes('orange') ? '#f97316' :
                       hobby.color.includes('pink') ? '#ec4899' : '#f59e0b') : 'transparent'
                  } as React.CSSProperties}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with icon and level */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${hobby.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700">
                        {hobby.level}
                      </span>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {hobby.description}
                    </p>
                    
                    {/* Time spent */}
                    <div className="mb-4">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        ⏱️ {hobby.timeSpent}
                      </span>
                    </div>
                    
                    {/* Details */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Activities</h4>
                      <ul className="space-y-1">
                        {hobby.details.map((detail, index) => (
                          <li key={index} className="text-gray-600 text-xs flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs transition-colors">
                        <Heart className="w-3 h-3" />
                        Learn More
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs transition-colors">
                        <Camera className="w-3 h-3" />
                        Gallery
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
              Hover over hobbies to see details and actions
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
