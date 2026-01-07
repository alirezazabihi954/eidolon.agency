import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0, as: Component = 'div' }) => {
  // Split text into words for stagger effect
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
  };

  // @ts-ignore
  return (
    <motion.div
      style={{ display: "inline-block" }} // Ensure words wrap correctly
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};