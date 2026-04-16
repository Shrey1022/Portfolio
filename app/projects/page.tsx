"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "My personal site" },
  { title: "E-commerce App", desc: "Online store UI" },
  { title: "Dashboard", desc: "Admin panel UI" },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}