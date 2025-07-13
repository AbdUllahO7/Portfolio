"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const techStack = {
    frontend: {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
        { name: "Material-UI", level: 80, icon: "📦" },
        { name: "ShadCN/UI", level: 80, icon: "🎭" },
      ]
    },
    backend: {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: 85, icon: "💚" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "Laravel", level: 80, icon: "🔴" },
        { name: ".NET", level: 75, icon: "🔵" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "PHP", level: 75, icon: "🐘" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ]
    },
    mobile: {
      title: "Mobile",
      color: "from-purple-500 to-violet-500",
      technologies: [
        { name: "React Native", level: 85, icon: "📱" },
        { name: "Expo", level: 80, icon: "🔥" },
        { name: "Android", level: 75, icon: "🤖" },
        { name: "iOS", level: 75, icon: "🍎" },
        { name: "Flutter", level: 60, icon: "💙" },
        { name: "PWA", level: 80, icon: "🌐" },
      ]
    },
    database: {
      title: "Database",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🗃️" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Redis", level: 70, icon: "📊" },
        { name: "Supabase", level: 75, icon: "⚡" },
      ]
    },
    tools: {
      title: "Tools & Cloud",
      color: "from-pink-500 to-rose-500",
      technologies: [
        { name: "Git", level: 90, icon: "🌿" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Vercel", level: 85, icon: "🔺" },
        { name: "Appwrite", level: 80, icon: "📝" },
        { name: "Strapi", level: 75, icon: "🎯" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Jira", level: 75, icon: "📋" },
      ]
    }
  }

  const categories = Object.keys(techStack) as Array<keyof typeof techStack>

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
            Technology Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cutting-edge technologies and tools I use to build exceptional software solutions
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${techStack[category].color} text-white shadow-lg`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {techStack[category].title}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStack[activeCategory as keyof typeof techStack].technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{tech.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${techStack[activeCategory as keyof typeof techStack].color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Technologies Mastered" },
            { number: "100+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${techStack[activeCategory as keyof typeof techStack].color} bg-clip-text text-transparent mb-2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}