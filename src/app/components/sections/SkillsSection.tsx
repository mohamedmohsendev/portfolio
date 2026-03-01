"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiVite,
  SiBootstrap,
} from "react-icons/si";

interface SkillsSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function SkillsSection({
  currentTheme,
  currentColorIndex,
}: SkillsSectionProps) {
  const skills = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl" />,
      color: "from-slate-400 to-white",
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl" />,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className="text-5xl" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-5xl" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-5xl" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl" />,
      color: "from-teal-400 to-blue-500",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-5xl" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl" />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl" />,
      color: "from-blue-400 to-purple-500",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-5xl" />,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Vite",
      icon: <SiVite className="text-5xl" />,
      color: "from-purple-500 to-yellow-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl" />,
      color: "from-green-500 to-emerald-600",
    },
  ];

  const getSkillColor = (skillName: string) => {
    const colorMap: { [key: string]: string } = {
      "Next.js": "#ffffff",
      React: "#61dafb",
      "Redux Toolkit": "#764abc",
      TypeScript: "#3178c6",
      "Tailwind CSS": "#06b6d4",
      Bootstrap: "#7952b3",
      JavaScript: "#f7df1e",
      HTML5: "#e34f26",
      CSS3: "#1572b6",
      Git: "#f05032",
      Vite: "#646cff",
      "Node.js": "#339933",
      MongoDB: "#4DB33D",
    };
    return colorMap[skillName] || "#ffffff";
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-40 h-40 bg-gradient-to-r ${currentTheme.primary} opacity-6 rounded-full blur-3xl`}
            style={{
              left: `${30 + i * 40}%`,
              top: `${20 + i * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
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
            The tools that I use to bring{" "}
            <motion.span
              className={
                currentColorIndex === 0
                  ? "font-bold text-purple-400 drop-shadow-lg"
                  : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
              }
            >
              ideas to life
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="group relative cursor-pointer"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <motion.div
                  className="mb-4 relative z-10 text-5xl transition-all duration-300"
                  style={{
                    color: getSkillColor(skill.name),
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  {skill.icon}
                </motion.div>

                <motion.span
                  className="text-sm font-medium text-white/90 group-hover:text-white transition-colors relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.span>

                <motion.div className="absolute top-2 right-2 text-yellow-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✨
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
