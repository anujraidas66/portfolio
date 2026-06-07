"use client";

import { Code2, Server, Database, Wrench } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Skill() {
  return (
    <section
      id="skills"
      className="py-24 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            My Skills
          </h2>

          <p className="text-zinc-400 mt-4">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="
                bg-zinc-900
                border border-white/10
                rounded-2xl
                p-6
                hover:border-yellow-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
              >
                <Icon
                  size={40}
                  className="text-yellow-400 mb-4"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-black
                      text-sm
                      border
                      border-zinc-700
                    "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}