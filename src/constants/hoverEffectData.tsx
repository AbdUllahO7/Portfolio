// constants/hoverEffectData.ts

import { TFunction } from "i18next";

export const getItems = (t: TFunction) => [
  {
    title: t('services.softwareManagement.title'),
    description: t('services.softwareManagement.description'),
    link: '#-1',
  },
  {
    title: t('services.webFullStack.title'),
    description: t('services.webFullStack.description'),
    link: '#-2',
  },
  {
    title: t('services.applicationsFullStack.title'),
    description: t('services.applicationsFullStack.description'),
    link: '#-3',
  },
  {
    title: t('services.databaseManager.title'),
    description: t('services.databaseManager.description'),
    link: '#-4',
  },
];