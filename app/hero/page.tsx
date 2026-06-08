"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
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
             Hi, I&apos;m Anuj Raidas
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

             <a
  href="/resume.pdf"
  download="Anuj_Raidas_Resume.pdf"
  className="rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/20"
>
  Download Resume
</a>

              <Link
                href="/contact"
                className="rounded-xl border border-yellow-400 px-6 py-3 text-white hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                Contact Me
              </Link>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
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
      </div>
    </section>
  );
}