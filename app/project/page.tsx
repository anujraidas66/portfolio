"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

type TechIcon = {
  icon: IconType;
  color: string;
};

type ProjectType = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

const techIcons: Record<string, TechIcon> = {
  React: {
    icon: FaReact,
    color: "text-cyan-400",
  },
  "React JS": {
    icon: FaReact,
    color: "text-cyan-400",
  },
  Redux: {
    icon: SiRedux,
    color: "text-purple-500",
  },
  "Node.js": {
    icon: FaNodeJs,
    color: "text-green-500",
  },
  "Express.js": {
    icon: SiExpress,
    color: "text-gray-300",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "text-green-500",
  },
  Tailwind: {
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "text-white",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "text-blue-500",
  },
};

const projects: ProjectType[] = [
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
      "Building EV charging infrastructure and innovative mobility solutions for sustainable transportation.",
    image: "/gantabya.avif",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/anujraidas66/gantabya-mobility",
    live: "https://gantabya-mobility-h81j.vercel.app/",
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Featured Projects</h2>
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
                border border-white/10
                bg-zinc-900
                transition-all duration-300
                hover:-translate-y-3
                hover:border-yellow-400
              "
            >
              {/* Image with Live Link */}
              <div className="overflow-hidden relative">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
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

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/60
                      opacity-0
                      group-hover:opacity-100
                      transition duration-300
                      flex items-center justify-center
                    "
                  >
                    <span
                      className="
                        px-4 py-2
                        rounded-lg
                        bg-yellow-400
                        text-black
                        font-semibold
                      "
                    >
                      View Live Demo
                    </span>
                  </div>
                </a>
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
                  {project.technologies.map((tech) => {
                    const techData = techIcons[tech];

                    if (!techData) return null;

                    const Icon = techData.icon;

                    return (
                      <span
                        key={tech}
                        className="
                          flex items-center gap-2
                          rounded-full
                          border border-zinc-700
                          px-3 py-1
                          text-sm
                        "
                      >
                        <Icon
                          size={16}
                          className={techData.color}
                        />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      rounded-lg
                      border border-zinc-700
                      px-4 py-2
                      hover:border-yellow-400
                    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
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



// "use client";

// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// const projects = [
//   {
//     title: "Furniture E-Commerce",
//     description:
//       "Full Stack MERN e-commerce platform with cart, authentication, wishlist, orders, and admin features.",
//     image: "/abc.webp",
//     technologies: [
//       "React",
//       "Redux",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Tailwind",
//     ],
//     github: "https://github.com/anujraidas66/Furniture-frontend-",
//     live: "https://furniture-frontend-peach.vercel.app/",
//   },
//   {
//     title: "Online Bookstore with Admin Panel",
//     description:
//       "Full Stack MERN bookstore platform with CRUD and order management.",
//     image: "/bookstore.avif",
//     technologies: [
//       "React JS",
//       "Tailwind CSS",
//       "Redux",
//       "Express.js",
//       "Node.js",
//       "MongoDB",
//     ],
//     github: "https://github.com/anujraidas66/online_bookstore-frontend-",
//     live: "https://online-bookstore-frontend-tawny.vercel.app/",
//   },
//   {
//   title: "Gantabya Mobility",
//   description:
//     "Building EV charging infrastructure and innovative mobility solutions for sustainable transportation. Driving the transition toward electric vehicle adoption in Nepal.",
//   image: "/gantabya.avif",
//   technologies: [
//     "Next.js",
//     "Tailwind CSS",
//     "TypeScript",
//     "Shadcn UI",
//   ],
//   github: "https://github.com/anujraidas66/gantabya-mobility",
//   live: "https://gantabya-mobility-h81j.vercel.app/",
// },
// ];


// export default function Project() {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-black text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-5xl font-bold">
//             Featured Projects
//           </h2>

//           <p className="text-zinc-400 mt-4">
//             Some of my recent work and personal projects.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="
//                 group
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-zinc-900
//                 transition-all
//                 duration-300
//                 hover:-translate-y-3
//                 hover:border-yellow-400
//               "
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={500}
//                   height={300}
//                   className="
//                     h-56
//                     w-full
//                     object-cover
//                     transition-transform
//                     duration-500
//                     group-hover:scale-110
//                   "
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 <h3 className="text-2xl font-bold">
//                   {project.title}
//                 </h3>

//                 <p className="mt-3 text-zinc-400 leading-7">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="
//                         rounded-full
//                         border
//                         border-zinc-700
//                         px-3
//                         py-1
//                         text-sm
//                       "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-6 flex gap-4">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     className="
//                       flex items-center gap-2
//                       rounded-lg
//                       border
//                       border-zinc-700
//                       px-4 py-2
//                       hover:border-yellow-400
//                     "
//                   >
//                    <FaGithub size={18} />
// <ExternalLink size={18} />
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     className="
//                       flex items-center gap-2
//                       rounded-lg
//                       bg-linear-to-r
//                       from-yellow-400
//                       to-orange-500
//                       px-4 py-2
//                       font-medium
//                       text-black
//                     "
//                   >
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>

//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }