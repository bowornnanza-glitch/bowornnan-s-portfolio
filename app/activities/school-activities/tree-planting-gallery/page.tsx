"use client"

import { ChevronLeft, TreePine, Image as ImageIcon } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function TreePlantingGalleryPage() {
  const router = useRouter()

  const handleBack = () => {
    router.push('/activities/school-activities')
  }

  const galleryImages = [
    { src: '/images/placeholder.jpg', alt: 'Tree Planting Activity 1' },
    { src: '/images/placeholder.jpg', alt: 'Tree Planting Activity 2' },
    { src: '/images/placeholder.jpg', alt: 'Tree Planting Activity 3' },
    { src: '/images/placeholder.jpg', alt: 'Tree Planting Activity 4' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 w-12 h-12 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 active:scale-95 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <TreePine className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                Tree Planting Gallery
              </h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Capturing the moments of environmental conservation and community service through tree planting activities
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {galleryImages.map((image, idx) => (
                <div key={image.src} className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 active:scale-95"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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

          {/* Activity Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">About Tree Planting Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-700 mb-3">Environmental Impact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Carbon dioxide absorption and oxygen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Soil erosion prevention and water conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Biodiversity enhancement and habitat creation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-700 mb-3">Community Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Educational opportunities for students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Community engagement and collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Sustainable development practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="mt-12" />
        </div>
      </div>
    </main>
  )
}
