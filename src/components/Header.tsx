"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Code, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useLanguage } from "@/context/LanguageContext"
import LanguageSelector from "./LanguageSelectorComponent"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  // Language change handler
  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as 'en' | 'ar' | 'tr')
  }

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > -500)
  })

  // Navigation items with translations

  const navItems = useMemo(() => [
    { name: t('header.navigation.home'), href: "#home", id: "home" },
    { name: t('header.navigation.about'), href: "#about", id: "about" },
    { name: t('header.navigation.services'), href: "#services", id: "services" },
    { name: t('header.navigation.techStack'), href: "#tech-stack", id: "tech-stack" },
    { name: t('header.navigation.caseStudies'), href: "#case-studies", id: "case-studies" },
    { name: t('header.navigation.projects'), href: "#timeline", id: "timeline" },
    { name: t('header.navigation.process'), href: "#process", id: "process" },
    { name: t('header.navigation.skills'), href: "#skills", id: "skills" },
    { name: t('header.navigation.contact'), href: "#contact", id: "contact" },
  ], [t])

  // Check if current language is RTL
  const isRTL = language === 'ar'

  // Track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [navItems])

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 lg:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <motion.div
            className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-black dark:text-white">
                {t('header.title')}
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
                {t('header.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-1 ${isRTL ? 'space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <motion.button
                key={`${item.id}-${language}`}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30"
                    layoutId="activeNavItem"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`hidden lg:flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <ThemeToggle />
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
            <motion.a
              href="mailto:abdallahalhasan2@gmail.com"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={t('header.cta.emailMe')}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.cta.letsTalk')}
            </motion.button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className={`lg:hidden flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
            <ThemeToggle />
            
            <motion.button
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-200 dark:border-gray-800">
            {navItems.map((item, index) => (
              <motion.button
                key={`mobile-${item.id}-${language}`}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-${isRTL ? 'right' : 'left'} px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? `text-black dark:text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-${isRTL ? 'r' : 'l'}-2 border-blue-500`
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-4 py-2 space-y-2">
              <motion.a
                href="mailto:abdallahalhasan2@gmail.com"
                className={`flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2 ${isRTL ? 'space-x-reverse' : ''}`}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{t('header.cta.emailMe')}</span>
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm"
                whileTap={{ scale: 0.98 }}
              >
                {t('header.cta.letsTalk')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}