"use client"

import { ChevronLeft, Heart, Music, Camera, Gamepad2, BookOpen, Palette, Coffee, Sparkles, Zap, Star, Target, Clock, Play, Trophy } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function HobbiesPage() {
  const router = useRouter()
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null)
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [hoveredButton, setHoveredButton] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, delay: number, type: string}>>([])

  // Page entry animation
  useEffect(() => {
    setEntered(true)
    
    // Generate floating elements positions
    const elements = Array.from({length: 12}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      type: ['🎵', '📸', '🎮', '🎨', '☕', '⭐', '🎯', '🏆'][i % 8]
    }))
    setFloatingElements(elements)
  }, [])

  const handleBack = () => {
    setExiting(true)
    setTimeout(() => {
      router.push('/activities')
    }, 300)
  }

<<<<<<< Updated upstream
=======
  const handleGalleryClick = (hobbyId: string) => {
    if (hobbyId === 'music') {
      router.push('/activities/hobbies/music-gallery')
    } else if (hobbyId === 'photography') {
      router.push('/activities/hobbies/photography-gallery')
    } else if (hobbyId === 'trading') {
      router.push('/activities/hobbies/trading-gallery')
    } else if (hobbyId === 'webdev') {
      router.push('/activities/hobbies/webdev-gallery')
    } else if (hobbyId === 'drone') {
      router.push('/activities/hobbies/drone-gallery')
    } else if (hobbyId === 'software') {
      router.push('/activities/hobbies/software-gallery')
    }
  }

>>>>>>> Stashed changes
  const hobbies = [
    {
      id: 'music',
      title: 'Music & Audio',
      description: 'Playing guitar, listening to various genres, and exploring new sounds',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      details: ['Guitar playing', 'Rock & Alternative music', 'Audio production', 'Concert attendance'],
      level: 'Intermediate',
<<<<<<< Updated upstream
      timeSpent: '2-3 hours/week'
=======
      timeSpent: '3-4 hours/week'
    },
    {
      id: 'listening',
      title: 'Listen to Music',
      description: 'When I wear my Air pods, I like to listen to music.',
      icon: Music,
      color: 'from-blue-500 to-cyan-500',
      details: ['Saran', 'Only Monday', 'Bowkylion', 'Z9'],
      level: 'Advanced',
      timeSpent: '5-6 hours/week'
    },
    {
      id: 'webdev',
      title: 'Website Development',
      description: 'Creating and designing websites using modern web technologies',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      details: ['Frontend development', 'UI/UX design', 'Responsive design', 'Web optimization'],
      level: 'Intermediate',
      timeSpent: '4-5 hours/week',
      images: ['/images/DP1.jpg']
>>>>>>> Stashed changes
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling through images',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      details: ['Street photography', 'Nature shots', 'Portrait photography', 'Photo editing'],
      level: 'Beginner',
      timeSpent: '1-2 hours/week',
      images: ['/images/df1.JPG', '/images/df2.JPG']
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
<<<<<<< Updated upstream
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
=======
      color: 'from-teal-500 to-green-500',
      details: ['Cursor', 'GitHub', 'Vercel', 'Notion','Basic Cybersecurity'],
      level: 'Beginner',
      timeSpent: '2-3 hours/week',
      images: ['/images/SL1.jpg']
>>>>>>> Stashed changes
    }
  ]

  return (
    <main className={`min-h-screen relative overflow-hidden transition-all duration-500 ease-out ${
      entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${exiting ? 'opacity-0 -translate-y-8' : ''}`}>
      {/* Hobbies Theme Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50"></div>
        
        {/* Floating hobby emojis */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute text-2xl animate-bounce opacity-30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: '4s'
            }}
          >
            {element.type}
          </div>
        ))}

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className={`fixed top-6 left-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out group ${
          hoveredButton 
            ? 'bg-gradient-to-r from-orange-500 to-pink-500 scale-110 shadow-orange-500/50' 
            : 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 transition-all duration-500 ${
          hoveredButton ? 'text-white rotate-12' : 'text-gray-600 group-hover:text-white'
        }`} />
        {hoveredButton && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20"></div>
        )}
      </button>

      <div className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-600 flex items-center justify-center text-white shadow-2xl">
                <Heart className="w-10 h-10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-pink-400 animate-ping opacity-30"></div>
              </div>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
                  Hobbies & Interests
                </h1>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
<<<<<<< Updated upstream
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Personal interests, creative pursuits, and activities that bring joy and balance to life
=======
            
            {/* Fun stats indicator */}
            <div className="mb-6 animate-fade-in-up delay-200">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200 shadow-lg">
                <Play className="w-5 h-5 text-orange-600" />
                <span className="text-orange-700 font-medium">7 Amazing Hobbies</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg max-w-3xl mx-auto animate-fade-in-up delay-300">
              Personal interests, creative pursuits, and activities that bring joy and balance to my life 🎉
>>>>>>> Stashed changes
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, idx) => {
              const IconComponent = hobby.icon
              return (
                <div
                  key={hobby.id}
                  onMouseEnter={() => setHoveredHobby(hobby.id)}
                  onMouseLeave={() => setHoveredHobby(null)}
                  className={`
                    group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-transparent
                    hover:border-orange-300/50 transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-orange-200/50 cursor-pointer overflow-hidden
                    ${hoveredHobby === hobby.id ? 'ring-4 ring-orange-400/30' : ''}
                    animate-fade-in-up
                  `}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with icon and level */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${hobby.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${hobby.color} shadow-md`}>
                          {hobby.level}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                      {hobby.description}
                    </p>
                    
                    {/* Time spent with fun icon */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-full border border-orange-200">
                        <Clock className="w-3 h-3" />
                        <span className="font-medium">{hobby.timeSpent}</span>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="mb-4">
<<<<<<< Updated upstream
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Activities</h4>
                      <ul className="space-y-1">
                        {hobby.details.map((detail, index) => (
                          <li key={index} className="text-gray-600 text-xs flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
=======
                      <h4 className="text-sm font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {hobby.id === 'listening' ? 'My favorite artist' : 
                         hobby.id === 'music' ? 'My favorite musical instrument' :
                         hobby.id === 'photography' ? 'What I photographed' :
                         hobby.id === 'drone' ? 'During the time I used':
                         hobby.id === 'software' ? 'The software I studied' :
                         hobby.id === 'webdev' ? 'What I developed' : 'Key Activities'}
                      </h4>
                      <ul className="space-y-1">
                        {hobby.details.map((detail, index) => (
                          <li key={index} className="text-gray-600 text-xs flex items-start gap-2 group-hover:text-gray-700 transition-colors">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hobby.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
>>>>>>> Stashed changes
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action buttons */}
<<<<<<< Updated upstream
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs transition-colors">
                        <Heart className="w-3 h-3" />
                        Learn More
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs transition-colors">
                        <Camera className="w-3 h-3" />
                        Gallery
                      </button>
=======
                    <div className="flex gap-2">
                      {(hobby.id === 'music' || hobby.id === 'photography' || hobby.id === 'trading' || hobby.id === 'webdev' || hobby.id === 'drone' || hobby.id === 'software') && (
                        <button 
                          onClick={() => handleGalleryClick(hobby.id)} 
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                        >
                          <Camera className="w-3 h-3" />
                          Gallery
                        </button>
                      )}
>>>>>>> Stashed changes
                    </div>
                  </div>
                </div>
              )
            })}
          </div>


        </div>
      </div>
    </main>
  )
}
