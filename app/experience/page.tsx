export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          Experience
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          My professional journey and hands-on development experience.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mt-16 space-y-10">

        {/* 1 */}
        <div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:border-yellow-400 transition">
          <h2 className="text-2xl font-semibold text-white">
            Full Stack MERN Developer
          </h2>

          <p className="text-yellow-400 mt-1">
            Furniture E-Commerce Website
          </p>

          <p className="text-zinc-500 mt-3 text-sm">
            2025 - Present
          </p>

          <p className="mt-5 text-zinc-400 leading-7">
            Built multiple full-stack applications using React, Next.js,
            Node.js, Express, and MongoDB. Worked on authentication,
            REST APIs, cart systems, dashboards, and real-time features.
          </p>
        </div>

        {/* 2 */}
        <div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:border-yellow-400 transition">
          <h2 className="text-2xl font-semibold text-white">
            Frontend Developer
          </h2>

          <p className="text-yellow-400 mt-1">
            Ganatabya Mobility Website
          </p>

          <p className="text-zinc-500 mt-3 text-sm">
            2026
          </p>

          <p className="mt-5 text-zinc-400 leading-7">
            Focused on Next.js, Tailwind CSS, and responsive UI design.
          </p>
        </div>

        {/* 3 */}
        <div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:border-yellow-400 transition">
          <h2 className="text-2xl font-semibold text-white">
            JavaScript & Web Development Learning
          </h2>

          <p className="text-yellow-400 mt-1">
            Self Learning
          </p>

          <p className="text-zinc-500 mt-3 text-sm">
            2022 - 2023
          </p>

          <p className="mt-5 text-zinc-400 leading-7">
            Started with HTML, CSS, and JavaScript fundamentals.
            Learned DOM manipulation, API integration, and basic backend
            concepts before moving into MERN stack.
          </p>
        </div>

      </div>
    </main>
  );
}