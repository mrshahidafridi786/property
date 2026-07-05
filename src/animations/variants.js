// Centralized Framer Motion animation configurations for Shan Property website

export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.6) => {
  return {
    hidden: {
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: [0.25, 0.25, 0.25, 0.75], // premium cubic ease
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.6) => {
  return {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const blurReveal = (delay = 0, duration = 0.8) => {
  return {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 20
    },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: duration,
        ease: [0.16, 1, 0.3, 1] // Custom luxury ease-out
      }
    }
  };
};

export const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.12)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const buttonHover = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};
