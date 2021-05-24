export const menu = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const text_reveal = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { x: -20, opacity: 0, transition: { duration: 0.8 } },
};
