"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a]/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          <Link href="/">SHREYANSH SHARMA</Link>
        </motion.h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/#about" className="hover:text-cyan-400 transition">About</Link>
           <Link href="/#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>

          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-cyan-500 rounded-full text-sm hover:bg-cyan-400 transition"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center pr-1">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0f172a] border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-6">

              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link href="/#about" onClick={() => setOpen(false)}>
                About
              </Link>

               <Link href="/#projects" onClick={() => setOpen(false)}>
                Projects
              </Link>

              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>

              <a
                href="/resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="px-5 py-2 bg-cyan-500 rounded-full"
              >
                Resume
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}