"use client";
import { motion } from "framer-motion";

interface ExperienceSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function ExperienceSection({
  currentTheme,
  currentColorIndex,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className={
                currentColorIndex === 0
                  ? "text-blue-400 drop-shadow-lg"
                  : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
              }
            >
              Experience
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: "250px" }}
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
            My journey in{" "}
            <span
              className={
                currentColorIndex === 0
                  ? "font-bold text-purple-400 drop-shadow-lg"
                  : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
              }
            >
              software development
            </span>
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="hidden md:block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

            {/* ITI Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative pl-0 md:pl-20 pb-8 md:pb-12 group"
            >
              <motion.div
                className={`hidden md:block absolute left-2 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${currentTheme.primary} rounded-full border-2 md:border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300`}
              />

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.h3
                  className={
                    currentColorIndex === 0
                      ? "text-lg md:text-2xl font-bold mb-2 text-blue-400 drop-shadow-lg relative z-10"
                      : `text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent relative z-10`
                  }
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Front-End Developer
                </motion.h3>

                <motion.div
                  className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span
                    className={
                      currentColorIndex === 0
                        ? "text-base md:text-lg font-semibold text-cyan-400 drop-shadow-lg mb-1 md:mb-0"
                        : `text-base md:text-lg font-semibold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent mb-1 md:mb-0`
                    }
                  >
                    ITI (Information Technology Institute)
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">
                    Graduated 2026
                  </span>
                </motion.div>

                <motion.ul
                  className="space-y-3 text-gray-300 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Mastered the MERN Stack through intensive ITI projects and curriculum.",
                    "Built complete end-to-end web applications using MongoDB, Express.js, React.js, and Node.js.",
                    "Focused on React.js, modern JavaScript, responsive UI/UX design, and cross-browser compatibility.",
                  ].map((responsibility, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start md:items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className={`hidden md:block text-sm mr-3 mt-1.5 w-2 h-2 bg-gradient-to-r ${currentTheme.accent} rounded-full flex-shrink-0`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:text-white transition-colors duration-300 md:ml-0">
                        {responsibility}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2 mt-auto pt-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Next.js",
                    "TypeScript",
                    "TailwindCSS",
                    "Redux Toolkit",
                    "React Router",
                    "React.js",
                    "MongoDB",
                    "Node.js",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.3 + index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Freelance Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative md:pl-20 pb-8 md:pb-12 group"
            >
              <motion.div
                className={`hidden md:block absolute left-2 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${currentTheme.secondary} rounded-full border-2 md:border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300`}
              />

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${currentTheme.secondary} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.h3
                  className={
                    currentColorIndex === 0
                      ? "text-lg md:text-2xl font-bold mb-2 text-purple-400 drop-shadow-lg relative z-10"
                      : `text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent relative z-10`
                  }
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  IT Technical Support Specialist
                </motion.h3>

                <motion.div
                  className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <span
                    className={
                      currentColorIndex === 0
                        ? "text-base md:text-lg font-semibold text-pink-400 drop-shadow-lg mb-1 md:mb-0"
                        : `text-base md:text-lg font-semibold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent mb-1 md:mb-0`
                    }
                  >
                    Ministry of Interior, Cairo
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">
                    Jan 2024 - Mar 2025
                  </span>
                </motion.div>

                <motion.ul
                  className="space-y-3 text-gray-300 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Resolved 200+ technical hardware and software issues.",
                    "Improved overall departmental response time by 58%.",
                    "Supported 100+ users and significantly reduced recurring network incidents by establishing detailed technical documentation.",
                  ].map((responsibility, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start md:items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className={`hidden md:block text-sm mr-3 mt-1.5 w-2 h-2 bg-gradient-to-r ${currentTheme.accent} rounded-full flex-shrink-0`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:text-white transition-colors duration-300 md:ml-0">
                        {responsibility}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2 mt-auto pt-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Technical Support",
                    "Hardware Troubleshooting",
                    "Network Setup",
                    "IT Documentation",
                    "System Updates",
                    "User Support",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.5 + index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
