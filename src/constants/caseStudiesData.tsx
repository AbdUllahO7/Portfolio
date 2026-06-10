// constants/caseStudiesData.ts

import { TFunction } from "i18next";

export const getCaseStudies = (t: TFunction) => [
  {
    id: 1,
    title: t('caseStudies.projects.bishola.title'),
    subtitle: t('caseStudies.projects.bishola.subtitle'),
    image: "/assets/images/bishola.png",
    category: t('caseStudies.projects.bishola.category'),
    duration: t('caseStudies.projects.bishola.duration'),
    team: t('caseStudies.projects.bishola.team'),
    technologies: ["NestJS", "Next.js", "PostgreSQL", "React Native", "JWT", "Tailwind CSS"],
    problem: t('caseStudies.projects.bishola.problem'),
    solution: t('caseStudies.projects.bishola.solution'),
    results: t('caseStudies.projects.bishola.results', { returnObjects: true }) as string[],
    features: t('caseStudies.projects.bishola.features', { returnObjects: true }) as string[],
    link: "https://bishola.com/en",
    androidLink: "https://play.google.com/store/search?q=bishola&c=apps",
    iosLink: "https://apps.apple.com/us/app/bishola/id6751427088",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 2,
    title: t('caseStudies.projects.layandent.title'),
    subtitle: t('caseStudies.projects.layandent.subtitle'),
    image: "/assets/images/Layan/Layan-1.png",
    category: t('caseStudies.projects.layandent.category'),
    duration: t('caseStudies.projects.layandent.duration'),
    team: t('caseStudies.projects.layandent.team'),
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    problem: t('caseStudies.projects.layandent.problem'),
    solution: t('caseStudies.projects.layandent.solution'),
    results: t('caseStudies.projects.layandent.results', { returnObjects: true }) as string[],
    features: t('caseStudies.projects.layandent.features', { returnObjects: true }) as string[],
    link: "https://layan-medical.vercel.app/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: t('caseStudies.projects.amwall.title'),
    subtitle: t('caseStudies.projects.amwall.subtitle'),
    image: "/assets/images/Amwall/Amwall-1.png",
    category: t('caseStudies.projects.amwall.category'),
    duration: t('caseStudies.projects.amwall.duration'),
    team: t('caseStudies.projects.amwall.team'),
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    problem: t('caseStudies.projects.amwall.problem'),
    solution: t('caseStudies.projects.amwall.solution'),
    results: t('caseStudies.projects.amwall.results', { returnObjects: true }) as string[],
    features: t('caseStudies.projects.amwall.features', { returnObjects: true }) as string[],
    link: "https://www.amwall.net/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: t('caseStudies.projects.storeIt.title'),
    subtitle: t('caseStudies.projects.storeIt.subtitle'),
    image: "/assets/images/storeIt.png",
    category: t('caseStudies.projects.storeIt.category'),
    duration: t('caseStudies.projects.storeIt.duration'),
    team: t('caseStudies.projects.storeIt.team'),
    technologies: ["Next.js", "React", "TypeScript", "Appwrite", "Tailwind CSS"],
    problem: t('caseStudies.projects.storeIt.problem'),
    solution: t('caseStudies.projects.storeIt.solution'),
    results: t('caseStudies.projects.storeIt.results', { returnObjects: true }) as string[],
    features: t('caseStudies.projects.storeIt.features', { returnObjects: true }) as string[],
    link: "https://store-it-coral-eta.vercel.app/sign-in",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 5,
    title: t('caseStudies.projects.liveDoc.title'),
    subtitle: t('caseStudies.projects.liveDoc.subtitle'),
    image: "/assets/images/LiveDoc/live-doc-1.png",
    category: t('caseStudies.projects.liveDoc.category'),
    duration: t('caseStudies.projects.liveDoc.duration'),
    team: t('caseStudies.projects.liveDoc.team'),
    technologies: ["React", "Next.js", "WebSockets", "MongoDB", "Tailwind CSS"],
    problem: t('caseStudies.projects.liveDoc.problem'),
    solution: t('caseStudies.projects.liveDoc.solution'),
    results: t('caseStudies.projects.liveDoc.results', { returnObjects: true }) as string[],
    features: t('caseStudies.projects.liveDoc.features', { returnObjects: true }) as string[],
    link: "https://live-doc-plum.vercel.app/",
    color: "from-blue-500 to-cyan-500"
  }
];