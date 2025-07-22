// src/components/StructuredData.tsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdullah Alhasan",
    "jobTitle": "Software Engineer",
    "description": "Experienced Software Engineer specializing in full-stack web and mobile application development",
    "url": "https://www.abdullahalhasan.online/",
    "email": "abdallahalhasan2@gmail.com",
    "telephone": "+90 538 937 08 63",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "Turkey"
    },
    "sameAs": [
      "https://github.com/AbdUllahO7",
      "https://www.linkedin.com/in/abdullah-alhasan-730485236/",
      "https://www.instagram.com/abd0llah_7/"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native", 
      "Node.js",
      "Laravel",
      ".NET",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Full Stack Development",
      "Web Development",
      "Mobile App Development"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}