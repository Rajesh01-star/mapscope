'use client'
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function MotionDiv({children,classes}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
      variants={variants}
      className={`${classes} snap-start`}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
