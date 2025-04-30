import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { id: 'react', name: 'React.js', color: '#61DAFB', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583093/react_1_d4icd3.png' },
    { id: 'javascript', name: 'JavaScript', color: '#F7DF1E', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583094/javascript_tafrzr.png' },
    { id: 'node', name: 'Node.js', color: '#539E43', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583093/nodejs_pvxit8.png' },
    { id: 'python', name: 'Python', color: '#3776AB', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/python_zwqd14.png' },
    { id: 'azure', name: 'Azure', color: '#0089D6', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/python_zwqd14.png' },
    { id: 'tailwind', name: 'Tailwind CSS', color: '#38B2AC', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/tailwind_ha7rwq.png' },
    { id: 'bootstrap', name: 'Bootstrap', color: '#7952B3', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/bootstrap-framework_xx0vpn.png' },
    { id: 'material', name: 'Material UI', color: '#0081CB', imageUrl: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738583093/git_sytdys.png' }
  ];

  const SkillSphere = ({
    imageUrl,
    isActive
  }: {
    imageUrl: string;
    isActive: boolean;
  }) => {
    const texture = useLoader(THREE.TextureLoader, imageUrl);
    return (
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          map={texture}
          metalness={0.6}
          roughness={0.4}
        />
      </Sphere>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            {t('skillsTitle')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-4 mb-8 rounded-full"
          ></motion.div>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center"
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="relative h-32 w-32 md:h-40 md:w-40 mb-4">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <SkillSphere imageUrl={skill.imageUrl} isActive={activeSkill === skill.id} />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Canvas>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
