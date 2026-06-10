"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "@/context/LanguageContext";
import emailjs from '@emailjs/browser';
import { Download } from "lucide-react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh]  py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Fix RTL logic - typically Arabic, Hebrew, etc. are RTL, not English
  const isRTL = language === 'ar' 
  const direction = isRTL ? 'rtl' : 'ltr';

  const handleDownloadCV = async () => {
    try {
      const serviceId = 'service_rxiv2xp';
      const templateId = 'template_ojbh4e4';
      const publicKey = 'vdCt1pWIL72qWQ-6t';

      const templateParams = {
        from_name: "Portfolio System",
        from_email: "system@portfolio.com",
        company: "Portfolio Website",
        subject: "Resume Download Alert!",
        message: "A user has just downloaded your CV (Abdullah_Alhasan_CV.docx) from your portfolio website.",
        project_type: "System Alert",
        to_email: 'abdallahalhasan2@gmail.com'
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
    } catch (error) {
      console.error("Failed to send CV download notification:", error);
    }
  };

  return (
    <div 
      className={`max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-40 ${
        isRTL ? 'text-right' : 'text-left'
      }`}
      dir={direction}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={`text-2xl md:text-7xl font-bold dark:text-white text-black leading-tight ${
          isRTL ? 'font-arabic' : ''
        }`}>
          <span className="block mb-2 md:mb-4">
            {t('hero.greeting')} 
          </span>
          <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t('hero.name')}
          </span>
          <span className="block text-xl md:text-4xl mt-4 text-gray-600 dark:text-gray-300 font-medium">
            {t('hero.title')}
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 md:mt-12"
      >
        <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl ${
          isRTL ? 'font-arabic' : ''
        }`}>
          {t('hero.subtitle')}
        </p>
        <p className={`text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mt-4 ${
          isRTL ? 'font-arabic' : ''
        }`}>
          {t('hero.description')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 md:mt-10"
      >
        <a
          href="/assets/Abdullah_Alhasan_CV.docx"
          onClick={handleDownloadCV}
          download="Abdullah_Alhasan_CV.docx"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
        >
          <Download className="w-4.5 h-4.5" />
          {t('hero.downloadCV')}
        </a>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[45rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};