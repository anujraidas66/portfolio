"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Furniture E-Commerce",
    description:
      "Full Stack MERN e-commerce platform with cart, authentication, wishlist, orders, and admin features.",
    image: "/abc.webp",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://github.com/anujraidas66/Furniture-frontend-",
    live: "https://furniture-frontend-peach.vercel.app/",
  },
  {
    title: "Online Bookstore with Admin Panel",
    description:
      "Full Stack MERN bookstore platform with CRUD and order management.",
    image: "/bookstore.avif",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/anujraidas66/online_bookstore-frontend-",
    live: "https://online-bookstore-frontend-tawny.vercel.app/",
  },
  {
  title: "Gantabya Mobility",
  description:
    "Building EV charging infrastructure and innovative mobility solutions for sustainable transportation. Driving the transition toward electric vehicle adoption in Nepal.",
  image: "/gantabya.avif",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn UI",
  ],
  github: "https://github.com/anujraidas66/gantabya-mobility",
  live: "https://gantabya-mobility-h81j.vercel.app/",
},
];


export default function Project() {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-zinc-400 mt-4">
            Some of my recent work and personal projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-900
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-yellow-400
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-zinc-700
                        px-3
                        py-1
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      flex items-center gap-2
                      rounded-lg
                      border
                      border-zinc-700
                      px-4 py-2
                      hover:border-yellow-400
                    "
                  >
                   <FaGithub size={18} />
<ExternalLink size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      flex items-center gap-2
                      rounded-lg
                      bg-linear-to-r
                      from-yellow-400
                      to-orange-500
                      px-4 py-2
                      font-medium
                      text-black
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}