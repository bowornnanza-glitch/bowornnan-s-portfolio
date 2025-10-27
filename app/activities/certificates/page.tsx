"use client"

<<<<<<< Updated upstream
import { ChevronLeft, Award, Download, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CertificatesPage() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
=======
import { ChevronLeft, Award, X, Sparkles } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function CertificatesPage() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [hoveredButton, setHoveredButton] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  // Page entry animation
  useEffect(() => {
    setEntered(true)
  }, [])
>>>>>>> Stashed changes

  const handleBack = () => {
    setExiting(true)
    setTimeout(() => {
      router.push('/activities')
    }, 300)
  }

<<<<<<< Updated upstream
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
=======
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Close modal on Escape key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedImage) {
      closeModal()
    }
  }

  // Add keyboard event listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  const galleryImages: string[] = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
    '/images/10.png',
    '/images/11.png',
    '/images/12.png',
    '/images/13.png',
    '/images/14.png',
    '/images/15.jpg'  // เปลี่ยนเป็น .jpg ตามไฟล์ที่คุณเพิ่ม
>>>>>>> Stashed changes
  ]

  return (
    <main className={`min-h-screen relative overflow-hidden transition-all duration-500 ease-out ${
      entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${exiting ? 'opacity-0 -translate-y-8' : ''}`}>
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg 3.1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className={`fixed top-6 left-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out group ${
          hoveredButton 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-110 shadow-blue-500/50' 
            : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:scale-105'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 transition-all duration-500 ${
          hoveredButton ? 'text-white rotate-12' : 'text-gray-600 group-hover:text-white'
        }`} />
                            {hoveredButton && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20"></div>
                    )}
      </button>

      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in-up">
                             <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                 <Award className="w-10 h-10" />
               </div>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl animate-fade-in-up">
                  Certificates
                </h1>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
<<<<<<< Updated upstream
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
=======
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-lg animate-fade-in-up delay-200">
            Certification of activities from various competitions and participation in training
            </p>
          </div>

                    {/* Certificates Gallery (Images 1 - 12) */}
          <div className="mb-12 relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center drop-shadow-lg animate-fade-in-up delay-300">My Certificates</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleryImages.map((src, idx) => (
                <div 
                  key={src} 
                  onMouseEnter={() => setHoveredImage(src)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-xl cursor-pointer transition-all duration-500 ease-out transform ${
                    hoveredImage === src 
                      ? 'scale-110 shadow-2xl shadow-blue-500/30 ring-4 ring-blue-400/50' 
                      : 'hover:scale-105 hover:shadow-2xl'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => openModal(src)}
                >
                  <Image
                    src={src}
                    alt={`Certificate ${idx + 1}`}
                    width={500}
                    height={350}
                    className={`w-full h-36 sm:h-40 md:h-44 object-cover transition-transform duration-500 ${
                      hoveredImage === src ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
                    hoveredImage === src ? 'opacity-100' : ''
                  }`}>
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-800">
                        Certificate {idx + 1}
                      </div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  {hoveredImage === src && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></div>
                  )}
>>>>>>> Stashed changes
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          onClick={closeModal}
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="Certificate Full View"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
