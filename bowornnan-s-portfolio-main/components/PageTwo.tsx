"use client"

import { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { ChevronLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'

type PageTwoProps = {
  onBack: () => void
}

export default function PageTwo({ onBack }: PageTwoProps) {
  const LINES: string[] = [
    "hello I'm Petch",
    "I'm about to graduate",
    "from Mechai Bamboo School.",
    "I plan to continue my studies",
    "in the Cybersecurity programme",
    "at Harbour.Space @ UTCC",
    "because I want to become",
    "a cybersecurity professional",
    "not just a \"cool hacker\"",
    "like in the movies,",
    "but someone who protects",
    "data, people, organizations,",
    "and my country.",
    "And I want to train",
    "in cybersecurity skills",
    "at Harbour.Space @ UTCC.",
  ]

  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>([])
  const [hasReachedEnd, setHasReachedEnd] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    // Initialize reveal state to false for each line
    setVisible((prev) => {
      if (prev.length) return prev
      const container = document.getElementById('lines-container')
      const count = container ? container.querySelectorAll('p[data-line]').length : 0
      return Array(count).fill(false)
    })
  }, [])

  // Scroll handler to reveal lines and set active line
  useEffect(() => {
    let ticking = false

    const updateOnScroll = () => {
      ticking = false
      const currentY = window.scrollY || window.pageYOffset || 0
      setScrollY(currentY)

      const anchor = window.innerHeight * 0.18
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      setVisible((prev) => {
        const next = prev.slice()
        lineRefs.current.forEach((el, idx) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          const dist = Math.abs(rect.top - anchor)
          if (dist < bestDist) {
            bestDist = dist
            bestIdx = idx
          }
          if (!next[idx] && rect.top < window.innerHeight * 0.9) {
            next[idx] = true
          }
        })
        return next
      })

      setActiveIndex(bestIdx)
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll)
        ticking = true
      }
    }

    updateOnScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const getParallaxOffset = (idx: number) => {
    const base = idx * 2
    const offset = scrollY * 0.03
    return Math.min(40, Math.max(0, base + offset))
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 bg-fixed"
      style={{
        backgroundImage: "url('/images/bg2p.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay for stronger blur and darkening */}
      <div className="fixed inset-0 pointer-events-none bg-black/40 backdrop-blur-md"></div>
      {/* Additional gradient overlay for extra fade */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-pink-50/20 via-white/20 to-purple-50/20"></div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

      {/* Page 2 Content */}
      <div className="relative z-10 px-6 pt-24 pb-24">
        {/* Hero section (only visible in first viewport) */}
        <div className="min-h-[90svh] md:min-h-[92vh] w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="mt-4 text-white/80 text-sm md:text-base animate-pulse inline-flex items-center gap-2">
              Scroll down to read more
              <span className="inline-flex items-center justify-center">
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 opacity-90 animate-bounce" />
              </span>
            </p>
            
            {/* Work and Activities Button positioned near About Me */}
            <div className="mt-8">
              <Link
                href="/activities"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-green-600 hover:to-emerald-600"
              >
                <span className="text-lg">Work and Activities</span>
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/70">
            <Image
              src="/images/o1.jpg"
              alt="Profile"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Lines section (reveals on scroll) */}
        <div id="lines-container" className="max-w-3xl mx-auto text-left space-y-8 md:space-y-10">
          {LINES.map((text, idx) => {
            const isActive = idx === activeIndex
            const isRevealed = visible[idx]
            const parallax = getParallaxOffset(idx)
            return (
              <p
                key={idx}
                data-line
                ref={(el) => { lineRefs.current[idx] = el }}
                className={`text-3xl sm:text-4xl md:text-5xl drop-shadow-lg transition-all duration-300 ease-out ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${idx === activeIndex ? 'scale-[1.05] text-white' : 'scale-100 text-white/80'}`}
                style={{ transform: `translateY(${parallax}px)` }}
              >
                {text}
              </p>
            )
          })}
        </div>

        {/* Contact and Work and Activities Buttons */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-purple-600"
            >
              <span className="text-lg">Contact</span>
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
            >
              <span className="text-lg">Work and Activities</span>
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom actions (appear after reading finished) */}
        <div className={`mt-20 flex items-center justify-center gap-4 transition-opacity duration-700 ${hasReachedEnd ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <a href="/contact" className="px-6 py-3 rounded-full bg-white/80 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 shadow-lg transition-colors">Contact</a>
          <a href="/activities" className="px-6 py-3 rounded-full bg-white/80 text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 shadow-lg transition-colors">Work and activities</a>
        </div>
      </div>
    </div>
  )
}


