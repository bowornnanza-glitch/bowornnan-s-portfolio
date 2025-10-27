"use client"

<<<<<<< Updated upstream
import { ChevronLeft, Globe, ExternalLink, Code, Palette, Smartphone } from 'lucide-react'
=======
import { ChevronLeft, Globe, ExternalLink, Code, Palette, Terminal, GitBranch, Zap, Cpu, Database, Layers } from 'lucide-react'
>>>>>>> Stashed changes
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function WebsiteCreationPage() {
  const router = useRouter()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [hoveredButton, setHoveredButton] = useState(false)


  // Page entry animation
  useEffect(() => {
    setEntered(true)
  }, [])



  const handleBack = () => {
    setExiting(true)
    setTimeout(() => {
      router.push('/activities')
    }, 300)
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
    <main className={`min-h-screen relative overflow-hidden transition-all duration-500 ease-out ${
      entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${exiting ? 'opacity-0 -translate-y-8' : ''}`}>
      {/* Coding Theme Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        
        {/* Matrix-like code rain effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400/20 text-xs font-mono animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </div>
          ))}
        </div>

        {/* Floating tech icons */}
        <div className="absolute top-20 right-20 text-blue-400/30 animate-bounce">
          <Terminal className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-20 text-cyan-400/30 animate-bounce delay-1000">
          <GitBranch className="w-12 h-12" />
        </div>
        <div className="absolute top-1/2 left-20 text-purple-400/30 animate-bounce delay-500">
          <Cpu className="w-14 h-14" />
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className={`fixed top-6 left-6 z-50 w-12 h-12 bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out group ${
          hoveredButton 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-110 shadow-blue-500/50' 
            : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:scale-105'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 transition-all duration-500 ${
          hoveredButton ? 'text-white rotate-12' : 'text-gray-300 group-hover:text-white'
        }`} />
        {hoveredButton && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20"></div>
        )}
      </button>

      <div className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Globe className="w-10 h-10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30"></div>
              </div>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
                  Website Creation
                </h1>
                <div className="absolute -top-2 -right-2">
                  <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
<<<<<<< Updated upstream
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Showcasing my web development projects, from simple landing pages to complex full-stack applications
=======
            

            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-fade-in-up delay-300">
            Before I can create a website I learned from a kind volunteer named Mr. Zsolt Kallos who came to teach at Mechai Bamboo School.
>>>>>>> Stashed changes
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
                    
<<<<<<< Updated upstream
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
=======
                                         {/* Action buttons */}
                     <div className="flex gap-3">
                       {project.id === 'Mechai Bamboo School' && (
                         <a 
                           href="https://mechaibambooschool.vercel.app/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                         >
                           <ExternalLink className="w-4 h-4" />
                           Go to the website
                         </a>
                       )}
                       {project.id === 'bowornnan' && (
                         <a 
                           href="/" 
                           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                         >
                           <ExternalLink className="w-4 h-4" />
                           Go to the website
                         </a>
                       )}
                     </div>
>>>>>>> Stashed changes
                  </div>
                </div>
              )
            })}
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
