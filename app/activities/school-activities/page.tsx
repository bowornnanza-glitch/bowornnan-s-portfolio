"use client"

<<<<<<< Updated upstream
import { ChevronLeft, GraduationCap, Users, Trophy, Calendar, MapPin } from 'lucide-react'
=======
import { ChevronLeft, Code, Shield, Database, Globe, Smartphone, Brain, Zap, BookOpen, GraduationCap, Lightbulb, Target, Clock, Star, X } from 'lucide-react'
>>>>>>> Stashed changes
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SkillsPage() {
  const router = useRouter()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [hoveredButton, setHoveredButton] = useState(false)
  const [floatingIcons, setFloatingIcons] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  // Page entry animation
  useEffect(() => {
    setEntered(true)
    
    // Generate floating icons positions
    const icons = Array.from({length: 8}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setFloatingIcons(icons)
  }, [])

  const handleBack = () => {
    setExiting(true)
    setTimeout(() => {
      router.push('/activities')
    }, 300)
  }

<<<<<<< Updated upstream
  const activities = [
    {
      id: 'student-council',
      title: 'Student Council Member',
      role: 'Vice President',
      period: '2023 - 2024',
      description: 'Led student initiatives and organized school events',
      achievements: ['Organized annual school festival', 'Improved student feedback system', 'Coordinated with teachers and administration'],
      color: 'from-blue-500 to-cyan-500',
      icon: Users,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'cybersecurity-club',
      title: 'Cybersecurity Club',
      role: 'Founder & Leader',
      period: '2022 - Present',
      description: 'Established and led the school\'s first cybersecurity interest group',
      achievements: ['Organized CTF workshops', 'Taught basic security concepts', 'Participated in regional competitions'],
      color: 'from-green-500 to-emerald-500',
      icon: Shield,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'academic-excellence',
      title: 'Academic Excellence',
      role: 'Top Student',
      period: '2021 - 2024',
      description: 'Consistently maintained high academic performance',
      achievements: ['GPA 3.9/4.0', 'Subject awards in Math & Science', 'Represented school in competitions'],
      color: 'from-purple-500 to-pink-500',
      icon: Trophy,
      location: 'Mechai Bamboo School'
    },
    {
      id: 'volunteer-work',
      title: 'Community Service',
      role: 'Volunteer Coordinator',
      period: '2022 - 2024',
      description: 'Organized community outreach and environmental projects',
      achievements: ['Tree planting campaigns', 'Elderly care visits', 'Local community workshops'],
      color: 'from-orange-500 to-red-500',
      icon: Heart,
      location: 'Local Community'
=======


  const skills = [
    {
      id: 'chatgpt',
      title: 'ChatGPT',
      level: 'Intermediate',
      description: 'Proficient in using ChatGPT for AI assistance, coding help, and problem solving',
      capabilities: ['AI Assistance', 'Code Review', 'Problem Solving', 'Content Creation', 'Learning Support'],
      color: 'from-green-500 to-emerald-500',
      icon: Brain,
      experience: '2+ years',
      images: ['/images/chatgpt-1.jpg', '/images/chatgpt-2.jpg', '/images/chatgpt-3.jpg']
    },
    {
      id: 'cursor',
      title: 'Cursor AI',
      level: 'Beginner',
      description: 'Expert in using Cursor AI for enhanced coding productivity and AI-powered development',
      capabilities: ['AI Code Completion', 'Code Generation', 'Refactoring', 'Debugging', 'Project Management'],
      color: 'from-blue-500 to-cyan-500',
      icon: Code,
      experience: '2+ years',
      images: ['/images/cursor-1.jpg', '/images/cursor-2.jpg', '/images/cursor-3.jpg']
    },
    {
      id: 'github',
      title: 'GitHub',
      level: 'Beginner',
      description: 'Skilled in using GitHub for version control, collaboration, and project management',
      capabilities: ['Version Control', 'Collaboration', 'Project Management', 'Code Review', 'CI/CD'],
      color: 'from-gray-800 to-gray-900',
      icon: Database,
      experience: '3+ years',
      images: ['/images/github-1.jpg', '/images/github-2.jpg', '/images/github-3.jpg']
    },
    {
      id: 'codepen',
      title: 'CodePen',
      level: 'Beginner',
      description: 'Experience with CodePen for frontend development, prototyping, and code sharing',
      capabilities: ['Frontend Prototyping', 'Code Sharing', 'CSS Experiments', 'JavaScript Testing', 'Community Learning'],
      color: 'from-black to-gray-800',
      icon: Globe,
      experience: '2+ years',
      images: ['/images/codepen-1.jpg', '/images/codepen-2.jpg', '/images/codepen-3.jpg']
    },
    {
      id: 'v0',
      title: 'v0.dev',
      level: 'Beginner',
      description: 'Proficient in using v0.dev for AI-powered UI generation and rapid prototyping',
      capabilities: ['AI UI Generation', 'Rapid Prototyping', 'Component Design', 'Code Export', 'Design Iteration'],
      color: 'from-purple-500 to-pink-500',
      icon: Smartphone,
      experience: '1+ years',
      images: ['/images/v0-1.jpg', '/images/v0-2.jpg', '/images/v0-3.jpg']
    },
    {
      id: 'tinkercad',
      title: 'Tinkercad',
      level: 'Intermediate',
      description: 'Skilled in using Tinkercad for 3D modeling, circuit design, and prototyping',
      capabilities: ['3D Modeling', 'Circuit Design', 'Prototyping', '3D Printing', 'Educational Projects'],
      color: 'from-orange-500 to-red-500',
      icon: Zap,
      experience: '2+ years',
      images: ['/images/tinkercad-1.jpg', '/images/tinkercad-2.jpg', '/images/tinkercad-3.jpg']
    },
    {
      id: 'canva',
      title: 'Canva',
      level: 'Intermediate',
      description: 'Expert in using Canva for graphic design, presentations, and visual content creation',
      capabilities: ['Graphic Design', 'Presentation Design', 'Social Media Graphics', 'Branding', 'Visual Communication'],
      color: 'from-blue-500 to-purple-500',
      icon: Smartphone,
      experience: '3+ years',
      images: ['/images/canva-1.jpg', '/images/canva-2.jpg', '/images/canva-3.jpg']
    },
    {
      id: 'blynk',
      title: 'Blynk',
      level: 'Beginner',
      description: 'Experience with Blynk for IoT development, sensor integration, and smart system control',
      capabilities: ['IoT Development', 'Sensor Integration', 'Remote Monitoring', 'Smart Home Systems', 'Data Visualization'],
      color: 'from-teal-500 to-blue-500',
      icon: Database,
      experience: '1+ years',
      images: ['/images/blynk-1.jpg', '/images/blynk-2.jpg', '/images/blynk-3.jpg']
    },
    {
      id: 'photopea',
      title: 'Photopea',
      level: 'Beginner',
      description: 'Skilled in using Photopea for image editing, graphic design, and photo manipulation',
      capabilities: ['Image Editing', 'Graphic Design', 'Photo Manipulation', 'Layer Management', 'File Format Support'],
      color: 'from-indigo-500 to-purple-500',
      icon: Smartphone,
      experience: '2+ years',
      images: ['/images/photopea-1.jpg', '/images/photopea-2.jpg', '/images/photopea-3.jpg']
    },
    {
      id: 'html',
      title: 'HTML',
      level: 'Beginner',
      description: 'Expert in HTML markup, semantic structure, and web accessibility standards',
      capabilities: ['Semantic HTML', 'Web Accessibility', 'SEO Optimization', 'Form Design', 'Document Structure'],
      color: 'from-orange-500 to-red-500',
      icon: Globe,
      experience: '3+ years',
      images: ['/images/html-1.jpg', '/images/html-2.jpg', '/images/html-3.jpg']
    },
    {
      id: 'css',
      title: 'CSS',
      level: 'Beginner',
      description: 'Proficient in CSS styling, responsive design, and modern layout techniques',
      capabilities: ['Responsive Design', 'CSS Grid & Flexbox', 'Animations', 'Custom Properties', 'Cross-browser Compatibility'],
      color: 'from-blue-500 to-cyan-500',
      icon: Globe,
      experience: '3+ years',
      images: ['/images/css-1.jpg', '/images/css-2.jpg', '/images/css-3.jpg']
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      level: 'Beginner',
      description: 'Expert in JavaScript programming, modern ES6+ features, and web application development',
      capabilities: ['ES6+ Features', 'DOM Manipulation', 'Async Programming', 'Modern Frameworks', 'Web APIs'],
      color: 'from-yellow-500 to-orange-500',
      icon: Code,
      experience: '3+ years',
      images: ['/images/javascript-1.jpg', '/images/javascript-2.jpg', '/images/javascript-3.jpg']
    },
    {
      id: 'python',
      title: 'Python',
      level: 'Beginner',
      description: 'Skilled in Python programming for automation, data processing, and application development',
      capabilities: ['Automation', 'Data Processing', 'Web Development', 'Scripting', 'Libraries & Frameworks'],
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      experience: '2+ years',
      images: ['/images/python-1.jpg', '/images/python-2.jpg', '/images/python-3.jpg']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      level: 'Beginner',
      description: 'Understanding of cybersecurity fundamentals, network security, and ethical hacking principles',
      capabilities: ['Network Security', 'Basic Penetration Testing', 'Security Awareness', 'Password Security', 'Social Engineering Prevention'],
      color: 'from-red-500 to-orange-500',
      icon: Shield,
      experience: '2+ years',
      images: ['/images/cyber-1.jpg', '/images/cyber-2.jpg', '/images/cyber-3.jpg']
    },
    {
      id: 'electronics',
      title: 'Electronics & Circuits',
      level: 'Intermediate',
      description: 'Practical knowledge of electrical circuits, both AC and DC, and basic electronics components',
      capabilities: ['AC Circuit Design', 'DC Circuit Design', 'Component Selection', 'Circuit Analysis', 'Basic Troubleshooting', 'Safety Protocols'],
      color: 'from-yellow-500 to-orange-500',
      icon: Zap,
      experience: '2+ years',
      images: ['/images/electronics-1.jpg', '/images/electronics-2.jpg', '/images/electronics-3.jpg']
>>>>>>> Stashed changes
    }
  ]

  return (
    <main className={`min-h-screen relative overflow-hidden transition-all duration-500 ease-out ${
      entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${exiting ? 'opacity-0 -translate-y-8' : ''}`}>
      {/* Learning Theme Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Floating learning icons */}
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-blue-200 animate-bounce"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${icon.delay}s`,
              animationDuration: '3s'
            }}
          >
            {icon.id % 4 === 0 && <BookOpen className="w-8 h-8" />}
            {icon.id % 4 === 1 && <GraduationCap className="w-8 h-8" />}
            {icon.id % 4 === 2 && <Lightbulb className="w-8 h-8" />}
            {icon.id % 4 === 3 && <Target className="w-8 h-8" />}
          </div>
        ))}

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className={`fixed top-6 left-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out group ${
          hoveredButton 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-110 shadow-blue-500/50' 
            : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 transition-all duration-500 ${
          hoveredButton ? 'text-white rotate-12' : 'text-gray-600 group-hover:text-white'
        }`} />
        {hoveredButton && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
        )}
      </button>

      <div className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-2xl">
                <GraduationCap className="w-10 h-10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"></div>
              </div>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
                  My Skills
                </h1>
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            

            
            <p className="text-gray-700 text-lg max-w-3xl mx-auto animate-fade-in-up delay-300">
              Technical skills and capabilities I have developed and mastered over time through continuous learning and practice
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon
              return (
                                 <div
                   key={skill.id}
                   onMouseEnter={() => setHoveredSkill(skill.id)}
                   onMouseLeave={() => setHoveredSkill(null)}
                   className={`
                     group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-transparent
                     hover:border-blue-300/50 transition-all duration-500 ease-out transform hover:scale-105
                     hover:shadow-2xl hover:shadow-blue-200/50 overflow-hidden
                     ${hoveredSkill === skill.id ? 'ring-4 ring-blue-400/30' : ''}
                     animate-fade-in-up
                   `}
                   style={{ animationDelay: `${idx * 100}ms` }}
                 >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
<<<<<<< Updated upstream
                    {/* Header with icon and period */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {activity.period}
                      </span>
                    </div>
=======
                                         {/* Header with icon */}
                     <div className="flex items-start justify-between mb-6">
                                               <div className={`w-12 h-12 rounded-md bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                       <div className="text-right">
                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${skill.color} text-white shadow-md`}>
                           {skill.level}
                         </span>
                       </div>
                     </div>
>>>>>>> Stashed changes
                    
                                         {/* Title */}
                     <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                       {skill.title}
                     </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {skill.description}
                    </p>
                    
                    
<<<<<<< Updated upstream
                    {/* Action buttons */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <Calendar className="w-4 h-4" />
                        Timeline
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors">
                        <Trophy className="w-4 h-4" />
                        Certificates
                      </button>
                    </div>
=======
                    
                    
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
