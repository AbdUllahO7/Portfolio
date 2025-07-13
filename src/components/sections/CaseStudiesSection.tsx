"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  ExternalLink, 
  Code, 
  Users, 
  Clock, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)

  const caseStudies = [
    {
      id: 1,
      title: "LayandDent - Dental E-Commerce Platform",
      subtitle: "Leading Saudi dental supplies company",
      image: "/assets/images/Layan/Layan-1.png",
      category: "E-Commerce",
      duration: "1 months",
      team: "Solo Developer",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
      problem: "LayandDent needed a modern e-commerce platform to showcase and sell dental equipment and supplies to healthcare professionals across Saudi Arabia.",
      solution: "Developed a comprehensive e-commerce solution with product catalog, inventory management, user authentication, and payment integration.",
      results: [
        "40% increase in online sales",
        "Improved user experience",
        "Mobile-responsive design",
        "Integrated payment system"
      ],
      features: [
        "Product catalog with advanced filtering",
        "User account management",
        "Shopping cart and checkout",
        "Admin panel for inventory",
        "Arabic/English language support",
        "Mobile-responsive design"
      ],
      link: "https://layan-medical.vercel.app/",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Amwall - Financial Consulting Platform",
      subtitle: "Business consultant for foreign companies in Turkey",
      image: "/assets/images/Amwall/Amwall-1.png",
      category: "Business Platform",
      duration: "1 months",
      team: "Solo Developer",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      problem: "Amwall needed a professional platform to showcase their financial and tax consulting services for foreign companies operating in Turkey.",
      solution: "Created a modern, professional website with service showcases, client portal, and multilingual support for Turkish and English speakers.",
      results: [
        "Professional online presence",
        "Increased client inquiries by 60%",
        "Multilingual support",
        "SEO optimized"
      ],
      features: [
        "Service portfolio display",
        "Client testimonials",
        "Contact forms",
        "Multilingual support (TR/EN)",
        "SEO optimization",
        "Responsive design"
      ],
      link: "https://www.amwall.net/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Store It - File Management Platform",
      subtitle: "Cloud-based file upload and management solution",
      image: "/assets/images/storeIt.png",
      category: "SaaS Platform",
      duration: "2 week",
      team: "Solo Developer",
      technologies: ["Next.js", "React", "TypeScript", "Appwrite", "Tailwind CSS"],
      problem: "Users needed a secure, easy-to-use platform for uploading, managing, and sharing files with advanced security features and user authentication.",
      solution: "Built a comprehensive file management system with drag-and-drop uploads, folder organization, sharing capabilities, and robust security.",
      results: [
        "Secure file management",
        "User authentication system",
        "File sharing capabilities",
        "Drag-and-drop interface"
      ],
      features: [
        "Drag-and-drop file uploads",
        "Folder organization",
        "File sharing with permissions",
        "User authentication (OTP)",
        "File preview capabilities",
        "Storage analytics dashboard"
      ],
      link: "https://store-it-coral-eta.vercel.app/sign-in",
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 4,
      title: "Live Documentation Platform",
      subtitle: "Real-time collaborative document editing",
      image: "/assets/images/LiveDoc/live-doc-1.png",
      category: "Collaboration Tool",
      duration: "1 week",
      team: "Solo Developer",
      technologies: ["React", "Next.js", "WebSockets", "MongoDB", "Tailwind CSS"],
      problem: "Teams needed a platform for creating, editing, and sharing documents in real-time with multiple collaborators.",
      solution: "Developed a real-time document collaboration platform with live editing, commenting, and sharing features.",
      results: [
        "Real-time collaboration",
        "Improved team productivity",
        "Document version control",
        "User-friendly interface"
      ],
      features: [
        "Real-time document editing",
        "Multiple user collaboration",
        "Comment system",
        "Document sharing",
        "Version history",
        "Export capabilities"
      ],
      link: "https://live-doc-plum.vercel.app/",
      color: "from-orange-500 to-red-500"
    }
  ]

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
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-3.134-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fillOpacity="1" fillRule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Case Studies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Deep dive into real projects I've delivered. See the challenges, solutions, and results achieved for my clients.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? `bg-gradient-to-r ${study.color} text-white shadow-lg`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {study.title.split(' - ')[0]}
            </button>
          ))}
        </div>

        {/* Selected Case Study Details */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Project Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={caseStudies[selectedCase].image}
                alt={caseStudies[selectedCase].title}
                width={600}
                height={400}
                className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${caseStudies[selectedCase].color} text-white`}>
                  {caseStudies[selectedCase].category}
                </span>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Clock className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-sm text-gray-400">Duration</div>
                <div className="font-semibold text-white">{caseStudies[selectedCase].duration}</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Users className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-sm text-gray-400">Team</div>
                <div className="font-semibold text-white">{caseStudies[selectedCase].team}</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Code className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <div className="text-sm text-gray-400">Tech Stack</div>
                <div className="font-semibold text-white">{caseStudies[selectedCase].technologies.length} tools</div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {caseStudies[selectedCase].title}
              </h3>
              <p className="text-lg text-gray-400 mb-4">
                {caseStudies[selectedCase].subtitle}
              </p>
              <a
                href={caseStudies[selectedCase].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r ${caseStudies[selectedCase].color} text-white hover:shadow-lg transition-all duration-300 group`}
              >
                View Live Project
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Challenge
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {caseStudies[selectedCase].problem}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Solution
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {caseStudies[selectedCase].solution}
                </p>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedCase].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudies[selectedCase].features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Results Achieved
              </h4>
              <div className="space-y-2">
                {caseStudies[selectedCase].results.map((result, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Similar Results?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Every project is unique, but the approach remains consistent: understanding your needs, 
            crafting the right solution, and delivering exceptional results.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}