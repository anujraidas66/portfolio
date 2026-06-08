export default function Education() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-10">

      
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          Education
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          My academic background and learning journey.
        </p>
      </div>

   
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-yellow-400 transition hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-white">
            Bachelor’s Degree (Completed)
          </h2>

          <p className="text-yellow-400 mt-2">
            Bachelor of Computer Applications / IT Field
          </p>

          <p className="text-zinc-500 text-sm mt-2">
            2022-2025
          </p>

        </div>


        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-yellow-400 transition hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-white">
            Higher Secondary Education
          </h2>

          <p className="text-yellow-400 mt-2">
            Management
          </p>

          <p className="text-zinc-500 text-sm mt-2">
            2020-2022
          </p>
        </div>

   
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-yellow-400 transition hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-white">
            School Education
          </h2>

          <p className="text-yellow-400 mt-2">
            Foundation Level
          </p>

          <p className="text-zinc-500 text-sm mt-2">
            Up to 2022
          </p>

        </div>

       
        <div className="bg-linear-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-8 hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold text-white">
            Current Focus
          </h2>

          <p className="text-yellow-400 mt-2">
            Full Stack Development
          </p>

          <p className="mt-5 text-zinc-400 leading-7">
            Focused on building real-world projects using MERN stack,
            improving system design, APIs, and frontend performance.
          </p>
        </div>

      </div>
    </main>
  );
}