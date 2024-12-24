import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const transitions = {
  slideUp: {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -60, opacity: 0 }
  },
  slideDown: {
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 60, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 }
  },
  fade: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
};

interface PageTransitionProps {
  children: ReactNode;
  variant?: keyof typeof transitions;
}

export function PageTransition({ children, variant = 'slideUp' }: PageTransitionProps) {
  return (
    <motion.div
      variants={transitions[variant]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}