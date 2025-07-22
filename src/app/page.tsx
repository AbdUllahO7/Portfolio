import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TimelineSection } from "@/components/ui/timeline";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import SkillsSection from "@/components/skills-section";

import { product } from "@/constants/heroParallaxData";
import { items } from "@/constants/hoverEffectData";
import { testimonials } from "@/constants/testimonialsData";

import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { timelineData } from "@/constants/timelineData";
import ProcessSection from "@/components/sections/ProcessSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { links } from "@/constants/links";
import { words } from "@/constants/words";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />

      <BackgroundLines className="bg-white dark:bg-black">
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
          {/* Hero Section */}
          <section className="" id="home">
            <HeroParallax products={product} />
          </section>

          <div className="container mx-auto">
            {/* Typewriter Effect */}
            <TypewriterEffect 
              words={words} 
              className="text-black dark:text-white"
            />

            {/* About Section */}
            <section id="about" className="relative">
              <HoverEffect 
                items={items}
                className="w-full"
              />
            </section>

            {/* Services Section (Original) */}
            <section className="mt-[80px] relative" id="services">
              <FeaturesSectionDemo/>
            </section>

            {/* Additional Services Section */}
            <section id="services-detailed" className="relative">
              <ServicesSection/>
            </section>

            {/* Technology Stack Section */}
            <section id="tech-stack" className="relative">
              <TechStackSection/>
            </section>

            {/* Case Studies Section */}
            <section id="case-studies" className="relative">
              <CaseStudiesSection/>
            </section>

            {/* Timeline Section */}
            <section id="timeline">
              <TimelineSection timelineData={timelineData} />
            </section>

            {/* Work Process Section */}
            <section id="process" className="relative">
              <ProcessSection/>
            </section>

            {/* Statistics Section */}
            <section id="statistics" className="relative">
              <StatisticsSection/>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="fast"
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
      </BackgroundLines>
    </main>
  );
}