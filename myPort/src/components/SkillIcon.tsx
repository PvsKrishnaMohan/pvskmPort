import React, { useRef, useEffect } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface SkillIconProps {
  skill: string;
  isActive: boolean;
  color: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, isActive, color }) => {
  const Box = () => {
    const mesh = useRef<THREE.Mesh>(null);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(`https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill}/${skill}-original.svg`);
    
    useFrame((state) => {
      if (!mesh.current) return;
      
      // Rotate box based on active state
      if (isActive) {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
      } else {
        // Slow rotation when not active
        mesh.current.rotation.y += 0.005;
      }
    });

    return (
      <mesh ref={mesh} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial 
          map={texture}
          color={color}
          transparent
          opacity={0.9}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    );
  };

  return (
    <motion.div 
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={!isActive}
          autoRotateSpeed={1}
        />
      </Canvas>
    </motion.div>
  );
};

export default SkillIcon;