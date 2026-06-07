"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "@/components/particleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-medium">
              Welcome to my Portfolio
            </span>

            <h1 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Anuj Raidas
              </span>
            </h1>

            <div className="mt-6 text-2xl md:text-3xl font-semibold text-white h-14">
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

            <p className="mt-6 max-w-xl text-zinc-400 leading-8">
              Passionate Full Stack MERN Developer focused on building
              modern, scalable, and user-friendly web applications using
              React, Next.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/resume.pdf"
                target="_blank"
                className="rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/20"
              >
                Download Resume
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-yellow-400 px-6 py-3 text-white hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                Contact Me
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10 flex-wrap">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
                <p className="text-zinc-500">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">1+</h3>
                <p className="text-zinc-500">Years Learning</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
                <p className="text-zinc-500">Passion</p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-yellow-500 blur-[90px]"
              />

              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-3 rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-400"
              />

              {/* Floating Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative p-2 rounded-full bg-black"
              >
                <Image
                  src="/anuj.jpg"
                  alt="Anuj Raidas"
                  width={420}
                  height={420}
                  priority
                  className="rounded-full object-cover w-75 h-75 md:w-105 md:h-105 border-4 border-black"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}