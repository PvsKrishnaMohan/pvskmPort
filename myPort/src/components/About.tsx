import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {t("aboutTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-4 mb-8 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional headshot"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 dark:bg-white dark:bg-opacity-30 bg-opacity-10 backdrop-blur-md rounded-2xl z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-900 dark:bg-white dark:bg-opacity-30 bg-opacity-10 backdrop-blur-md rounded-2xl z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-7"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("aboutDescription")}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    <CountUp
                      from={0}
                      to={4}
                      separator=","
                      direction="up"
                      duration={0.9}
                      className="count-up-text"
                      startWhen={true}
                    />+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    12+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
