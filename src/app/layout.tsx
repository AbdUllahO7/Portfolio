import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdullah Alhasan - Software Engineer & Full Stack Developer",
    template: "%s | Abdullah Alhasan"
  },
  description: "Experienced Software Engineer specializing in full-stack web and mobile application development. Expert in React, React Native, Node.js, Laravel, .NET, and modern web technologies. Based in Istanbul, Turkey.",
  keywords: [
    "Abdullah Alhasan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "React Native",
    "Node.js",
    "Laravel",
    ".NET Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile App Development",
    "Frontend Developer",
    "Backend Developer",
    "Istanbul",
    "Turkey",
    "Portfolio",
    "Software Development",
    "MERN Stack",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "API Development",
    "Responsive Design",
    "UI/UX",
    "Tailwind CSS",
    "Full Stack Applications",
    "E-commerce Development",
    "Database Management",
    "Cloud Solutions",
    "AWS",
    "Firebase",
    "Docker",
    "Git",
    "Agile Development"
  ],
  authors: [{ name: "Abdullah Alhasan" }],
  creator: "Abdullah Alhasan",
  publisher: "Abdullah Alhasan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Update this URL with your actual domain
  metadataBase: new URL('https://your-portfolio-domain.com'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Abdullah Alhasan - Software Engineer & Full Stack Developer",
    description: "Experienced Software Engineer specializing in full-stack web and mobile application development. Expert in React, React Native, Node.js, Laravel, .NET, and modern web technologies.",
    siteName: "Abdullah Alhasan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create and add this image
        width: 1200,
        height: 630,
        alt: "Abdullah Alhasan - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Alhasan - Software Engineer & Full Stack Developer",
    description: "Experienced Software Engineer specializing in full-stack web and mobile application development. Expert in React, React Native, Node.js, Laravel, .NET, and modern web technologies.",
    images: ["/og-image.jpg"], // Same image as OG
    creator: "@your_twitter_handle", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
  classification: "software development portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <LanguageProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
          </LanguageProvider>

      </body>
    </html>
  );
}