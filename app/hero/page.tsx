"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Welcome */}
          <span className="inline-block text-yellow-400 font-medium tracking-wide">
            Welcome to my Portfolio
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-5xl md:text-7xl font-black text-white leading-tight">
  Hi, I&apos;m <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Anuj Raidas</span>
</h1>

          {/* Typing */}
          <div className="mt-6 h-12 flex justify-center items-center text-2xl md:text-3xl font-semibold text-white">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "React Developer",
                1500,
                "Next.js Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-8 mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
            Passionate Full Stack MERN Developer focused on building modern,
            scalable, and user-friendly web applications using React, Next.js,
            Node.js, Express.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="/resume.pdf"
              download="Anuj_Raidas_Resume.pdf"
              className="rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Download Resume
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-yellow-400 px-7 py-3 text-white transition duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





