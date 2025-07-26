// constants/techStackData.ts

import { TFunction } from "i18next";

export const getTechStack = (t: TFunction) => ({
  frontend: {
    title: t('techStack.categories.frontend'),
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
    title: t('techStack.categories.backend'),
    color: "from-blue-500 to-cyan-500",
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
    title: t('techStack.categories.mobile'),
    color: "from-blue-500 to-cyan-500",
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
    title: t('techStack.categories.database'),
    color: "from-blue-500 to-cyan-500",
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
    title: t('techStack.categories.tools'),
    color: "from-blue-500 to-cyan-500",
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
});

export const getStats = (t: TFunction) => [
  { number: "50+", label: t('techStack.stats.technologiesMastered') },
  { number: "100+", label: t('techStack.stats.projectsCompleted') },
  { number: "5+", label: t('techStack.stats.yearsExperience') },
  { number: "50+", label: t('techStack.stats.happyClients') },
];