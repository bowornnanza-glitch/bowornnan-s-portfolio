"use client"

import Image from "next/image"

type WelcomePageProps = {
  isVisible: boolean
  isTransitioning: boolean
  onClick: () => void
}

export default function WelcomePage({ isVisible, isTransitioning, onClick }: WelcomePageProps) {
  return (
    <div
      onClick={onClick}
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
              src="/images/o1.jpg"
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
  )
}


