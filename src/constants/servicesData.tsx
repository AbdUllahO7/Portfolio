// constants/servicesData.ts
import { TFunction } from "i18next";
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Settings, 
  Palette,
} from "lucide-react";

export const getServices = (t: TFunction) => [
  {
    icon: <Code className="h-8 w-8" />,
    title: t('servicesSection.fullStackWeb.title'),
    description: t('servicesSection.fullStackWeb.description'),
    features: t('servicesSection.fullStackWeb.features', { returnObjects: true }) as string[],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: t('servicesSection.mobileApp.title'),
    description: t('servicesSection.mobileApp.description'),
    features: t('servicesSection.mobileApp.features', { returnObjects: true }) as string[],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: t('servicesSection.databaseManagement.title'),
    description: t('servicesSection.databaseManagement.description'),
    features: t('servicesSection.databaseManagement.features', { returnObjects: true }) as string[],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: t('servicesSection.cloudSolutions.title'),
    description: t('servicesSection.cloudSolutions.description'),
    features: t('servicesSection.cloudSolutions.features', { returnObjects: true }) as string[],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: t('servicesSection.uiUxDesign.title'),
    description: t('servicesSection.uiUxDesign.description'),
    features: t('servicesSection.uiUxDesign.features', { returnObjects: true }) as string[],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: t('servicesSection.systemIntegration.title'),
    description: t('servicesSection.systemIntegration.description'),
    features: t('servicesSection.systemIntegration.features', { returnObjects: true }) as string[],
    color: "from-indigo-500 to-blue-500"
  }
];