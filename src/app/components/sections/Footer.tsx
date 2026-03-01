"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

interface FooterProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function Footer({
  currentTheme,
  currentColorIndex,
}: FooterProps) {
  return (
    <footer className="py-12 md:py-16 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <motion.div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg`}
              whileHover={{
                scale: 1.1,
              }}
            >
              <FaCode className="text-white text-xl md:text-2xl" />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={
                  currentColorIndex === 0
                    ? "text-xl md:text-2xl font-bold text-cyan-400 drop-shadow-lg"
                    : `text-xl md:text-2xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
                }
              >
                Mohamed Mohsen
              </span>
              <span className="text-xs md:text-sm text-gray-400 font-medium">
                Front-End Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 md:space-x-8"
          >
            <motion.a
              href="https://github.com/mohamedmohsendev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                <FaGithub className="text-xl" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mohamed-mohsen-matbuly/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>

            <motion.a
              href="mailto:mohsenmido75@gmail.com"
              target="_blank"
              className="group relative"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/20 transition-all duration-300">
                <FaEnvelope className="text-xl" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">
              © {new Date().getFullYear()} Mohamed Mohsen
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Crafted with ❤️ and code
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
