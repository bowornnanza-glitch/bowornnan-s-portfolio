"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft } from 'lucide-react'

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState("welcome")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handlePageTransition = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage("page2") // เปลี่ยนไปหน้า Page 2
      setIsTransitioning(false)
    }, 800)
  }

  const handleGoBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage("welcome") // กลับไปหน้า Welcome
      setIsTransitioning(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {currentPage === "welcome" && (
        <div
          onClick={handlePageTransition}
          className="min-h-screen flex flex-col items-center justify-center px-4 relative cursor-pointer"
          style={{
            backgroundImage: "url('/images/school-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background overlay for blur and darkening effect */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

          {/* Additional gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white/60 to-purple-50/80"></div>

          <div
            className={`text-center transition-all duration-1000 relative z-10 ${
              isTransitioning
                ? "opacity-0 translate-y-[-100px] scale-110"
                : isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Profile Photo */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/70 backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Welcome Text */}
            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-wide"
              style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              Welcome To My
            </h2>

            {/* Portfolio Website */}
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
              Portfolio Website
            </h1>

            {/* Tagline */}
            <p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-md mx-auto leading-relaxed"
              style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              By Mr.Bowornnan Phoomisa ✨
            </p>

            {/* Click anywhere hint */}
            <p className="text-sm text-white/70 animate-pulse drop-shadow-md">Click anywhere to continue</p>
          </div>
        </div>
      )}

      {currentPage === "page2" && (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="fixed top-6 left-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Page 2 Content */}
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                หน้า 2
              </h1>
              <p className="text-xl text-gray-600">หน้านี้ว่างเปล่า</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
