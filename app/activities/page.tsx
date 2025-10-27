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
      title: 'Skills',
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
    <main className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'blur(8px) brightness(0.7) contrast(1.1)',
          transform: 'scale(1.1)',
        }}
      >
        <source src="/images/qw1.mp4" type="video/mp4" />
      </video>
      
      {/* Enhanced Overlay with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 backdrop-blur-md z-10"></div>
      
      {/* Floating Particles Animation */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Back Button with enhanced styling */}
      <button
        onClick={handleBack}
<<<<<<< Updated upstream
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
=======
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 w-12 h-12 sm:w-10 sm:h-10 bg-black/40 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500/80 hover:to-purple-500/80 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5 text-white group-hover:text-white transition-colors duration-300" />
      </button>

      <div className={`px-4 sm:px-6 py-12 sm:py-16 transition-all duration-700 relative z-20 ${entered && !exiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Enhanced Header with animated elements */}
          <div className="relative mb-8 sm:mb-12">
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-300 to-purple-300 bg-clip-text text-transparent mb-8 sm:mb-12 drop-shadow-2xl">
              Work and activities
            </h1>
            
            {/* Floating subtitle */}
            <p className="text-lg sm:text-xl text-white/80 mt-4 animate-fade-in-up">
              Explore my journey and achievements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
>>>>>>> Stashed changes
            {activities.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
<<<<<<< Updated upstream
                    group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 cursor-pointer
                    transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-gray-200/50
                    ${hoveredItem === item.id ? 'ring-4 ring-opacity-50' : ''}
=======
                    group relative bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 cursor-pointer
                    transition-all duration-500 ease-out transform hover:scale-105 active:scale-95
                    hover:shadow-2xl hover:shadow-pink-500/25 border border-white/10
                    ${hoveredItem === item.id ? 'ring-2 ring-opacity-50 ring-white/50' : ''}
>>>>>>> Stashed changes
                  `}
                  style={{
                    '--tw-ring-color': hoveredItem === item.id ? 
                      (item.id === 'certificates' ? '#3b82f6' : 
                       item.id === 'website' ? '#a855f7' : 
                       item.id === 'school' ? '#10b981' :
                       item.id === 'hobby' ? '#f97316' : 'transparent') : 'transparent'
                  } as React.CSSProperties}
                >
                  {/* Enhanced background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  
<<<<<<< Updated upstream
                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} 
                      flex items-center justify-center text-white shadow-lg
                      transform group-hover:scale-110 transition-transform duration-300
=======
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
                    <div className={`
                      w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} 
                      flex items-center justify-center text-white shadow-2xl
                      transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                      group-hover:shadow-lg group-hover:shadow-pink-500/50
>>>>>>> Stashed changes
                    `}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Content with enhanced text */}
                  <div className="relative z-10">
<<<<<<< Updated upstream
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
=======
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-pink-200 transition-colors drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
>>>>>>> Stashed changes
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Enhanced hover effect indicator */}
                  <div className={`
                    absolute bottom-4 left-1/2 transform -translate-x-1/2
                    w-12 h-1 bg-gradient-to-r ${item.color} rounded-full
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    group-hover:w-20 group-hover:h-1.5
                  `} />
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full animate-bounce"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
          
<<<<<<< Updated upstream
          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm animate-pulse">
              Click on any category to explore further
            </p>
=======
          {/* Enhanced Bottom hint */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">
                Click on any category to explore further
              </p>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact and Comment Buttons */}
      <div className="relative z-20 px-4 sm:px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
                     <div className="mb-8">
             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-2xl">
               Let's Connect!
             </h3>
             <p className="text-white/80 text-sm sm:text-base">
               Ready to collaborate or share your thoughts?
             </p>
           </div>
          
          {/* Buttons Grid */}
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {/* Contact Button */}
             <a 
               href="/contact" 
               className="group relative inline-flex items-center justify-center gap-4 px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-base rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/30 border-2 border-white/20 hover:border-white/40 backdrop-blur-md overflow-hidden"
             >
               <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               <span className="group-hover:tracking-wide transition-all duration-300">Contact</span>
               
               {/* Animated glow effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
             </a>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </main>
  )
}


