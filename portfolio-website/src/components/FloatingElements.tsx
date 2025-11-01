import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: `linear-gradient(45deg, 
              rgba(100, 255, 218, 0.1), 
              rgba(255, 107, 107, 0.1), 
              rgba(79, 195, 247, 0.1)
            )`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 0,
          height: 0,
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '87px solid rgba(100, 255, 218, 0.05)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: 60,
          height: 60,
          background: 'rgba(255, 107, 107, 0.08)',
          borderRadius: '10px',
        }}
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: 40,
          height: 40,
          background: 'rgba(79, 195, 247, 0.08)',
          transform: 'rotate(45deg)',
        }}
        animate={{
          y: [-15, 15, -15],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </Box>
  );
};

export default FloatingElements;