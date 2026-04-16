"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* ================= MAIN ================= */}
      <section className="h-screen flex items-center bg-grid">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              WEB <br />
              <span className="text-gradient">DEVELOPER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-400 max-w-md"
            >
              I am a web developer who loves to create Websites. I am passionate about learning new technologies and
exploring how AI tools can improve productivity and create better results for businesses and digital
projects.

            </motion.p>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              className="btn-primary mt-6 w-fit"
            >
              Download Resume
            </motion.a>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >


            
            {/* <img
              src="/hero.png"
              alt="hero"
              className="w-[400px] md:w-[500px]"
            /> */}
          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section bg-[#111827]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold">
              About <span className="text-gradient">me</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
             I am Shreyansh Sharma, a motivated technology enthusiast with a strong interest in
computers, space, and modern technology.
I am passionate about learning new technologies and exploring how AI tools can
improve productivity and create better results.

            </p>

            <p className="mt-4 text-gray-400">
              My goal is to create website that not only look good but also
              feel amazing to use.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            


            {/* <img src="/about.jpg" alt="about" /> */}
          </motion.div>

        </div>
      </section>





{/* ================= SKILLS ================= */}
<section className="section bg-[#0f172a]">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      My <span className="text-gradient">Skills</span>
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      {[
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
      ].map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.08 }}
          className="glass p-6 rounded-xl text-center cursor-pointer 
                     hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition"
        >
          <h3 className="font-semibold text-lg">{skill}</h3>
        </motion.div>
      ))}

    </div>
  </div>
</section>




 {/* ================= PROJECTS ================= */}
<section id="projects" className="section bg-grid">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      Things I've <span className="text-gradient">Built</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          title: "Typing Website",
          image: "/p1.png",
          link: "https://shreytech22.blogspot.com/",
        },
        {
          title: "Project 2",
          image: "/p2.png",
          link: "https://project2-link.com",
        },
        {
          title: "Project 3",
          image: "/p3.png",
          link: "https://project3-link.com",
        },
      ].map((project, i) => (
        <motion.a
          key={i}
          href={project.link}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="glass rounded-xl p-4 cursor-pointer block group 
                     hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition"
        >

          {/* IMAGE + OVERLAY */}
          <div className="relative">
            <img
              src={project.image}
              className="rounded-lg"
              alt={project.title}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 
                            group-hover:opacity-100 transition 
                            flex items-center justify-center rounded-lg">
              <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm">
                Visit 🚀
              </span>
            </div>
          </div>

          {/* TITLE */}
          <h3 className="mt-4 text-lg font-semibold">
            {project.title}
          </h3>

        </motion.a>
      ))}

    </div>
  </div>
</section>
    </main>
  );
}
