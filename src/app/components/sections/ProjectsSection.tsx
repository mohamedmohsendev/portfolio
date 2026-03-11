"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubLink: string;
  demo: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function ProjectsSection({
  currentTheme,
  currentColorIndex,
}: ProjectsSectionProps) {
  const projects: Project[] = [

    {
      title: "LALEN Perfumes (Full Stack)",
      description:
        "A powerful Full-Stack E-commerce platform for a luxury fragrance boutique. Integrated with a real-time database, robust backend logic, and an advanced admin panel for product and order management. Features a premium UI with high-performance optimization.",
      image: "/Logo.webp",
      tech: ["React.js", "Node.js", "Supabase/DB", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/mohamedmohsendev/lelan-perfume",
      demo: "https://lalen-perfume.vercel.app/",
      featured: true,
    },
    {
      title: "Rayyan Web Application",
      description:
        "Developed a modular SPA using React Hooks and TypeScript with a Mobile-First responsive UI. Integrated backend REST APIs with structured loading states.",
      image: "/ryan.png",
      tech: ["React.js", "TypeScript", "REST API"],
      githubLink: "https://github.com/mohamedmohsendev/rayyan-ex-launchpad",
      demo: "https://rayyan-ex-launchpad-mgm7hw767-mohameds-projects-4003827a.vercel.app/",
      featured: true,
    },
    {
      title: "Education School",
      description:
        "A modern education platform built with React, designed to showcase online courses and learning programs through a clean and responsive interface.",
      image: "/Education.png",
      tech: ["React.js", "TypeScript", "Tailwind", "HTML"],
      githubLink: "https://github.com/mohamedmohsendev/School-Education",
      demo: "https://school-education-xi.vercel.app/",
    },
    {
      title: "Harby Eagle Export",
      description:
        "A professional and modern business website built for an export company, showcasing products, services, and company details with a responsive and accessible design.",
      image: "/harbypng.png",
      tech: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/mohamedmohsendev/harbyeagleexport",
      demo: "https://harbyeagleexport.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className={
                currentColorIndex === 0
                  ? "text-blue-400 drop-shadow-lg"
                  : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
              }
            >
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my{" "}
            <span
              className={
                currentColorIndex === 0
                  ? "font-bold text-purple-400 drop-shadow-lg"
                  : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
              }
            >
              creative work
            </span>{" "}
            and technical expertise
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl flex flex-col justify-around bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    <MdLiveTv />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
