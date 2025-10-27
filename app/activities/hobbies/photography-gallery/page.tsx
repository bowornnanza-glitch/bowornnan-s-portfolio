"use client"

import { ChevronLeft, Camera, Download, Share2, Heart, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export default function PhotographyGalleryPage() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set())
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    '/images/pt1.jpg': 42,
    '/images/pt2.jpg': 38,
    '/images/pt3.jpg': 56,
    '/images/pt4.jpg': 29,
    '/images/pt5.jpg': 67,
    '/images/pt6.jpg': 45,
    '/images/pt7.jpg': 73,
    '/images/pt8.jpg': 51
  })

  const handleBack = () => {
    router.push('/activities/hobbies')
  }

  const handleImageClick = (imageSrc: string) => {
    if (!imageErrors.has(imageSrc)) {
      setSelectedImage(imageSrc)
    }
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleLike = (imageSrc: string) => {
    const newLikedImages = new Set(likedImages)
    const newLikeCounts = { ...likeCounts }
    
    if (newLikedImages.has(imageSrc)) {
      newLikedImages.delete(imageSrc)
      newLikeCounts[imageSrc] = Math.max(0, newLikeCounts[imageSrc] - 1)
    } else {
      newLikedImages.add(imageSrc)
      newLikeCounts[imageSrc] = (newLikeCounts[imageSrc] || 0) + 1
    }
    
    setLikedImages(newLikedImages)
    setLikeCounts(newLikeCounts)
  }

  const handleDownload = (imageSrc: string) => {
    if (imageErrors.has(imageSrc)) {
      alert('Cannot download image - image not available')
      return
    }
    
    try {
      const link = document.createElement('a')
      link.href = imageSrc
      link.download = imageSrc.split('/').pop() || 'photography-image'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download error:', error)
      alert('Download failed. Please try again.')
    }
  }

  const handleShare = async (imageSrc: string) => {
    if (imageErrors.has(imageSrc)) {
      alert('Cannot share image - image not available')
      return
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Photography Gallery',
          text: 'Check out this amazing photo!',
          url: imageSrc,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(imageSrc)
        alert('Image URL copied to clipboard!')
      } catch (error) {
        console.log('Error copying to clipboard:', error)
        // Final fallback
        prompt('Copy this URL:', imageSrc)
      }
    }
  }

  const handleImageError = (imageSrc: string) => {
    setImageErrors(prev => new Set(prev).add(imageSrc))
  }

  const photographyImages = [
    {
      src: '/images/pt1.jpg',
      alt: 'Sky Photography',
      title: 'Sky Photography',
      description: 'Capturing the beauty of the sky and clouds',
      category: 'Nature'
    },
    {
      src: '/images/pt2.jpg',
      alt: 'Night Sky Photography',
      title: 'Night Sky',
      description: 'Starry night photography under the moonlight',
      category: 'Astronomy'
    },
    {
      src: '/images/pt3.jpg',
      alt: 'Scenic Landscape',
      title: 'Scenic View',
      description: 'Beautiful landscape and scenery photography',
      category: 'Landscape'
    },
    {
      src: '/images/pt4.jpg',
      alt: 'Urban Photography',
      title: 'Urban Photography',
      description: 'City skyline and urban architecture',
      category: 'Urban'
    },
    {
      src: '/images/pt5.jpg',
      alt: 'Nature Photography',
      title: 'Nature Photography',
      description: 'Exploring the beauty of natural landscapes',
      category: 'Nature'
    },
    {
      src: '/images/pt6.jpg',
      alt: 'Cityscape Photography',
      title: 'Cityscape',
      description: 'Urban architecture and city life',
      category: 'Urban'
    },
    {
      src: '/images/pt7.jpg',
      alt: 'Wildlife Photography',
      title: 'Wildlife',
      description: 'Capturing animals in their natural habitat',
      category: 'Wildlife'
    },
    {
      src: '/images/pt8.jpg',
      alt: 'Abstract Art Photography',
      title: 'Abstract Art',
      description: 'Creative and artistic photography',
      category: 'Art'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
                <Camera className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Photography Gallery
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A collection of my photography work, capturing moments and exploring visual storytelling through images
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyImages.map((image, index) => {
              const hasError = imageErrors.has(image.src)
              const isLiked = likedImages.has(image.src)
              
              return (
                <div
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-transparent transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-200/50 overflow-hidden ${
                    hasError ? 'border-red-200 bg-red-50/50' : 'hover:border-pink-200 cursor-pointer'
                  }`}
                >
                  {/* Image Container */}
                  <div 
                    className={`relative aspect-square rounded-xl overflow-hidden mb-4 ${
                      hasError ? 'cursor-default' : 'cursor-pointer'
                    }`} 
                    onClick={() => !hasError && handleImageClick(image.src)}
                  >
                    {hasError ? (
                      // Error state - show placeholder
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-pink-100 flex flex-col items-center justify-center text-center p-4">
                        <AlertCircle className="w-12 h-12 text-red-400 mb-2" />
                        <p className="text-red-600 text-sm font-medium">Image Not Available</p>
                        <p className="text-red-500 text-xs">Failed to load</p>
                      </div>
                    ) : (
                      // Normal image display
                      <>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={() => handleImageError(image.src)}
                          priority={index < 3} // Prioritize first 3 images
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Click hint */}
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view
                        </div>
                      </>
                    )}
                  </div>

                  {/* Image Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {image.description}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        hasError 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-pink-100 text-pink-700'
                      }`}>
                        {image.category}
                      </span>
                    </div>

                    {/* Action Buttons - Always Visible */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLike(image.src)}
                        disabled={hasError}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 ${
                          hasError
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : isLiked
                              ? 'bg-red-100 text-red-600 hover:bg-red-200 shadow-md'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="hidden sm:inline">{isLiked ? 'Liked' : 'Like'}</span>
                        <span className="text-xs font-medium">({likeCounts[image.src] || 0})</span>
                      </button>
                      <button
                        onClick={() => handleDownload(image.src)}
                        disabled={hasError}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 ${
                          hasError
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:shadow-md'
                        }`}
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                      <button
                        onClick={() => handleShare(image.src)}
                        disabled={hasError}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 ${
                          hasError
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-green-100 text-green-600 hover:bg-green-200 hover:shadow-md'
                        }`}
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Share</span>
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
              Click on images to view full size • Use action buttons to interact with photos
            </p>
            {imageErrors.size > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-700 text-sm">
                  ⚠️ Some images failed to load. Please check your internet connection or try refreshing the page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={handleCloseModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 rotate-45" />
            </button>
            <Image
              src={selectedImage}
              alt="Full size image"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              onError={() => {
                setSelectedImage(null)
                alert('Failed to load full-size image')
              }}
            />
          </div>
        </div>
      )}
    </main>
  )
}
