"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  IconAppWindow,
  IconBriefcase,
  IconBulb,
  IconChartBar,
  IconCloudComputing,
  IconCode,
  IconPalette,
  IconShieldLock,
} from "@tabler/icons-react"

export function FeaturesSectionDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      title: "Innovative Ideas",
      description: "I bring innovative ideas to the table, pushing boundaries in software development.",
      icon: <IconBulb />,
      color: "from-amber-500 to-yellow-500",
      bgLight: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      title: "Software",
      description:
        "In software engineering, I leverage cutting-edge technologies to create robust and scalable solutions.",
      icon: <IconCode />,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Management",
      description: "In software management, I excel in coordinating teams and optimizing workflows.",
      icon: <IconBriefcase />,
      color: "from-purple-500 to-violet-500",
      bgLight: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Graphic Design",
      description: "My expertise in graphic design ensures visually appealing and impactful projects.",
      icon: <IconPalette />,
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      title: "Application",
      description: "I specialize in developing user-friendly and efficient software applications.",
      icon: <IconAppWindow />,
      color: "from-emerald-500 to-green-500",
      bgLight: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "Security",
      description: "I prioritize security measures in all software projects, ensuring data integrity and user privacy.",
      icon: <IconShieldLock />,
      color: "from-red-500 to-rose-500",
      bgLight: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      title: "Cloud Computing",
      description: "I harness the power of cloud platforms to deploy scalable and high-performing applications.",
      icon: <IconCloudComputing />,
      color: "from-sky-500 to-blue-500",
      bgLight: "bg-sky-50",
      iconColor: "text-sky-500",
    },
    {
      title: "Data Analysis",
      description: "I utilize data analytics to derive actionable insights and drive informed decision-making.",
      icon: <IconChartBar />,
      color: "from-indigo-500 to-violet-500",
      bgLight: "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }



  return (
    <section className="py-20 px-4 md:px-6  relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -inset-[10%] opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white text-black">My Expertise</h2>
          <p className=" max-w-2xl mx-auto dark:text-white text-black">
            Delivering innovative software solutions with expertise in development and design. 
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  color,
  bgLight,
  iconColor,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgLight: string
  iconColor: string
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            delay: index * 0.1,
            duration: 0.5,
          },
        },
      }}
      className={cn(
        "relative group rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800  hover:bg-gray-800/80 transition-all duration-300",
        isHovered ? "shadow-lg scale-[1.02]" : "shadow",
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color}`}></div>
      </div>

      <div className="p-6 md:p-8 h-full relative z-10">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300",
            bgLight,
            iconColor,
            isHovered ? "scale-110" : "",
          )}
        >
          <motion.div
            animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-6 h-6"
          >
            {icon}
          </motion.div>
        </div>

        <h3 className="text-xl font-bold mb-3  group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>

        <p className=" group-hover:text-gray-300 transition-colors duration-300">{description}</p>

        <div
          className={cn(
            "absolute bottom-0 left-0 h-1 transition-all duration-500 bg-gradient-to-r",
            color,
            isHovered ? "w-full" : "w-0",
          )}
        ></div>
      </div>
    </motion.div>
  )
}

