"use client"

import { ChevronLeft, Camera, X, ChevronRight, ChevronLeft as ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DroneGalleryPage() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleBack = () => {
    router.push('/activities/hobbies')
  }

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedImageIndex(0)
  }

  const nextImage = () => {
    if (selectedImageIndex < 1) { // DF1, DF2 = 2 รูป
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const droneImages = [
    {
      id: 'df1',
      src: '/images/df1.JPG',
      alt: 'Drone Flying 1',
      title: 'Drone Flying Session 1',
      description: 'Aerial photography and drone piloting practice'
    },
    {
      id: 'df2',
      src: '/images/df2.JPG',
      alt: 'Drone Flying 2',
      title: 'Drone Flying Session 2',
      description: 'Drone training and school activities'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <Camera className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Drone Flying Gallery
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore my drone flying journey, aerial photography, and piloting experiences
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {droneImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image.src, index)}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-transparent hover:border-indigo-300 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200/50 cursor-pointer overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Image */}
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Image failed to load:', e.currentTarget.src)
                        e.currentTarget.src = '/images/placeholder.jpg'
                      }}
                    />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {image.description}
                  </p>
                  
                  {/* Click hint */}
                  <div className="mt-4 flex items-center gap-2 text-indigo-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4" />
                    <span>Click to view larger</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm animate-pulse">
              Click on any image to view it in full size
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
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

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              disabled={selectedImageIndex === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                selectedImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextImage}
              disabled={selectedImageIndex === 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                selectedImageIndex === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={droneImages[selectedImageIndex]?.src || ''}
                alt={droneImages[selectedImageIndex]?.alt || 'Drone Image'}
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={(e) => {
                  console.error('Modal image failed to load:', e.currentTarget.src)
                  e.currentTarget.src = '/images/placeholder.jpg'
                }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-1">
                {droneImages[selectedImageIndex]?.title}
              </h3>
              <p className="text-sm text-gray-200">
                {droneImages[selectedImageIndex]?.description}
              </p>
              <div className="mt-2 text-xs text-gray-300">
                {selectedImageIndex + 1} / {droneImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
