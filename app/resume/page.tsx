"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-300">
          I'm a passionate developer who loves building fast,
          responsive, and beautiful applications using modern
          technologies like Next.js and Tailwind CSS.
        </p>
      </motion.div>
    </div>
  );
}