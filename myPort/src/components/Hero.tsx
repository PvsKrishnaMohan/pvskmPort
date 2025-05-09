import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Threads from "./Threads";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasInitialized, setCanvasInitialized] = useState(false);

  useEffect(() => {
    let vantaEffect: any = null;

    const initVanta = async () => {
      if (canvasInitialized || !containerRef.current) return;

      try {
        const VANTA = await import("vanta/dist/vanta.waves.min");
        const THREE = await import("three");

        if (!containerRef.current) return;

        vantaEffect = VANTA.default({
          el: containerRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 60.0,
          waveHeight: 20.0,
          waveSpeed: 0.75,
          zoom: 0.65,
        });

        setCanvasInitialized(true);
      } catch (error) {
        console.error("Failed to load Vanta effect:", error);
      }
    };

    const timeoutId = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [canvasInitialized]);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
      id="hero"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none sm:pointer-events-auto">
        <Threads
          amplitude={window.innerWidth < 640 ? 0.5 : 1}
          distance={window.innerWidth < 640 ? 0 : 0.5}
          enableMouseInteraction={window.innerWidth >= 640}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("hello")}
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-x">
              {t("name")}
            </span>
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t("tagline")}
          </motion.h3>

          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {t("intro")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              onClick={handleResumeClick}
              className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ease-in-out"
            >
              {t("viewResume")}
              <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#about"
          className="text-gray-500 dark:text-gray-400 animate-bounce"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
