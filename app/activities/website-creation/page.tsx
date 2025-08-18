"use client"

import { ChevronLeft, Globe, ExternalLink, Code, Palette, Smartphone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function WebsiteCreationPage() {
  const router = useRouter()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const handleBack = () => {
    router.push('/activities')
  }

  const projects = [
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'Modern portfolio website built with Next.js and Tailwind CSS',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      status: 'Live',
      color: 'from-purple-500 to-pink-500',
      icon: Palette,
      features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'SEO Optimized']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'In Development',
      color: 'from-blue-500 to-cyan-500',
      icon: ShoppingCart,
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Inventory Management']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Website',
      description: 'Landing page for mobile application with modern UI/UX',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      status: 'Completed',
      color: 'from-green-500 to-emerald-500',
      icon: Smartphone,
      features: ['Progressive Web App', 'Mobile-First Design', 'Interactive Elements', 'Fast Loading']
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Globe className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Website Creation
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Showcasing my web development projects, from simple landing pages to complex full-stack applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`
                    group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-transparent
                    hover:border-opacity-50 transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer overflow-hidden
                    ${hoveredProject === project.id ? 'ring-4 ring-opacity-30' : ''}
                  `}
                  style={{
                    '--tw-ring-color': hoveredProject === project.id ? 
                      (project.color.includes('purple') ? '#a855f7' : 
                       project.color.includes('blue') ? '#3b82f6' : '#10b981') : 'transparent'
                  } as React.CSSProperties}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with icon and status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-gray-600 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <Code className="w-4 h-4" />
                        Source Code
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
              Hover over projects to see details and actions
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Custom icon component for shopping cart
function ShoppingCart(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
    </svg>
  )
}
