// constants/testimonialsData.ts

import { TFunction } from "i18next";

export const getTestimonials = (t: TFunction) => [
  {
    quote: t('testimonials.client1.quote'),
    name: t('testimonials.client1.name'),
    title: t('testimonials.client1.title'),
  },
  {
    quote: t('testimonials.client2.quote'),
    name: t('testimonials.client2.name'),
    title: t('testimonials.client2.title'),
  },
  {
    quote: t('testimonials.client3.quote'),
    name: t('testimonials.client3.name'),
    title: t('testimonials.client3.title'),
  },
  {
    quote: t('testimonials.client4.quote'),
    name: t('testimonials.client4.name'),
    title: t('testimonials.client4.title'),
  },
  {
    quote: t('testimonials.client5.quote'),
    name: t('testimonials.client5.name'),
    title: t('testimonials.client5.title'),
  },
];

// Legacy export for backward compatibility (if needed)
export const testimonials = [
  {
    quote: "Abdullah Alhasan's expertise and innovative approach transformed our project. His technical skills and attention to detail are second to none.",
    name: "Client 1",
    title: "Business Owner",
  },
  {
    quote: "Working with Abdullah was an absolute pleasure. His ability to solve complex problems and deliver high-quality solutions on time was impressive.",
    name: "Client 2",
    title: "Software Developer",
  },
  {
    quote: "Abdullah's dedication to his craft and his deep understanding of software engineering made our collaboration seamless and productive.",
    name: "Client 3",
    title: "Tech Lead",
  },
  {
    quote: "From the initial idea to the final implementation, Abdullah provided invaluable insights that elevated the project to a whole new level.",
    name: "Client 4",
    title: "Project Manager",
  },
  {
    quote: "Abdullah is a skilled and reliable engineer who consistently exceeds expectations. I would highly recommend him for any software development needs.",
    name: "Client 5",
    title: "Startup Founder",
  },
];