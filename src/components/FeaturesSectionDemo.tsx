import { cn } from "@/lib/utils";
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

export function FeaturesSectionDemo() {

    
    const features = [
        {
          title: "Innovative Ideas",
          description:
            "I bring innovative ideas to the table, pushing boundaries in software development.",
          icon: <IconBulb />, // Represents innovation and bright ideas
        },
        {
          title: "Software",
          description:
            "In software engineering, I leverage cutting-edge technologies to create robust and scalable solutions.",
          icon: <IconCode />, // Represents software development and coding
        },
        {
          title: "Management",
          description:
            "In software management, I excel in coordinating teams and optimizing workflows.",
          icon: <IconBriefcase />, // Represents management and coordination
        },
        {
          title: "Graphic Design",
          description:
            "My expertise in graphic design ensures visually appealing and impactful projects.",
          icon: <IconPalette />, // Represents art and design
        },
        {
          title: "Application",
          description: "I specialize in developing user-friendly and efficient software applications.",
          icon: <IconAppWindow />, // Represents software applications
        },
        {
          title: "Security",
          description:
            "I prioritize security measures in all software projects, ensuring data integrity and user privacy.",
          icon: <IconShieldLock />, // Represents security and protection
        },
        {
          title: "Cloud Computing",
          description:
            "I harness the power of cloud platforms to deploy scalable and high-performing applications.",
          icon: <IconCloudComputing />, // Represents cloud platforms and computing
        },
        {
          title: "Data Analysis",
          description:
            "I utilize data analytics to derive actionable insights and drive informed decision-making.",
          icon: <IconChartBar />, // Represents data analysis and insights
        },
      ];
      
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 w-full mx-auto pt-[100px]">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 bg-black",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-700 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-700 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 dark:text-white/85 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
