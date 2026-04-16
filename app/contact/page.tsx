"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // ✅ NEW

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🚀 UPDATED SUBMIT FUNCTION (EmailJS)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ✅ simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_9w1xx5g",   // 🔥 service id
        "template_5176tpm",  // 🔥 template id
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "94X5zeYeob72HVPE1"    // 🔥 public key
      );

      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.log(error);
      alert("Failed to send ❌");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Feel free to reach out. I'm open to opportunities.
          </p>

          <div className="mt-8 flex gap-6">
            <a href="mailto:shreydev22@gmail.com" className="text-3xl p-4 rounded-full glass">
              <FaEnvelope className="text-cyan-400" />
            </a>

            <a href="https://github.com/Shrey1022" target="_blank" className="text-3xl p-4 rounded-full glass">
              <FaGithub className="text-cyan-400" />
            </a>

            <a href="https://www.linkedin.com/in/shreyansh1022/" target="_blank" className="text-3xl p-4 rounded-full glass">
              <FaLinkedin className="text-cyan-400" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT (FORM) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-2xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={`w-full p-3 rounded-lg bg-transparent border ${
              focused === "name" ? "border-cyan-400" : "border-white/20"
            }`}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={`w-full p-3 rounded-lg bg-transparent border ${
              focused === "email" ? "border-cyan-400" : "border-white/20"
            }`}
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`w-full p-3 rounded-lg bg-transparent border ${
              focused === "message" ? "border-cyan-400" : "border-white/20"
            }`}
          />

          <motion.button
            type="submit"
            className="btn-primary w-full"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}
