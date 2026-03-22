import { motion } from 'framer-motion';

export function HandDrawnArrow({ className, delay=0.5 }: { className?: string, delay?: number }) {
  const draw: import('framer-motion').Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 }, opacity: { delay, duration: 0.1 } }
    }
  };

  return (
    <motion.svg 
      className={className} 
      viewBox="0 0 100 100" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 10 10 C 30 40, 50 60, 80 80"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        variants={draw}
      />
      <motion.path
        d="M 60 85 L 80 80 L 85 60"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
    </motion.svg>
  );
}
