"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  currentTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  currentColorIndex: number;
}

export default function AboutSection({
  currentTheme,
  currentColorIndex,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 relative">
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
              About Me
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
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
            Get to know the person behind the{" "}
            <motion.span
              className={
                currentColorIndex === 0
                  ? "font-bold text-purple-400 drop-shadow-lg"
                  : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
              }
            >
              code
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="lg:hidden mb-12"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
            <Image
              src="/hero.jpg"
              alt="Mohamed Mohsen"
              className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I&apos;m a dedicated{" "}
                <span className="font-semibold text-cyan-400">
                  Front-End Developer
                </span>{" "}
                specializing in building scalable, modern single-page applications using{" "}
                <span className="text-blue-400 font-medium">React.js</span> and modern JavaScript (ES6+).
                I&apos;ve strengthened my foundation through{" "}
                <span className="font-semibold text-orange-400">
                  ITI (Information Technology Institute)
                </span>{" "}
                training, where I learned to implement clean UI architectures and responsive designs.
              </p>

              <p>
                My passion lies in creating seamless digital experiences — from
                mobile-first responsive interfaces to optimizing application performance.
                I leverage tools like Redux Toolkit and REST APIs while ensuring cross-browser
                compatibility and clean code practices.
              </p>

              <p>
                Beyond coding, I have a background in Mass Communication from Al-Azhar University,
                which enhances my ability to collaborate effectively in team environments and
                communicate complex technical ideas clearly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/hero.jpg"
                alt="Mohamed Mohsen"
                className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
