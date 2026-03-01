"use client";
import {
  FaRocket,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiBeveledStar } from "react-icons/gi";
import { RiCodeSSlashLine } from "react-icons/ri";

interface HeroSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function HeroSection({
  currentTheme,
  currentColorIndex,
}: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <motion.div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
              animate={{
                rotate: 360,
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <RiCodeSSlashLine className="text-white text-xl" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className={
                  currentColorIndex === 0
                    ? "text-xl font-bold text-cyan-400 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    : `text-xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`
                }
              >
                Mohamed Mohsen
              </motion.span>
              <span className="text-xs text-gray-400 font-medium">
                Front-End Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Navbar component will be imported here */}
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32"
      >
        <motion.div
          style={{ y, opacity }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className={`inline-block p-1 rounded-full bg-gradient-to-r ${currentTheme.primary} mb-6`}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-black/90 rounded-full px-6 py-3 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <GiBeveledStar className="text-yellow-400" />
                </motion.div>
                <span className="text-sm font-medium">
                  Welcome to my Portfolio
                </span>
              </div>
            </motion.div>

            <div className="relative">
              <motion.h1
                className="text-5xl md:text-8xl font-bold mb-6 leading-tight cursor-default select-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  className={
                    currentColorIndex === 0
                      ? "text-cyan-400 drop-shadow-lg cursor-default"
                      : `bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent cursor-default`
                  }
                >
                  Front-End Developer
                </motion.span>
                <br />
                <motion.span
                  className="text-white md:text-4xl text-2xl relative cursor-default"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  React & Modern JS
                  <img
                    src="/hero.jpg"
                    alt="Mohamed Mohsen"
                    className="inline-block w-10 h-10 rounded-full mx-2 align-middle" // Added some basic styling for the image
                  />
                  <motion.span
                    className={
                      currentColorIndex === 0
                        ? "text-purple-400 drop-shadow-lg cursor-default"
                        : `bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent cursor-default`
                    }
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {" "}
                    Specialist
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.div
                className={`h-2 bg-gradient-to-r ${currentTheme.primary} mx-auto rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed cursor-default select-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              I build{" "}
              <motion.span
                className={
                  currentColorIndex === 0
                    ? "font-bold text-cyan-400 drop-shadow-lg"
                    : `font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                scalable
              </motion.span>
              ,{" "}
              <motion.span
                className={
                  currentColorIndex === 0
                    ? "font-bold text-purple-400 drop-shadow-lg"
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                modern
              </motion.span>{" "}
              web applications using{" "}
              <span className="font-semibold text-blue-400">React.js</span> & <span className="font-semibold text-yellow-400">Modern JS</span>.
              <br />
              Passionate about responsive web design, smooth UI/UX implementation, and writing
              clean code.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              className={`group px-8 py-4 bg-gradient-to-r ${currentTheme.primary} text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg relative overflow-hidden`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(59, 130, 246, 0.3)",
                  "0 15px 40px rgba(139, 92, 246, 0.5)",
                  "0 10px 30px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="group-hover:animate-pulse" />
              </motion.div>
              <span>Explore My Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.a>

            <motion.a
              href="https://drive.google.com/drive/u/0/folders/1tZkXWQVFwFTp_sf-HBSnkZrY1uHpkht2"
              target="_blank"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3"
              whileHover={{
                scale: 1.05,
                y: -2,
                borderColor: "rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎓
              </motion.div>
              Certificates View
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex justify-center space-x-8 relative z-50 mt-4"
          >
            {[
              {
                icon: FaWhatsapp,
                href: "https://api.whatsapp.com/send?phone=201112121149",
                color: "hover:text-green-400",
              },
              {
                icon: FaGithub,
                href: "https://github.com/mohamedmohsendev",
                color: "hover:text-white",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/mohamed-mohsen-matbuly/",
                color: "hover:text-blue-400",
              },
              {
                icon: FaEnvelope,
                href: "mailto:mohsenmido75@gmail.com",
                color: "hover:text-red-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${social.color} transition-all duration-300 relative z-50 inline-block`}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                  rotate: { duration: 4, repeat: Infinity, delay: index * 0.3 },
                }}
              >
                <social.icon />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`text-3xl bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent cursor-pointer`}
          >
            <FaArrowDown />
          </motion.div>
          <motion.div
            className={
              currentColorIndex === 0
                ? "mt-2 text-sm text-cyan-400 drop-shadow-lg"
                : `mt-2 text-sm bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
            }
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
