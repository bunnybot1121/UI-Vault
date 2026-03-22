import React from 'react';
import { motion } from 'framer-motion';

export function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotateX: -60, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      style={{ perspective: 1000 }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className="mr-[0.25em] inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
