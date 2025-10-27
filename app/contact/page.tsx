"use client"

import { ChevronLeft, Mail, Phone, MessageCircle, Facebook, Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
<<<<<<< Updated upstream
=======
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 50)
    return () => clearTimeout(t)
  }, [])
>>>>>>> Stashed changes

  const handleBack = () => {
    // Navigate to home and trigger page 2
    router.push('/?page=about')
  }

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'bowornnanza@email.com',
      href: 'mailto:bowornnanza@email.com',
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      description: 'Send me an email anytime'
    },
    {
      id: 'phone',
      title: 'Phone',
      value: '080-006-4881',
      href: 'tel:+660800064881',
      icon: Phone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Call or WhatsApp me'
    },
    {
      id: 'line',
      title: 'Line',
      value: '@1347600022686160451',
      href: 'https://line.me/ti/p/@1347600022686160451',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Chat with me on Line'
    }
  ]

  const socialMedia = [
    {
      id: 'facebook',
      title: 'Facebook',
      href: 'https://www.facebook.com/ban.peixh?locale=th_TH',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      href: 'https://www.instagram.com/p_eixh/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Beautiful Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </button>

<<<<<<< Updated upstream
      <div className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Contact
          </h1>
          <div className="space-y-6">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Email</h3>
              <a className="text-purple-600 hover:text-purple-800 transition-colors" href="mailto:bowornnanza@email.com">bowornnanza@email.com</a>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone</h3>
              <a className="text-purple-600 hover:text-purple-800 transition-colors" href="tel:+660800064881">080-006-4881</a>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.346 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  <a className="text-purple-600 hover:text-purple-800 transition-colors" href="https://line.me/ti/p/@1347600022686160451" target="_blank" rel="noreferrer">Line</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <a className="text-purple-600 hover:text-purple-800 transition-colors" href="https://www.facebook.com/ban.peixh?locale=th_TH" target="_blank" rel="noreferrer">Facebook</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  <a className="text-purple-600 hover:text-purple-800 transition-colors" href="https://www.instagram.com/p_eixh/" target="_blank" rel="noreferrer">Instagram</a>
=======
      <div className={`px-6 py-16 transition-all duration-700 relative z-10 ${entered && !exiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-2xl">
                <Heart className="w-10 h-10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 to-cyan-400 animate-ping opacity-30"></div>
              </div>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in-up">
                  Let's Connect!
                </h1>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
              I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, idx) => {
              const IconComponent = method.icon
              return (
                <div
                  key={method.id}
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                  className={`
                    group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-transparent
                    hover:border-purple-300/50 transition-all duration-500 ease-out transform hover:scale-105
                    hover:shadow-2xl hover:shadow-purple-200/50 cursor-pointer overflow-hidden
                    ${hoveredContact === method.id ? 'ring-4 ring-purple-400/30' : ''}
                    animate-fade-in-up
                  `}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => window.open(method.href, '_blank')}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                      {method.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors">
                      {method.description}
                    </p>
                    
                    {/* Value */}
                    <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      {method.value}
                    </div>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${method.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-20`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 animate-fade-in-up delay-400">
              Follow Me on Social Media
            </h2>
            
            <div className="flex justify-center gap-6">
              {socialMedia.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border-2 border-transparent
                      hover:border-purple-300/50 transition-all duration-500 ease-out transform hover:scale-110
                      hover:shadow-2xl hover:shadow-purple-200/50 cursor-pointer overflow-hidden
                      animate-fade-in-up
                    `}
                    style={{ animationDelay: `${400 + idx * 100}ms` }}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                        {social.title}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-2 mt-2 text-purple-600 group-hover:text-purple-700 transition-colors">
                        <span className="text-sm">Visit</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up delay-600">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-lg">
              <Heart className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Looking forward to connecting with you!</span>
              <Heart className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


