"use client"

import { ChevronLeft, Music, Image as ImageIcon, X } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function MusicGalleryPage() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleBack = () => {
    router.push('/activities/hobbies')
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const galleryImages = [
    { src: '/images/u1.jpg', alt: 'Playing Music 1' },
    { src: '/images/u3.jpg', alt: 'Playing Music 2' },
    { src: '/images/u4.JPG', alt: 'Playing Music 3' },
    { src: '/images/u5.JPG', alt: 'Playing Music 4' },
    { src: '/images/u2.jpg', alt: 'Playing Music 5' },
    { src: '/images/u6.JPG', alt: 'Playing Music 6' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 w-12 h-12 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 active:scale-95 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Music className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Playing Music Gallery
              </h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Moments of practicing instruments and enjoying music
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryImages.map((image) => (
                <div key={image.src} className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => handleImageClick(image.src)}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 active:scale-95"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay with image info - Always visible on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                        <div className="flex items-center gap-2 text-white">
                          <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">{image.alt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="mt-12" />
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Full size image"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}
