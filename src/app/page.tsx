// app/page.tsx
'use client'
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TimelineSection } from "@/components/ui/timeline";
import { FloatingDock } from "@/components/ui/floating-dock";
import SkillsSection from "@/components/skills-section";

import { product } from "@/constants/heroParallaxData";
import { getItems } from "@/constants/hoverEffectData";
import { getTestimonials } from "@/constants/testimonialsData";

import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { links } from "@/constants/links";
import Header from "@/components/Header";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t , i18n } = useTranslation();
  const items = getItems(t);
  const testimonials = getTestimonials(t)
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />

      <div className="bg-white dark:bg-slate-900 transition-colors duration-300 relative">
        {/* Background animation for the Hero section */}
        <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
          <BackgroundLines className="bg-transparent h-full w-full">
            <></>
          </BackgroundLines>
        </div>

        {/* Hero Section */}
        <section className="relative z-10" id="home">
          <HeroParallax products={product} />
        </section>

        <div className="container mx-auto relative z-10">
          {/* About Section */}
          <section id="about" className="relative">
            <HoverEffect 
              items={items}
              className="w-full"
            />
          </section>

          {/* Services Section (Original) */}
          <section className="mt-[80px] relative" id="services">
            <FeaturesSectionDemo key={i18n.language} />
          </section>

          {/* Additional Services Section */}
          <section id="services-detailed" className="relative">
            <ServicesSection key={i18n.language}/>
          </section>

          {/* Technology Stack Section */}
          <section id="tech-stack" className="relative">
            <TechStackSection key={i18n.language}/>
          </section>

          {/* Work Experience Section */}
          <section id="experience" className="relative">
            <ExperienceSection key={i18n.language}/>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="relative">
            <CaseStudiesSection key={i18n.language}/>
          </section>

          {/* Timeline Section */}
          <section id="timeline">
            <TimelineSection  key={i18n.language}/>
          </section>

          {/* Work Process Section */}
          <section id="process" className="relative">
            <ProcessSection key={i18n.language}/>
          </section>

          {/* Statistics Section */}
          <section id="statistics" className="relative">
            <StatisticsSection />
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="fast"
              key={i18n.language}
            />
          </section>

          {/* Skills Section */}
          <section id="skills" className="relative flex flex-col overflow-hidden">
            <SkillsSection/>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="relative">
            <ContactFormSection/>
          </section>

          {/* Social Links */}
          <section id="links" className="relative flex items-center justify-center h-[15rem] w-full">
            <FloatingDock
              mobileClassName="translate-y-20" // only for demo, remove for production
              items={links}
            />
          </section>
        </div>
      </div>
    </main>
  );
}