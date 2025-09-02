"use client"

import { ChevronLeft, Award, Download, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CertificatesPage() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleBack = () => {
    router.push('/activities')
  }

  const certificates = [
    {
      id: 'cybersecurity-basic',
      title: 'Cybersecurity Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      description: 'Basic cybersecurity concepts and network security principles',
      category: 'Cybersecurity',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'python-programming',
      title: 'Python Programming',
      issuer: 'Codecademy',
      date: '2023',
      description: 'Python programming fundamentals and object-oriented programming',
      category: 'Programming',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'web-development',
      title: 'Web Development Basics',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'HTML, CSS, and JavaScript fundamentals',
      category: 'Web Development',
      color: 'from-purple-500 to-pink-500'
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Certificates
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements in cybersecurity, programming, and web development
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-transparent
                  hover:border-opacity-50 transition-all duration-500 ease-out transform hover:scale-105
                  hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer
                  ${hoveredCard === cert.id ? 'ring-4 ring-opacity-30' : ''}
                `}
                style={{
                  '--tw-ring-color': hoveredCard === cert.id ? 
                    (cert.color.includes('blue') ? '#3b82f6' : 
                     cert.color.includes('green') ? '#10b981' : '#a855f7') : 'transparent'
                } as React.CSSProperties}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 bg-gradient-to-r ${cert.color}`}>
                    {cert.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {cert.title}
                  </h3>
                  
                  {/* Issuer */}
                  <p className="text-gray-600 mb-2 font-medium">
                    {cert.issuer}
                  </p>
                  
                  {/* Date */}
                  <p className="text-gray-500 text-sm mb-3">
                    {cert.date}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                      <Download className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm animate-pulse">
              Hover over certificates to see actions
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
