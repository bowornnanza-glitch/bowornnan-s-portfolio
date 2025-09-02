"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import WelcomePage from "./components/WelcomePage"
import PageTwo from "./components/PageTwo"

export default function Component() {
  const searchParams = useSearchParams()
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState("welcome")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Check if we should show page 2 directly
    const pageParam = searchParams.get('page')
    if (pageParam === 'about') {
      setCurrentPage("page2")
    }
    
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [searchParams])

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
        <WelcomePage
          isVisible={isVisible}
          isTransitioning={isTransitioning}
          onClick={handlePageTransition}
        />
      )}

      {currentPage === "page2" && (
        <PageTwo onBack={handleGoBack} />
      )}
    </div>
  )
}
