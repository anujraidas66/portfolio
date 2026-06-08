export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-10">

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
            Ganatabya Mobility 
          </p>

        

          <p className="mt-5 text-zinc-400 leading-7">
           Gantabya Mobility is a technology-driven electric mobility platform focused on developing EV charging infrastructure and sustainable transportation solutions to accelerate electric vehicle adoption in Nepal.
          </p>
        </div>

       

       <div className="border border-white/10 rounded-2xl p-8 bg-zinc-950">
  <h2 className="text-2xl font-semibold text-white">
    Full Stack Developer (Project Experience)
  </h2>

  <p className="text-yellow-400 mt-1">
    Online Bookstore Web Application • MERN Stack
  </p>

  <p className="mt-5 text-zinc-400 leading-7">
    Developed a full-stack online bookstore application focusing on
    CRUD operations for managing books and user data. Implemented
    Create, Read, Update, and Delete functionality for book management
    using a RESTful API architecture. Built the backend using Node.js,
    Express.js, and MongoDB, and developed a responsive frontend using
    React.js for seamless user interaction.
  </p>
</div>
      </div>
    </main>
  );
}