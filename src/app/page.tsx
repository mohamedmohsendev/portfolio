"use client";
import { useEffect, useState } from "react";
import Background from "../app/components/background/page";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentColorIndex] = useState(0);

  const colorThemes = [
    {
      primary: "from-orange-500 to-red-600",
      secondary: "from-yellow-400 to-orange-500",
      accent: "from-red-400 to-pink-500",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentTheme = colorThemes[currentColorIndex];

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full flex flex-col text-white overflow-hidden">
      <Background />

      {/* Hero Section with Header */}
      <HeroSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* About Section */}
      <AboutSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* Experience Section */}
      <ExperienceSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* Skills Section */}
      <SkillsSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* Projects Section */}
      <ProjectsSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* Contact Section */}
      <ContactSection
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />

      {/* Footer */}
      <Footer
        currentTheme={currentTheme}
        currentColorIndex={currentColorIndex}
      />
    </div>
  );
}
