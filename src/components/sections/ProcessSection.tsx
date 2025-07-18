"use client"

import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  RefreshCw,
  ArrowRight
} from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical specifications",
      details: [
        "Requirement analysis",
        "Technology consultation",
        "Project timeline",
        "Resource planning"
      ],
      color: "from-blue-500 to-cyan-500",
      duration: "1-2 weeks"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Design & Architecture",
      description: "Creating wireframes, UI/UX designs, and system architecture",
      details: [
        "User experience design",
        "System architecture",
        "Database design",
        "API planning"
      ],
      color: "from-purple-500 to-violet-500",
      duration: "1-3 weeks"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Building your application with clean, maintainable, and scalable code",
      details: [
        "Frontend development",
        "Backend development",
        "Database implementation",
        "API integration"
      ],
      color: "from-green-500 to-emerald-500",
      duration: "4-12 weeks"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing to ensure reliability and performance",
      details: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security testing"
      ],
      color: "from-orange-500 to-red-500",
      duration: "1-2 weeks"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Deployment",
      description: "Launching your application with proper monitoring and documentation",
      details: [
        "Production deployment",
        "Performance monitoring",
        "Documentation",
        "Team training"
      ],
      color: "from-pink-500 to-rose-500",
      duration: "1 week"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and feature enhancements",
      details: [
        "Bug fixes",
        "Feature updates",
        "Performance optimization",
        "Technical support"
      ],
      color: "from-indigo-500 to-blue-500",
      duration: "Ongoing"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -inset-[10%] opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fillOpacity="1" fillRule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            My Work Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic approach to deliver exceptional software solutions from concept to completion
          </p>
        </div>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 via-pink-500 to-indigo-500"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative flex-1 max-w-xs"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center z-10`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Card */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mt-32 hover:bg-gray-800/50 transition-all duration-300 group">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 text-white mx-auto`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 text-center">{step.description}</p>
                    
                    <div className={`text-xs font-semibold text-center bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                      {step.duration}
                    </div>

                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mr-2`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-20 -right-6 transform -translate-y-1/2 text-gray-600">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex items-start space-x-4"
              >
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-24 bg-gray-700"></div>
                )}

                {/* Timeline Dot */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <span className={`text-xs font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                  
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mr-2`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized development plan that fits your needs and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start a Project
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}