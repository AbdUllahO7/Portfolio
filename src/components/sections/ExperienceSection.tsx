"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react"
import { useMemo } from "react"

const rolesKeys = ["zimam", "idigitek", "freelance"]

export default function ExperienceSection() {
  const { t } = useTranslation()


  const roles = useMemo(() => {
    return rolesKeys.map((key) => ({
      id: key,
      role: t(`experience.roles.${key}.role`),
      company: t(`experience.roles.${key}.company`),
      type: t(`experience.roles.${key}.type`),
      duration: t(`experience.roles.${key}.duration`),
      bullets: t(`experience.roles.${key}.bullets`, { returnObjects: true }) as string[],
      color:
        key === "zimam"
          ? "from-blue-500 to-indigo-600"
          : key === "idigitek"
            ? "from-purple-500 to-pink-600"
            : "from-teal-400 to-emerald-600",
    }))
  }, [t])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative overflow-hidden transition-colors duration-300">
      {/* Premium Background Gradients */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute -inset-[10%]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="%23ffffff" fillOpacity="1" fillRule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm mb-4"
          >
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              {t("header.navigation.experience")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
          >
            {t("experience.sectionTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            {t("experience.sectionDescription")}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500/20" />

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {roles.map((role, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={role.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Spacer for Desktop (occupies the other side) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node Indicator */}
                  <div className="absolute start-4 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${role.color} border-4 border-white dark:border-black shadow-lg shadow-black/10 flex items-center justify-center cursor-pointer`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Card Section */}
                  <div className="w-full md:w-1/2 ps-12 md:ps-8 md:pe-8 flex">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 group relative backdrop-blur-md bg-white/40 dark:bg-gray-950/40 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 md:p-8 hover:bg-white/80 dark:hover:bg-gray-950/80 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] overflow-hidden"
                    >
                      {/* Left glowing border decoration */}
                      <div className={`absolute top-0 start-0 bottom-0 w-[4px] bg-gradient-to-b ${role.color}`} />

                      <div className="relative z-10 flex flex-col h-full text-start">
                        {/* Header Details */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <span className="text-xs font-semibold tracking-wider text-gray-400 flex items-center gap-1.5 uppercase">
                            <Calendar className="w-3.5 h-3.5" />
                            {role.duration}
                          </span>
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${role.color} text-white shadow-sm shadow-black/5`}>
                            <MapPin className="w-3 h-3" />
                            {role.type}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white text-black mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-colors duration-300">
                          {role.role}
                        </h3>
                        <p className={`font-semibold text-sm md:text-base bg-gradient-to-r ${role.color} bg-clip-text text-transparent mb-6`}>
                          {role.company}
                        </p>

                        {/* Bullet Lists */}
                        <ul className="space-y-3 flex-1">
                          {role.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base dark:text-gray-300 text-gray-600 leading-relaxed">
                              <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.color} group-hover:scale-125 transition-transform duration-300`} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Interactive Sparkle icon bottom corner */}
                        <div className="absolute bottom-4 end-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                          <Sparkles className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
