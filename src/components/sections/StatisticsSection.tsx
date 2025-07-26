"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { 
  Trophy, 
  Target, 
  Zap, 
  Award,
  Star,
  Briefcase,
  Code2,
  Users,
  Clock,
  TrendingUp,
  Coffee
} from "lucide-react"

export default function StatisticsSection() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainStats = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      number: 100,
      suffix: "+",
      label: t('statistics.mainStats.projectsCompleted.label'),
      description: t('statistics.mainStats.projectsCompleted.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 50,
      suffix: "+",
      label: t('statistics.mainStats.happyClients.label'),
      description: t('statistics.mainStats.happyClients.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: 5,
      suffix: "+",
      label: t('statistics.mainStats.yearsExperience.label'),
      description: t('statistics.mainStats.yearsExperience.description'),
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      number: 50,
      suffix: "+",
      label: t('statistics.mainStats.technologies.label'),
      description: t('statistics.mainStats.technologies.description'),
      color: "from-orange-500 to-red-500"
    }
  ]

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: t('statistics.achievements.fullStackExpertise.title'),
      description: t('statistics.achievements.fullStackExpertise.description'),
      metric: "100%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: t('statistics.achievements.clientSatisfaction.title'),
      description: t('statistics.achievements.clientSatisfaction.description'),
      metric: "98%",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('statistics.achievements.onTimeDelivery.title'),
      description: t('statistics.achievements.onTimeDelivery.description'),
      metric: "95%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('statistics.achievements.performanceImprovement.title'),
      description: t('statistics.achievements.performanceImprovement.description'),
      metric: "40%",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const additionalStats = [
    { label: t('statistics.additionalStats.linesOfCode'), value: "500K+", icon: <Code2 className="h-5 w-5" /> },
    { label: t('statistics.additionalStats.coffeeCups'), value: "2000+", icon: <Coffee className="h-5 w-5" /> },
    { label: t('statistics.additionalStats.githubCommits'), value: "3000+", icon: <Target className="h-5 w-5" /> },
    { label: t('statistics.additionalStats.bugsFixed'), value: "1000+", icon: <Trophy className="h-5 w-5" /> },
  ]

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight ">
            {t('statistics.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('statistics.description')}
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className=" backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center `}>
                  {achievement.icon}
                </div>
                <motion.div
                  className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {achievement.metric}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold  mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold  mb-8 text-center text-white">
            {t('statistics.additionalStats.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center  mb-3  text-white  group-hover:text-purple-500 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1 text-white ">{stat.value}</div>
                <div className="text-sm text-white ">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl italic mb-6">
            "{t('statistics.quote.text')}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <div className="font-semibold">{t('statistics.quote.name')}</div>
              <div className="text-sm">{t('statistics.quote.title')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Counter Component
const StatCard = ({ stat, index, isInView }: { stat: any, index: number, isInView: boolean }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.number / 50
        const interval = setInterval(() => {
          setCount(prev => {
            if (prev >= stat.number) {
              clearInterval(interval)
              return stat.number
            }
            return Math.min(prev + increment, stat.number)
          })
        }, 30)
        
        return () => clearInterval(interval)
      }, index * 200)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, stat.number, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative  backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl`}></div>
      </div>

      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 `}>
          {stat.icon}
        </div>

        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
          {Math.floor(count)}{stat.suffix}
        </div>

        <h3 className="text-xl font-bold  mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {stat.label}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          {stat.description}
        </p>

        <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 bg-gradient-to-r ${stat.color} group-hover:w-full w-0`}></div>
      </div>
    </motion.div>
  )
}