"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Server, Layers, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      description: "Building robust server-side applications",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "Laravel", level: 80 },
        { name: "Nest.js", level: 60 },
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      description: "Managing and optimizing data storage",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "NoSQL", level: 85 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Methods",
      icon: <Layers className="h-5 w-5" />,
      description: "Using modern tools and methodologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Jira", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Notion", level: 75 },
        { name: "Testing", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      id: "other",
      title: "Other",
      icon: <GitBranch className="h-5 w-5" />,
      description: "Additional skills and competencies",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Performance Optimization", level: 85 },
        { name: "GitHub", level: 85 },
      ],
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 relative">
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
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fillOpacity="1" fillRule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">My Skills & Expertise</h2>
        </div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="flex md:grid md:grid-cols-5 gap-1">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-3 py-2 relative overflow-hidden group whitespace-nowrap"
                >
                  <span
                    className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${
                      category.id === "frontend"
                        ? "bg-pink-500"
                        : category.id === "backend"
                          ? "bg-blue-500"
                          : category.id === "database"
                            ? "bg-green-500"
                            : category.id === "devops"
                              ? "bg-amber-500"
                              : category.id === "tools"
                                ? "bg-purple-500"
                                : "bg-teal-500"
                    }`}
                  ></span>
                  {category.icon}
                  <span className="md:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="bg-black border-0 bg-gradient-to-br text-white from-slate-800 to-slate-900">
                <CardHeader>
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(0,0,0,0)",
                        "0px 0px 15px rgba(0,0,0,0.1)",
                        "0px 0px 0px rgba(0,0,0,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </motion.div>
                  <CardDescription className="text-gray-400">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    animate={activeTab === category.id ? "show" : "hidden"}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={item}
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        className="p-4 rounded-lg border border-gray-800 bg-gray-900 hover:shadow-md transition-all duration-300"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{skill.name}</h4>
                            <Badge variant="outline" className="text-white">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${
                                category.id === "frontend"
                                  ? "bg-gradient-to-r from-pink-500 to-rose-500"
                                  : category.id === "backend"
                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                    : category.id === "database"
                                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                      : category.id === "devops"
                                        ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                                        : category.id === "tools"
                                          ? "bg-gradient-to-r from-purple-500 to-violet-500"
                                          : "bg-gradient-to-r from-teal-500 to-cyan-500"
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

