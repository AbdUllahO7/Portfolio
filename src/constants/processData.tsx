// constants/processData.ts
import { TFunction } from "i18next";
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  RefreshCw
} from "lucide-react"

export const getProcessSteps = (t: TFunction) => [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: t('process.steps.discovery.title'),
    description: t('process.steps.discovery.description'),
    details: t('process.steps.discovery.details', { returnObjects: true }) as string[],
    color: "from-blue-500 to-cyan-500",
    duration: t('process.steps.discovery.duration')
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: t('process.steps.design.title'),
    description: t('process.steps.design.description'),
    details: t('process.steps.design.details', { returnObjects: true }) as string[],
    color: "from-purple-500 to-violet-500",
    duration: t('process.steps.design.duration')
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: t('process.steps.development.title'),
    description: t('process.steps.development.description'),
    details: t('process.steps.development.details', { returnObjects: true }) as string[],
    color: "from-green-500 to-emerald-500",
    duration: t('process.steps.development.duration')
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: t('process.steps.testing.title'),
    description: t('process.steps.testing.description'),
    details: t('process.steps.testing.details', { returnObjects: true }) as string[],
    color: "from-orange-500 to-red-500",
    duration: t('process.steps.testing.duration')
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: t('process.steps.deployment.title'),
    description: t('process.steps.deployment.description'),
    details: t('process.steps.deployment.details', { returnObjects: true }) as string[],
    color: "from-pink-500 to-rose-500",
    duration: t('process.steps.deployment.duration')
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: t('process.steps.maintenance.title'),
    description: t('process.steps.maintenance.description'),
    details: t('process.steps.maintenance.details', { returnObjects: true }) as string[],
    color: "from-indigo-500 to-blue-500",
    duration: t('process.steps.maintenance.duration')
  }
];