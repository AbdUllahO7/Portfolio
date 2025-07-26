"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { getProcessSteps } from "@/constants/processData"
import { ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const { t } = useTranslation()
  const processSteps = useMemo(() => getProcessSteps(t), [t])

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
            repeat: Number.POSITIVE_INFINITY,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-black dark:text-white">
            {t('process.sectionTitle')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            {t('process.sectionDescription')}
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
                  <div className=" backdrop-blur-sm border border-gray-800 rounded-xl p-6 mt-32  transition-all duration-300 group">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 text-white mx-auto`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold  mb-2 text-center">{step.title}</h3>
                    <p className=" text-sm mb-4 text-center">{step.description}</p>
                    
                    <div className={`text-xs font-semibold text-center bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                      {step.duration}
                    </div>

                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs  flex items-center">
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
                <div className="flex-1 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <span className={`text-xs font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className=" text-sm mb-4">{step.description}</p>
                  
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs flex items-center">
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
          <h3 className="text-2xl font-bold text-white mb-4">{t('process.cta.title')}</h3>
          <p className=" mb-6 max-w-2xl mx-auto text-white">
            {t('process.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              {t('process.cta.startProject')}
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              {t('process.cta.scheduleConsultation')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}