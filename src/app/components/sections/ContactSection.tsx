"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "../contact/page";

interface ContactSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function ContactSection({
  currentTheme,
  currentColorIndex,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-72 h-72 bg-gradient-to-r ${currentTheme.primary} opacity-5 rounded-full blur-3xl`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span
              className={
                currentColorIndex === 0
                  ? "text-blue-400 drop-shadow-lg"
                  : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
              }
            >
              Get in Touch
            </span>
          </motion.h2>
          <motion.div
            className={`h-1.5 md:h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to bring your{" "}
            <span
              className={
                currentColorIndex === 0
                  ? "font-bold text-purple-400 drop-shadow-lg"
                  : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
              }
            >
              ideas to life
            </span>
            ? Let&apos;s create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">
                      mohsenmido75@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaLinkedin className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-medium">Mohamed Mohsen</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaGithub className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white font-medium">mohamedmohsendev</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
