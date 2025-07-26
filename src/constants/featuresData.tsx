// constants/featuresData.ts
import {
  IconAppWindow,
  IconBriefcase,
  IconBulb,
  IconChartBar,
  IconCloudComputing,
  IconCode,
  IconPalette,
  IconShieldLock,
} from "@tabler/icons-react";
import { TFunction } from "i18next";

export const getFeatures = (t: TFunction) => [
  {
    title: t('features.innovativeIdeas.title'),
    description: t('features.innovativeIdeas.description'),
    icon: <IconBulb />,
    color: "from-amber-500 to-yellow-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    title: t('features.software.title'),
    description: t('features.software.description'),
    icon: <IconCode />,
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: t('features.management.title'),
    description: t('features.management.description'),
    icon: <IconBriefcase />,
    color: "from-purple-500 to-violet-500",
    bgLight: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: t('features.graphicDesign.title'),
    description: t('features.graphicDesign.description'),
    icon: <IconPalette />,
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    title: t('features.application.title'),
    description: t('features.application.description'),
    icon: <IconAppWindow />,
    color: "from-emerald-500 to-green-500",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    title: t('features.security.title'),
    description: t('features.security.description'),
    icon: <IconShieldLock />,
    color: "from-red-500 to-rose-500",
    bgLight: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: t('features.cloudComputing.title'),
    description: t('features.cloudComputing.description'),
    icon: <IconCloudComputing />,
    color: "from-sky-500 to-blue-500",
    bgLight: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    title: t('features.dataAnalysis.title'),
    description: t('features.dataAnalysis.description'),
    icon: <IconChartBar />,
    color: "from-indigo-500 to-violet-500",
    bgLight: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];